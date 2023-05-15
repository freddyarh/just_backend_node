import { Date } from "mongoose";

export interface EntriesInterface {
    title: String;
    description: String;
    image: String;
    ranking: Number;
    date: Date;
    user: String;
}