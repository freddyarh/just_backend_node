import Router from "express";
import { check } from "express-validator";
import multer from "multer";
import path from "path";
const upload = multer({ dest: '../../uploads/' });

import { getEntries, setEntries } from "../controllers/entries";
import { validateFields } from "../middlewares/validate-fields";

const router = Router();

const DIR = path.join(__dirname, "../../uploads");

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

module.exports = router;