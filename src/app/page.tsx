import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import individual from "../../public/individual.jpg"
import team from "../../public/team.jpg"
import students from "../../public/students.jpeg"
import students3 from "../../public/students3.jpeg"

export const metadata: Metadata = {
    title: "Home"
}

export default function HomePage() {
    return <>
        {/* Hero section */}
        <section className="_secondary bg-[#f0f7ff] py-6 md:py-[4rem]">
            <div className="flex flex-col-reverse md:flex-row justify-between w-[95%] mx-auto gap-8 md:gap-0">
                <div className="w-[100%] md:w-[45%] flex flex-col gap-4 md:gap-8">
                    <h1 className="text-4xl md:text-8xl font-bold">Start a career in Tech today!</h1>
                    <p>Embark on a transformative journey tailored to cultivate expertise for proficient tech professionals, navigating through a dynamic curriculum that emphasizes hands-on, project-based learning experiences.</p>
                    <div>
                        <Link className="bg-[#0080ff] hover:bg-[#0080ff] text-white text-center py-2 px-4 rounded font-bold" href="/student-register">Enroll Now</Link>
                    </div>
                </div>
                <div className="w-[100%] md:w-[45%]">
                    {/* <img className="w-full rounded-lg" src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?size=626&ext=jpg&uid=R46440306&semt=ais" alt="third-party image" /> */}
                    <Image className="_filter rounded-lg" src={students3} alt="Team Image" />
                </div>
            </div>
        </section>
        {/* Why Owlcade Academy section */}
        <section className="_secondary py-[4rem]">
            <h1 className="text-center text-xl md:text-2xl font-bold">Why Choose Owlcade ICT Academy?</h1>
            <div className="flex flex-col md:flex-row justify-between my-[2rem] md:my-[4rem] w-[95%] md:w-[80%] mx-auto gap-4">
                <div className="shadow-xl hover:shadow-2xl flex flex-col items-center justify-center w-[90%] mx-auto md:mx-0 md:w-[22%] p-4 rounded text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pickaxe"><path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" /><path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393" /><path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" /><path d="M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319" /></svg>
                    <h1 className="font-bold mb-2">
                        Experienced Instructors</h1>
                    <p>Our instructors boast extensive expertise, guiding students with practical insights and real-world experience.</p>
                </div>

                <div className="shadow-xl hover:shadow-2xl flex flex-col items-center justify-center w-[90%] mx-auto md:mx-0 md:w-[22%] p-4 rounded text-center">
                    <h1 className="font-bold mb-2">Up to Date Curriculum</h1>
                    <p>Our curriculum evolves constantly, integrating the latest trends, technologies, and industry best practices.</p>
                </div>

                <div className="shadow-xl hover:shadow-2xl flex flex-col items-center justify-center w-[90%] mx-auto md:mx-0 md:w-[22%] p-4 rounded text-center">
                    <h1 className="font-bold mb-2">Opportunity</h1>
                    <p>Get live-changing opportunities in the Tech industry at your fingertips.</p>
                </div>

                <div className="shadow-xl hover:shadow-2xl flex flex-col items-center justify-center w-[90%] mx-auto md:mx-0 md:w-[22%] p-4 rounded text-center">
                    <h1 className="font-bold mb-2">Real-World Projects</h1>
                    <p>Utilize acquired knowledge through hands-on application in real-world situations, enhancing understanding and skill development.</p>
                </div>
            </div>
        </section>
        {/* Available courses section */}
        <section className="primary_gradient text-white">
            <div className=" py-[4rem] md:py-[8rem] flex flex-col md:flex-row w-full md:w-[80%] px-2 md:px-0 mx-auto items-center">
                <h1 className="w-[95%] md:w-[50%] text-3xl md:text-5xl">Kickstart your tech journey today by immersing yourself in your chosen area of interest.</h1>
                <div className="w-[95%] md:w-[45%] mx-auto">
                    <h1 className="font-bold text-xl md:text-2xl mt-8 md:mt-0">Available Courses</h1>
                    <ul className="flex flex-wrap gap-4 w-[100%] mt-8">
                        <li className="border py-2 px-4 rounded cursor-pointer">Web Development</li>
                        <li className="border py-2 px-4 rounded cursor-pointer">Product Design</li>
                        <li className="border py-2 px-4 rounded cursor-pointer">Phone Repair</li>
                        <li className="border py-2 px-4 rounded cursor-pointer">Data Analytics</li>
                        <li className="border py-2 px-4 rounded cursor-pointer">Data Science</li>
                        <li className="border py-2 px-4 rounded cursor-pointer">Artificial Intelligence</li>
                        <li className="border py-2 px-4 rounded cursor-pointer">PC Maintainance</li>
                        <li className="border py-2 px-4 rounded cursor-pointer">Social Media Management</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* Team and Individual register section */}
        <section className="_secondary py-[4rem] md:py-[8rem] text-white">
            <h1 className="text-center font-bold text-xl md:text-2xl">The best Institute for All.</h1>
            <div className="w-[90%] md:w-[80%] mx-auto my-8">
                <div className="flex flex-col-reverse md:flex-row justify-between mb-[4rem]">
                    <div className="w-[100%] md:w-[40%] flex flex-col gap-5">
                        <h1 className=" font-bold mt-2 md:mt-0">For Individuals</h1>
                        <p>At Owlcade ICT Academy, you'll receive exceptional training with individualized mentorship, enriching your expertise and unlocking life-altering opportunities.</p>
                        <div>
                            <Link href="/student-register" className="border border-2 border-[#0080ff] hover:bg-[#0080ff] hover:text-white text-center py-2 px-4 rounded font-bold">Get Started</Link>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[50%]">
                        <Image className="rounded-lg" src={individual} alt="Individual Image" />
                    </div>
                </div>

                <div className="flex flex-col-reverse md:flex-row justify-between">
                    <div className="w-[100%] md:w-[40%] flex flex-col gap-5">
                        <h1 className="font-bold mt-2 md:mt-0">For Team</h1>
                        <p>Owlcade ICT Academy offers teams the best training skills, including deep-dive mentoring, knowledge expansion, and life-changing opportunities.</p>
                        <div>
                            <Link href="/team" className="border border-2 border-[#0080ff] hover:bg-[#0080ff] hover:text-white text-center py-2 px-4 rounded font-bold">Get Started</Link>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[50%]">
                        <Image className="rounded-lg" src={team} alt="Team Image" />
                    </div>
                </div>
            </div>
        </section>
        {/* Student Membership Section */}
        <section className="_hero py-8">
            <div className="bg-white _shadow _secondary w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center rounded py-8 px-2 my-[4rem] gap-4">
                <div className="w-[100%] md:w-[35%]">
                    <Image className="_filter rounded-lg" src={students} alt="Member Image" />
                </div>
                <div className="w-[100%] md:w-[50%] flex flex-col gap-2">
                    <h1 className="font-bold">Become a Student Today</h1>
                    <p>Focused on creating awareness, impacting Knowledge and offering life changing opportunities</p>
                    <div className="mt-3">
                        <Link href="/student-register" className="border border-2 border-[#0080ff] hover:bg-[#0080ff] hover:text-white text-center py-2 px-4 rounded font-bold">Start Now</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
}