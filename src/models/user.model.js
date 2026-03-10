import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken';
const userSchema = new Schema({
    username: {
        type: string,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,
        index: true//it use for search optimization
    },
    email: {
        type: string,
        required: true,
        unique: true,
        lowecase: true,
        trim: true,

    },
    fullname:
    {
        type: string,
        required: true,
        trim: true,
        index: true//it use for search optimization
    },
    avtar: {
        type: string,/// we use cloudinary url
        required: true,
    }
    ,
    coverImage:
    {
        type: string,/// we use cloudinary url
    }
    ,
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: string,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: string,

    }
    ,{
    timestamps: true
}
});

//it is next is middleware function  at last it call next()
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})//it is hook function


userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}
//bcrypt library use for password encryptiona and also compare passwor

userSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
            _id=this.id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },//jwt.sign is use for generate access token it is payload
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    jwt.sign(
        {
            _id=this.id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },//jwt.sign is use for generate access token it is payload
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN
        }
    )
}
export const User = mongoose.model("User", userSchema)