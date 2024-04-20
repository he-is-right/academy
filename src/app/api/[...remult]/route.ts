import { remultNextApp } from "remult/remult-next";
import { Student } from "@/models/student";

const api = remultNextApp({
    entities: [Student],
})
export const { GET, POST, PUT, DELETE } = api