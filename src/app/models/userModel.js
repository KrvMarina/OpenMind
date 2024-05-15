import { Schema, model, models } from "mongoose";


const userSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    }, { timestamps: true }
);

const UserModel = models.post || model('user', userSchema);

export default UserModel;
