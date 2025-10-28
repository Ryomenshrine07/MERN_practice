const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '..', 'public/uploads');

// check => upload folder if not exists then make it

if(!fs.existsSync(uploadDir)){
    fs.mkdir(uploadDir, {recursive: true })
}

//to create storage multer has method diskStorage({})
const storage = multer.diskStorage({

    // Yaha mention karo kaha file store karni hai
    destination: (req, file, save) => {
        save(null, uploadDir);
    },

    filename: (req, file, save) => {

        // 1. User id (Unique)
        // 2. File extension name ex(txt, image/jpg, image/png, media/mp4, media/mp3)
        // 3. Unique File Name

        const userId = req.user.id;
        const fileExt = path.extname(file.originalname);
        const uniqueFileName = `profile-${userId}-${Date.now()}${fileExt}`;
        save(null, uniqueFileName);
    }
});

const fileFilter = (req, file, allow) => {
    // check file's MIME type

    if(file.mimetype == 'image/jpg' || file.mimetype == 'image/gif'){
        allow(null, true);
    }else{
        allow(new multer.MulterError('LIMIT_UNEXPECTED_FILE','Only jpg, png and gif are allowed'),false);
    }
}


const fileUpload = multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize: 1024 * 1024 * 5
    }
});

module.exports = fileUpload;



