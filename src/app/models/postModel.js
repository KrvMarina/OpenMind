import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
}, { timestamps: true })

const PostModel = models.post || model('post', postSchema);

export default PostModel;
