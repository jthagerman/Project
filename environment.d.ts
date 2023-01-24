declare global {
    namespace NodeJS {
        interface ProcessEnv {
            JWT: string;
            MONGO_URL: string
        }
    }
}

export { }