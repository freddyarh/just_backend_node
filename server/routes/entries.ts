import Router from "express";
import { check } from "express-validator";

import { getEntries, setEntries } from "../controllers/entries";
import { validateFields } from "../middlewares/validate-fields";

const router = Router();

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
router.post('/entries', [
    check('title', 'The title is obligatory').not().isEmpty(),
    validateFields
], setEntries);
// router.post('/entries/image/:id', upload.single('avatar'), setProductImage);

router.get('/entries', getEntries);

module.exports = router;