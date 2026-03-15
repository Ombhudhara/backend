import multer from "multer";

const storage = multer.diskStorage({//here we are using disk storage to store the file in our local system but we can also use memory storage to store the file in memory and then we can upload it to cloudinary or any other cloud storage service
  destination: function (req, file, cb) {//// The file upload option is supported only by Multer middleware,
// other middlewares do not process file uploads.
    cb(null, "./public/temp")//cb is callback function which is used to specify the destination of the uploaded file and the name of the uploaded file. it takes two arguments first is error and second is the destination of the uploaded file
  },
  filename: function (req, file, cb) {
   
    cb(null, file.originalname )
  }
})

export const upload = multer({ 
    storage: storage 
})