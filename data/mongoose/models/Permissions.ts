import { Schema } from 'mongoose';



const Permissions = new Schema({
    modifyArticles: {
        type: 'boolean'
    },

}, { _id: false })

export default Permissions