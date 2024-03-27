import {capitalizeFirstLetter}  from "../Utility/Utility";
import { IoPeopleOutline } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ReadBookCard({book}) {
    const {id, image, book_name, author, year_of_publishing, tags, rating, category, publisher, total_pages}=book;
  return (
    <div className="container mx-auto">
        <div className="grid md:grid-cols-4  border rounded-2xl mb-5 p-4">
            <div className="col-span-1 "><img src={image} alt="" className="h-full rounded-2xl border"/></div>
            <div className="col-span-3 rounded-2xl space-y-4 ml-4">
                <h1 className="playfair font-bold text-2xl">{book_name}</h1>
                <h2 className="text-lg font-semibold text-gray-500">By : {author}</h2>
                <div className="flex gap-4 justify-start items-center">
                    <div className="flex justify-evenly items-center gap-3">
                        <h2 className="text-base font-bold">Tag</h2>
                        <button className="btn  bg-green-50 text-[#23BE0A] rounded-[30px] h-1 px-4 font-medium text-base">#{tags[0]}</button>
                        <button className="btn  bg-green-50 text-[#23BE0A] rounded-[30px] h-1 px-4 font-medium text-base">#{tags[1]}</button>
                    </div>

                        <div className="flex  items-center gap-2">
                            <IoLocationOutline /> 
                            <p className="text-base">Year of Publishing: {year_of_publishing}</p>
                        </div>

                </div>
                <div className="flex gap-5">
                    <div className="flex  items-center gap-2">
                        <IoPeopleOutline /> 
                        <p className="text-base">Publisher: {publisher}</p>
                    </div>
                    <div className="flex  items-center gap-2">
                        <LuFileSpreadsheet />
                        <p className="text-base"> Page: {total_pages}</p>
                    </div>
                </div>
                <hr />
                <div>
                    <button className="btn bg-blue-50 text-blue-500">Category {capitalizeFirstLetter(category)}</button>
                    <button className="btn bg-orange-50 text-orange-500">Rating {rating}</button>
                    <Link to={`/bookDetailsPage/${id}`}><button className="btn bg-green-500 text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReadBookCard