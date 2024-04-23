export default function Team() {
    return <div className="bg-[#f0f7ff] py-[2rem] md:py-[3rem]">
        <form className="pb-[2rem] w-[95%] md:w-[50%] mx-auto bg-[white] shadow flex flex-col rounded-lg md:mt-[4rem]" action="">
            <h1 className="font-bold text-lg mb-2 text-[#01303F] text-center bg-[#f5f5f5] py-4">Register Your Team/Organisation</h1>
            <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4">
                <label className="form-control w-[100%] md:w-[95%]">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Team or Organisation</span>
                    </div>
                    <input required type="text" placeholder="Enter Team or Organisation name here" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                </label>
                <label className="form-control w-[100%] md:w-[95%]">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Number of students</span>
                    </div>
                    <input required type="text" placeholder="Enter Number of students" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                </label>
            </div>
            {/* full name and role*/}
            <div className="flex flex-col md:flex-row gap-4 w-[100%] px-4 mt-4 md:mt-0">
                <label className="form-control w-[100%] md:w-[95%]">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Full Name</span>
                    </div>
                    <input required type="text" placeholder="Enter your full name" className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                </label>
                <label className="form-control w-[100%] md:w-[95%] ">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Your Role</span>
                    </div>
                    <input required type="phone" placeholder="Example: Teacher, Supervisor, CEO..." className="input input-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]" />
                </label>
            </div>
            {/* full name, email and phone number */}
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
                        <option disabled selected>Select your Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </label>

                <label className="form-control w-[100%] md:w-[95%] ">
                    <div className="label">
                        <span className="label-text text-[#01303F]">Age</span>
                    </div>
                    <select required className="select select-bordered border-[#01303F] w-full bg-[transparent] text-[#01303F]">
                        <option disabled selected>Select your Age</option>
                        <option>13 - 17</option>
                        <option>18 - 25</option>
                        <option>26 - 30</option>
                        <option>31 - </option>
                    </select>
                </label>
            </div>
            <button className="bg-[#01303F] border border-2 border-[#01303F] py-4 mt-8 md:mt-7 w-[90%] md:w-[95%] mx-auto rounded btn text-white">Submit</button>
        </form>
    </div>
}