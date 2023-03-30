import { response, request } from "express";
import Products from '../models/products';


const setProducts = async(req = request, res = response) => {

    const body = req.body;
    console.log(body)

    const data = {
        title:  'the test',
        author: 'Fredy',
        body:   'There is not body'
    }
    const product = new Products(body);

    await product.save();

    res.json({
        ok: true,
        msj: 'Access true',
        product
    });
};
const setProductImage = async(req = request, res = response) => {

};

const getProducts = async(req = request, res = response) => {

    const product = await Products.find({})

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