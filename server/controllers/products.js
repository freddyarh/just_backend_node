const { response } = require('express');
const  Products = require('../models/products');


const setProducts = async(req, res = response) => {

    const data = {
        title:  'the test',
        author: 'Fredy',
        body:   'There is not body'
    }
    const product = new Products(data);

    await product.save();

    res.json({
        ok: true,
        msj: 'Access true',
        product
    });
};
const setProductImage = async(req, res = response) => {

    console.log(req.file);
    const { size } = req.file;
    console.log(size);
    console.log(req.params);
    if( size > 1000 ){
        console.log('entro')
        return res.status(402).json({
            ok: false,
            msj: 'Size not allowed'
        });
    }

    res.json({
        ok: true,
        msj: 'Access true'
    });
};

const getProducts = async(req, res = response) => {

    const product = await Products.find({})
                                  .limit(2)

    res.json({
        ok: true,
        msj: 'Access true',
        product
    });
};

module.exports = {
    getProducts,
    setProducts,
    setProductImage
}