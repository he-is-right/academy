"use client"

import getStudents from "./requests";
import Student from "./student";

export default async function Dashboard() {
    const students = await getStudents();
    // console.log({ students })
    return <>
        <div className="pt-[7rem] pb-[2rem] bg-white w-[98%] mx-auto">
            <div role="tablist" className="tabs tabs-lifted bg-white">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Students" />
                <div role="tabpanel" className="tab-content border-base-300 rounded-box p-6">
                    <div className="overflow-x-auto">
                        <table className="table bg-white">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Course</th>
                                    <th></th>

                                </tr>
                            </thead>
                            {
                                students.map((student) => {
                                    return (
                                        <>
                                            <tbody className="text-[#01303F]">
                                                {/* rows */}
                                                <Student
                                                    key={student.id}
                                                    id={student.id}
                                                    firstName={student.firstName}
                                                    lastName={student.lastName}
                                                    phone_number={student.phone_number}
                                                    course={student.course}
                                                    age={student.age}
                                                    gender={student.gender}
                                                    // location={student.location}
                                                    email={student.email}
                                                    join={student.join}
                                                />
                                            </tbody>
                                        </>
                                    )
                                })
                            }
                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th></th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
            </div>
        </div>
    </>
}