import { response, request } from "express";
import Entries from '../models/entries';


const setEntries = async(req = request, res = response) => {

    const body = req.body;
    console.log(body)
    const entries = new Entries(body);

    await entries.save();

    res.json({
        ok: true,
        msj: 'Access true',
        entries
    });
};
const setProductImage = async(req = request, res = response) => {

};

const getEntries = async(req = request, res = response) => {

    const entries = await Entries.find({})

    res.json({
        ok: true,
        msj: 'Access true',
        entries
    });
};

module.exports = {
    getEntries,
    setEntries,
    setProductImage
}