// import getStudents from "./requests";

interface StudentProps {
    id: string;
    firstName: string | null;
    lastName: string | null;
    phone_number: string | null;
    course: string | null;
    age: string | null;
    gender: string | null;
    email: string | null;
    join: boolean | null;
}

const Student: React.FC<StudentProps> = ({ id, firstName, lastName, phone_number, course, age, gender, email, join }) => {

    return (
        <>
            <tr>
                <td>
                    <div className="flex items-center gap-3">

                        <div>
                            <div className="font-bold">{firstName} {lastName}</div>
                            <div className="text-sm opacity-50">Join Community{join}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {phone_number}
                    <br />
                </td>
                <td>{email}</td>
                <td>{age}</td>
                <td>{gender}</td>
                <td>{course}</td>
                <th>
                    <button className="btn btn-ghost btn-xs text-[#0080ff]">details</button>
                </th>
            </tr>
        </>
    );
};

export default Student;


