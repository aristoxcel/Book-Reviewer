import {capitalizeFirstLetter}  from "../Utility/Utility";
import { IoPeopleOutline } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";

function ReadBookCard({book}) {
    const {image, book_name, author, year_of_publishing, tags, rating, category, publisher, total_pages}=book;
  return (
    <div className="container mx-auto">
        <div className="grid md:grid-cols-4  border rounded-2xl mb-5 p-4">
            <div className="col-span-1 "><img src={image} alt="" className="h-full rounded-2xl border"/></div>
            <div className="col-span-3 rounded-2xl space-y-4 ml-4">
                <h1>{book_name}</h1>
                <h2>By : {author}</h2>
                <div className="flex gap-3">
                    <div className="flex justify-evenly">
                        <h2>Tag</h2>
                        <h2>{tags[0]}</h2>
                        <h2>{tags[1]}</h2>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Year of Publishing: {year_of_publishing}</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div>
                        <img src="" alt="" />
                        <p><IoPeopleOutline />Publisher: {publisher}</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p><LuFileSpreadsheet /> Page: {total_pages}</p>
                    </div>
                </div>
                <hr />
                <div>
                    <button className="btn bg-blue-50 text-blue-500">Category {capitalizeFirstLetter(category)}</button>
                    <button className="btn bg-orange-50 text-orange-500">Rating {rating}</button>
                    <button className="btn bg-green-500 text-white">View Details</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReadBookCard