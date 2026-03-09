const cloudinary = require("cloudinary").v2
require("dotenv").config()

exports.uploadImage = async(file , folder , height , quality) =>{
    const options = {folder};
    if(file){
        options.file = file
    }
    if(height){
        options.height = height
    }
    if(quality){
        options.quality = quality
    }
    options.resource_type = "auto"
    return await cloudinary.uploader.upload(file.tempFilePath , options);

}