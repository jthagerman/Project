import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'knowledge_bank_entry'

const schema = new Schema({
    question: { 
        type: 'string',
        required: true
    },
    answer: {
        type: 'string',
        required: true
    },
    thumbnail: {
        type: 'string',
        required: false,
        validate: {
            validator: (value: string) => /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(value),
            message: 'Must be a valid URL'
        }
    },
    blogPost: {
        type: 'string',
        required: false
    },
    interest: {
        type: 'number',
        default: 0
    }
})

const KnowledgeBankEntry = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema)
export default KnowledgeBankEntry