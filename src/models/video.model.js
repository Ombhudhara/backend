import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema({
    videoFile: {
        type: String,
        requird: true
    },
    thumbnail: {
        type: String,
        requird: true
    },
    title: {
        type: String,
        requird: true
    },
    description: {
        type: String,
        requird: true
    },
    duration: {
        type: Number,
        requird: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
    ,{
    timestamps: true
}
 });

videoSchema.plugin(mongooseAggregatePaginate)//

export const Video = mongoose.model("Video", videoSchema)