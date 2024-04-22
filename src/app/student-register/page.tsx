export default function StudentRegister() {
    return <>
        <div className="bg-[#f0f7ff] py-[5rem]">
            <form className="pb-[2rem] w-[50%] mx-auto bg-[white] shadow flex flex-col rounded-lg" action="">
                <h1 className="font-bold text-xl mb-2 text-[#01303F] text-center bg-[#f5f5f5] py-4">Register Now!</h1>
                <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4">
                    <label className="form-control w-[95%]">
                        <div className="label">
                            <span className="label-text text-[#01303F]">First Name</span>
                        </div>
                        <input type="text" placeholder="Enter your first name" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                    </label>
                    <label className="form-control w-[95%]">
                        <div className="label">
                            <span className="label-text text-[#01303F]">Last Name</span>
                        </div>
                        <input type="text" placeholder="Enter your last name" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                    </label>
                </div>
                {/* email and phone number */}
                <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4">
                    <label className="form-control w-[95%] ">
                        <div className="label">
                            <span className="label-text text-[#01303F]">Email</span>
                        </div>
                        <input type="text" placeholder="Enter a valid email address" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                    </label>
                    <label className="form-control w-[95%] ">
                        <div className="label">
                            <span className="label-text text-[#01303F]">Phone Number</span>
                        </div>
                        <input type="text" placeholder="Enter Phone Number" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                    </label>
                </div>
                {/* gender, course and age */}
                <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4">
                    <label className="form-control w-[95%] ">
                        <div className="label">
                            <span className="label-text">Gender</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </label>
                    <label className="form-control w-[95%] ">
                        <div className="label">
                            <span className="label-text">Course</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Select Course</option>
                            <option>Web Development</option>
                            <option>Product Design</option>
                            <option>PC/Phone Maintainance</option>
                            <option>Data Analytics</option>
                            <option>Social Media Management</option>
                        </select>
                    </label>
                    <label className="form-control w-[95%] ">
                        <div className="label">
                            <span className="label-text">Age</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Select Age</option>
                            <option>13 - 17</option>
                            <option>18 - 25</option>
                            <option>26 - 30</option>
                            <option>31 - </option>
                        </select>
                    </label>
                </div>
                <button className="bg-[#01303F] py-2 my-2">Submit</button>
            </form>
        </div>
    </>
}