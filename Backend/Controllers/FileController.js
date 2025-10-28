const multer = require("multer");
const fileUpload = require("../Config/multerConfig");
const UserFiles = require("../models/FileModel");


const upload = async(req, res) => {
    // single(), array(), any().. etc => they returns an multer hanlder function
    const uploader = fileUpload.single('file');
    uploader(req ,res, async(err) => {
        if(err instanceof multer.MulterError){
            return res.status(400).json({
                message: err.message
            });
        }else if(err){
            return res.status(400).json({
                message: 'Unknown error occured while uploading file'
            });
        }
        // handle file upload

        try{
            if(!req.file){
                return res.status(400).json({
                    message:"NO file provided"
                })
            }
            console.log("File Uploaded :", req.file);
            const imageUrl = `/uploads/${req.file.filename}`;

            const newFile = await UserFiles.create({
                user: req.user.id,
                originalName:req.file.originalname,
                filename:req.file.filename,
                path:imageUrl,
                mimetype:req.file.mimetype,
                size:req.file.size
            });
            await newFile.save();

            return res.status(201).json({
                message:'file saved successfully',
                fileUrl: newFile.path
            });
        }catch(err){
            console.log("database error :",err);

            return res.status(500).json({
                message:"there was some problem in uploading the file"
            });
        }
    });
}


module.exports = {upload}