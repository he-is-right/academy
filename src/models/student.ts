import { Entity, Fields } from "remult"

@Entity("students", {
    allowApiCrud: true,
})
export class Student {
    @Fields.cuid()
    id = ""
    @Fields.string()
    first_name = ""
    @Fields.string()
    last_name = ""
    @Fields.string()
    email = ""
    @Fields.string()
    phone = ""
    @Fields.string()
    gender = ""
    @Fields.string()
    courses = ""
    @Fields.string()
    age = ""
    @Fields.boolean()
    join_community = false
    @Fields.createdAt()
    created_at = new Date()
}