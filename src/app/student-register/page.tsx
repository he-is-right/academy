export default function StudentRegister() {
    return <>
        <div className="bg-[#f0f7ff] py-[2rem] md:py-[3rem]">
            <form className="pb-[2rem] w-[95%] md:w-[50%] mx-auto bg-[white] shadow flex flex-col rounded-lg md:mt-[4rem]" action="">
                <h1 className="font-bold text-lg mb-2 text-[#01303F] text-center bg-[#f5f5f5] py-4">Register Now!</h1>
                <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4">
                    <label className="form-control w-[100%] md:w-[95%]">
                        <div className="label">
                            <span className="label-text text-[#01303F]">First Name</span>
                        </div>
                        <input required type="text" placeholder="Enter your first name" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                    </label>
                    <label className="form-control w-[100%] md:w-[95%]">
                        <div className="label">
                            <span className="label-text text-[#01303F]">Last Name</span>
                        </div>
                        <input required type="text" placeholder="Enter your last name" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                    </label>
                </div>
                {/* email and phone number */}
                <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4 mt-4 md:mt-0">
                    <label className="form-control w-[100%] md:w-[95%] ">
                        <div className="label">
                            <span className="label-text text-[#01303F]">Email</span>
                        </div>
                        <input required type="email" placeholder="Enter a valid email address" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                    </label>
                    <label className="form-control w-[100%] md:w-[95%] ">
                        <div className="label">
                            <span className="label-text text-[#01303F]">Phone Number</span>
                        </div>
                        <input required type="phone" placeholder="Enter Phone Number" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                    </label>
                </div>
                {/* gender, course and age */}
                <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4 mt-4 md:mt-0">
                    <label className="form-control w-[100%] md:w-[95%] ">
                        <div className="label">
                            <span className="label-text text-[#01303F]">Gender</span>
                        </div>
                        <select required className="select select-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]">
                            <option disabled selected>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </label>
                    <label className="form-control w-[100%] md:w-[95%] ">
                        <div className="label">
                            <span className="label-text text-[#01303F]">Course</span>
                        </div>
                        <select required className="select select-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]">
                            <option disabled selected>Select Course</option>
                            <option>Web Development</option>
                            <option>Product Design</option>
                            <option>PC/Phone Maintainance</option>
                            <option>Data Analytics</option>
                            <option>Social Media Management</option>
                        </select>
                    </label>
                    <label className="form-control w-[100%] md:w-[95%] ">
                        <div className="label">
                            <span className="label-text text-[#01303F]">Age</span>
                        </div>
                        <select required className="select select-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]">
                            <option disabled selected>Select Age</option>
                            <option>13 - 17</option>
                            <option>18 - 25</option>
                            <option>26 - 30</option>
                            <option>31 - </option>
                        </select>
                    </label>
                </div>
                <div className="form-control w-[95%] mx-auto mt-4">
                    <label className="label cursor-pointer w-[50%] md:w-[24%]">
                        <input type="checkbox" defaultChecked className="checkbox border-[#01303F]" />
                        <span className="label-text text-[#01303F]">Join Community</span>
                    </label>
                </div>
                <button className="bg-[#01303F] border border-2 border-[#01303F] py-4 mt-8 md:mt-7 w-[90%] md:w-[95%] mx-auto rounded btn text-white">Submit</button>
            </form>
        </div>
    </>
}