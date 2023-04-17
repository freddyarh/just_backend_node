import { response, request } from "express";
import fs from "fs";
import path from "path";

import Entries from '../models/entries';


export const setEntries = async(req = request, res = response) => {

    const body = req.body;
    const file: Express.Multer.File | undefined = req.file;

    const data = {
        ...body,
        image: file?.filename || ""
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
export const getImageFileEntries = async(req = request, res = response) => {

    console.log(req.params)
    return

    const pathImagen = path.join( __dirname, '../../uploads/' );
        if ( fs.existsSync( pathImagen ) ) {
            return res.sendFile( pathImagen )
        }


};