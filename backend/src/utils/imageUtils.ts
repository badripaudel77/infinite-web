// Handle uploading image 
import { Response } from "express";

const multer = require('multer');
import fs from "fs";
import path from "path";

const upload = multer({ dest: 'uploads', filename: new Date()+ ".png"});

// Uploading image with multer, docs: https://github.com/expressjs/multer
export const uploadImage = (req:any, res: Response) => {
    // console.log('request file >>> ', req.file);
    if (!req.file) {
        return res.status(400).json({error: 'Please select an image you want to upload'});
      }
    const filename = `${req.file.fieldname}_${req.file.filename}_${Date.now()}`;
    const oldPath = req.file.path;
    const extName = path.extname(req.file.originalname);
    
    const newPath = path.join(req.file.destination, filename) + extName;
    
    fs.rename(oldPath, newPath, e => {
        if(e) {
            return res.status(500).json({message: 'Something went wrong while uploading featured image'});
        }
    });
    
    return res.status(200).json({
        message: 'Featured image uploaded successfully',
        file: {
            image: req.file.originalname,
            storedName : filename // only for dev purpose
        }
    });
}

export default upload;