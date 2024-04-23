"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
// import { remult } from "remult";

export default function Dashboard() {
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
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody className="text-[#01303F]">
                                {/* rows */}
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">

                                            <div>
                                                <div className="font-bold">Timothy Dawadakpoye</div>
                                                <div className="text-sm opacity-50">Join Community</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        07058344699
                                        <br />
                                    </td>
                                    <td>timdawadakpoye@gmail.com</td>
                                    <td>26 - 30</td>
                                    <td>Male</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs text-[#0080ff]">details</button>
                                    </th>
                                </tr>
                            </tbody>
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