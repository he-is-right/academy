import { Entity, Fields } from "remult"

@Entity("students", {
    allowApiCrud: true,
})
export class Student {
    @Fields.
        id = ""
    first_name = ""
    last_name = ""
    email = ""
    phone = ""
    gender = ""
    courses = ""
    age = ""
    join_community = false
    created_at = new Date()
}