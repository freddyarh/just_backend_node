import { response, request } from "express";
import Entries from '../models/entries';


export const setEntries = async(req = request, res = response) => {

    const body = req.body;
    const file: Express.Multer.File | undefined = req.file;
    const fileName = `${ file?.filename }_${ file?.originalname }`;

    const data = {
        ...body,
        image: fileName
    }              
    const entries = new Entries(data);
                                         
    await entries.save();

    res.json({
        ok: true,
        msj: 'Access true',
        entries
    });
};
export const setEntriesImage = async(req = request, res = response) => {

};

export const getEntries = async(req = request, res = response) => {

    const entries = await Entries.find({})

    res.json({
        ok: true,
        msj: 'Access true',
        entries
    });
};