import Router from "express";
import multer from "multer";
import path from "path";
import { getEntries, setEntries } from "../controllers/entries";

const router = Router();

router.post('/:id/:miremos', (req, res, next) => {

    const { name, lastName } = req.body;
    const { id } = req.params;
    const { ids } = req.query;
    console.log(req.body);
    console.log(req.params);
    console.log('si',req.query);

    res.status(200).json({
        ok: true,
        msj: 'Respuesta correcta',
        name,
        lastName
    });
});
router.post('/entries', setEntries);
// router.post('/entries/image/:id', upload.single('avatar'), setProductImage);

router.get('/entries', getEntries);

module.exports = router;