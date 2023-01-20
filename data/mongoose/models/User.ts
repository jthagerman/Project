import mongoose, { Schema } from 'mongoose';
import Permissions from '@/data/mongoose/models/Permissions';

const MODEL_NAME = "user"
const schema = new Schema({

    email: {
        type: 'string',
        required: true,
        trim: true,
        lowercase: true,
        index: true,
        unique: true
    },
    firstName: {
        type: 'string',
        required: true,
        trim: true
    },
    lastName: {
        type: 'string',
        required: true,
        trim: true

    },
    password: {
        type: 'string',
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: new Date()
    },
    permissions: {
        type: Permissions,
        requred: false
    }
})

const User = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema)

export default User