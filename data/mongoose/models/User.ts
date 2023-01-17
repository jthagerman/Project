import mongoose, { Schema } from 'mongoose';


const MODEL_NAME = "user"

const schema = new Schema({

    email: {
        type: 'string',
        required: true,
        trim: true,
        lowercase: true,

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
        // validate: {
        //     validator: (value: string) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value),
        //     message: "Password must be at least 8 characters and contain at least one number"
        // }
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: new Date()
    },
    type: {
        type: 'string',
        validate: {
            validator: (value: string) => ['user', 'admin'].includes(value)
        },
        default: 'user'
    }
})



const User = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema)


export default User