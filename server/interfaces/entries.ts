import { Date } from "mongoose";

export interface EntriesInterface {
    title: String;
    description: String;
    image: String;
    date: Date;
    user: String;
}