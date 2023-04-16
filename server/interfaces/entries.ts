import { Date } from "mongoose";

interface entries {
    title: String;
    description: String;
    image: String;
    date: Date;
    user: String;
}