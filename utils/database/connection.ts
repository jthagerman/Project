import { randomUUID } from 'crypto';
import mongoose from 'mongoose'

// A table that keeps track of the amount of times we have attempted to retry, per function call.
// Since this is on a serverless instance, it is important to not have a global state for retry count,
// because we could potentially lock the entire application. 
const retryTable: { [key: string]: number } = {} 

// The maximum amount of attempts to try to reconnect on failure, before giving up.
const MAXIMUM_RETRY_ATTEMPTS: number = 5

export default async function ensureConnection(retryId?: string): Promise<boolean> {
    // If the database is already connected, we don't need to do anything.
    if(mongoose.connections[0]?.readyState) return true;

    // If a retryId is available, and we're over the maximum retry attempt cap, give up.
    if(retryId && retryTable[retryId] >= MAXIMUM_RETRY_ATTEMPTS) {
        // Clear out the retryTable to prevent a memory leak.
        delete retryTable[retryId]
        return false
    }

    try {
        // Connect to the database, returning true if successful. 
        await mongoose.connect(process.env.MONGO_URL)
        return true
    } catch(error) {
        // If connection failed, generate (or use existing) retryId, incremement retry counter, and try again.
        retryId = retryId ?? randomUUID() 
        retryTable[retryId] = (retryTable[retryId] ?? 0) + 1;
        return ensureConnection(retryId)
    } 
}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO_URL: string
        }
    }
}