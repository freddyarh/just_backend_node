import Router from "express";
import { check } from "express-validator";
import multer from "multer";
import path from "path";

import { getEntries, getImageFileEntries, setEntries } from "../controllers/entries";
import { validateFields } from "../middlewares/validate-fields";

const router = Router();

const DIR = path.join(__dirname, "../../uploads");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DIR)
    },
    filename: function (req, file, cb) {
        console.log(req)
        const [filename, extension] = file.originalname.split('.');
        const uniqueSuffix = filename + "-" + Date.now() + '-' + Math.round(Math.random() * 1E9) + "." + extension;
        cb(null, uniqueSuffix)
    }
});

const upload = multer({ storage: storage,
    fileFilter: (req, file, cb) => {
        try {
            if (
              (file.mimetype == "image/png" ||
              file.mimetype == "image/jpg" ||
              file.mimetype == "image/jpeg" ||
              file.mimetype == "application/pdf" ||
              file.mimetype == "application/msword" ||
              file.mimetype == "application/vnd.ms-word.document.macroEnabled.12" ||
              file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
              file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.template" ||
              file.mimetype == "application/vnd.ms-powerpoint" ||
              file.mimetype == "application/vnd.ms-excel") 
            ) {
              cb(null, true);
            } else {
              cb(null, false);
              return cb(new Error("Only .png, .jpg and .jpeg format allowed or size not allowed!"));
            }
        } catch (error) {
            console.log('El error es ',error);
        }
    },
});

router.post('/:id/:miremos', (req, res, next) => {

    const { name, lastName } = req.body;
    
    console.log(req.params);
    console.log('si', req.query);

    res.status(200).json({
        ok: true,
        msj: 'Respuesta correcta',
        name,
        lastName
    });
});
router.post('/entries', upload.single('image'), [
    check('title', 'The title is obligatory').not().isEmpty(),
    check('description', 'The description is obligatory').not().isEmpty(),
    validateFields
], setEntries);

router.get('/entries', getEntries);
router.get('/entriesImageFile/:id', getImageFileEntries);

module.exports = router;