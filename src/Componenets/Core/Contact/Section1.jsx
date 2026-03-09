import NewForm from "./Form"
import chat from "../../../assets/chat.png"
import add from "../../../assets/location.png"
import contact from "../../../assets/contact-mail.png"
function Section1(){
    return(
        <div className="w-full bg-[rgb(3,1,29)] ">
            <div className="w-10/12 mx-auto flex lg:flex-row flex-col gap-y-5 justify-between items-center  lg:pt-0 pt-20">
                <div className="lg:w-[600px] w-10/12 px-3 py-3 bg-gray-800 rounded-lg flex flex-col justify-evenly items-center gap-y-4">
                    <div className="flex flex-col justify-evenly items-center  ">
                        <div className="flex flex-row justify-evenly items-center gap-x-3">
                            <img className="object-contain w-[25px] invert" src={chat} alt="" />
                            <h1 className="text-white text-2xl font-bold">Chat with us</h1>
                        </div>
                        <h2 className="text-md font-bold text-gray-500">
                            Our friendly team is here to help.
                        </h2>
                        <h2 className="text-md font-bold text-gray-500">
                            Email Address
                        </h2>
                    </div>

                    <div className="flex flex-col justify-evenly items-center ">
                        <div className="flex flex-row justify-evenly items-center gap-x-3">
                            <img className="object-contain w-[25px] invert " src={add} alt="" />
                            <h1 className="text-white text-2xl font-bold">Visit us</h1>
                        </div>
                        <h2 className="text-md font-bold text-gray-500">
                      Come and say hello at our office HQ.
                        </h2>
                        <h2 className="text-md font-bold text-gray-500">
                          Here is the location/ address


                        </h2>
                    </div>

                    <div className="flex flex-col justify-evenly items-center ">
                        <div className="flex flex-row justify-evenly items-center gap-x-3">
                            <img className="object-contain w-[25px] invert " src={contact} alt="" />
                            <h1 className="text-white text-2xl font-bold">Call us</h1>
                        </div>
                        <h2 className="text-md font-bold text-gray-500">
                            Mon - Fri From 8am to 5pm
                        </h2>
                        <h2 className="text-md font-bold text-gray-500">
                          +123 456 7890
                        </h2>
                    </div>
                </div>
                 <div className="w-full">
                 <NewForm></NewForm>
                 </div>
            </div>
        </div>
    )
}

export default Section1