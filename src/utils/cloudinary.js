import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
          
// import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dztwxp0kc', 
  api_key: '656172797151876', 
  api_secret: 'xh4lN8I5Nuo9v-cz2M6qADUNKhc' 
});

const uploadOnCloudinary=async (localfilepath)=>{
        try{
            if(localfilepath){
                console.log("localfilepath",localfilepath);

                //upload the file on cloudinary
                // "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg"
               const response=await cloudinary.uploader.upload(localfilepath,
                { resource_type:'auto'});
                console.log("response is",response)
                return  response
            }
            else{
                return null;
            }
        }catch(err){
            console.error("Error in uploadOnCloudinary:", err);
            fs.unlinkSync(localfilepath)//remove the locally saved temporary file as the upload operation failed.
            return null;
        }
}
export {uploadOnCloudinary}
