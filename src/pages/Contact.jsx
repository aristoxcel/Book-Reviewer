import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";


function Contact() {
  return (
    <div>
        <div className="container lg:px-24 px-8 mx-auto lg:py-12 py-8">
            <hr className="border-dashed lg:my-8 my-6"></hr>
            <h1 className="lg:text-4xl text-2xl font-extrabold py-4 lg:py-6 text-center text-[#131318] playfair">Get In Touch</h1>
            <p className="text-pera lg:text-base text-sm font-medium text-center lg:w-1/2 md:w-2/3 mx-auto">Get in touch with us to explore exciting opportunities, share feedback, or inquire about our services.</p>
            <hr className="border-dashed lg:my-8 my-6 row-end-auto  "/>

            <div className="grid lg:grid-cols-12 grid-cols-1 gap-4 ">
               
                <div className="col-span-5">

                    <div className="grid grid-rows-3 lg:gap-4 gap-6 border border-[#13131837] rounded-2xl lg:p-8 p-4">

                        <div className="bg-[#BCED6D1A] rounded-2xl lg:p-8 lg:pb-9 p-5">
                        <FaPhoneVolume className="text-3xl text-[#23BE0A]" />
                            <p className="text-pera">Phone Number : </p>
                            <h4 className="text-heading text-lg font-extrabold">(+880) 01911-309454</h4>
                        </div>

                        <div className="bg-[#fddb5f19] rounded-2xl lg:p-8 lg:pb-9 p-5">
                        <MdOutlineAttachEmail className="text-info text-3xl"/>
                            <p className="text-pera">Email : </p>
                            <h4 className="text-heading text-lg font-extrabold">BookReviewer@support.com</h4>
                        </div>

                        <div className="bg-[#629cf319] rounded-2xl lg:p-8 lg:pb-9 p-5">
                        <IoLocationOutline className="text-3xl text-[#23BE0A]" />
                            <p className="text-pera">Location : </p>
                            <h4 className="text-heading text-lg font-extrabold">Gandaria, Dhaka, Bangladesh</h4>
                        </div>

                    </div>
    
                </div>

               
                <form className="col-span-7 ">
                    
                    <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-3 pb-2">
                        <label className="form-control w-full">
                            <div className="label text-xl font-bold">Your Name</div>
                            <input type="text" placeholder="Enter your full name" className="input input-bordered w-full  bg-[#13131805]" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label text-xl font-bold">Your Email</div>
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-full  bg-[#13131805]" />
                        </label>
                    </div>

                   
                    <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-3 pb-4">
                        <label className="form-control w-full ">
                            <div className="label text-xl font-bold">Subject</div>
                            <input type="text" placeholder="Enter your subject" className="input input-bordered w-full bg-[#13131805]" />
                        </label>

                        <label className="form-control w-full ">
                            <div className="label text-xl font-bold">Phone Number</div>
                            <input type="text" placeholder="Enter your phone numberEnter your email" className="input input-bordered w-full  bg-[#13131805]" />
                        </label>
                    </div>
             
                   
                    <label className="form-control w-full lg:h-[62%] pb-4">
                        <div className="label text-xl font-bold">Message</div>
                        <textarea className="textarea input-bordered w-full h-full bg-[#13131805]" placeholder="Write your message" rows="5"></textarea>
                    </label>

                    <button className="btn bg-[#23BE0A] w-full text-white font-bold text-xl">Send Message</button>  
                </form>

            </div>
        </div>
    </div>
  )
}

export default Contact