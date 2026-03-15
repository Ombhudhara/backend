import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';//fs is file system module in node js .it is used to read and write, remove files in node js

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
  api_key:process.env.CLOUDINARY_API_KEY ,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
//using this configuration we can use the cloudinary services in our application
const uploadOnCloudinary=async(localFilepath)=>{
    try{
        if(!localFilepath) return null;//if the local file path is not provided then return null
        //upload the file on cloudinary
       const response=await cloudinary.v2.uploader.upload(localFilepath,{
            resource_type:"auto",
        })
        //file has been uploaded on cloudinary
        console.log("file has been uploaded on cloudinary",response.url);
        //remove the file from local server
        return response;
    }
    catch(err)
    {
        fs.unlinkSync(localFilepath)//remove the locally saved temporary file as the uploading process is failed
        return null;
    }
}


cloudinary.v2.uploader.upload("path/to/your/image.jpg", {public_id: "sample_image"}, function(error, result) {
  console.log(result, error);   
})

export {uploadOnCloudinary};//this is used to upload the file on cloudinary and return the url of the uploaded file on cloudinary   