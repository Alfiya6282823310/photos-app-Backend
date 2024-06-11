const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "id":Number,
        "albumid":Number,
        "imageid":Number,
        "image":String
    }
)
let photosmodel=mongoose.model("photos",schema);
module.exports={photosmodel}