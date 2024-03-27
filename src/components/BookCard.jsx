import { capitalizeFirstLetter } from "../Utility/Utility"
import { Link } from "react-router-dom"

function BookCard({book}) {
    const {image,book_name, tags, author, rating, category, id }=book
  return (
    <Link to={`/bookDetailsPage/${id}`}>
        <div className="card bg-base-100 shadow-xl border ">
        <figure className="px-10 pt-10">
            <img className="rounded-xl bg-gray-500 border w-full" src={image} alt="Shoes"  />
        </figure>
  <div className="card-body space-y-3 ml-1">
    <div className="flex gap-4 ">
      <button className="btn  bg-green-50 text-[#23BE0A] rounded-[30px] h-1 px-4 font-semibold text-base">{tags[0]}</button>
      <button className="btn  bg-green-50 text-[#23BE0A] rounded-[30px] h-1 px-4 font-semibold text-base">{tags[1]}</button>
    </div>
    <h1 className="card-title text-2xl playfair font-bold ml-2">{book_name}</h1>
    <h3 className="text-lg text-gray-500 font-semibold ml-2">By: <span>{author}</span></h3>
    <hr />
    <div className="flex justify-between">
      <h3 className="text-lg font-semibold">{capitalizeFirstLetter(category)}</h3>
      <h3 className="flex gap-3 text-lg font-semibold">{rating} <img src={'star-solid.svg'} alt="" width={20}/></h3>
    </div>
  </div>
</div>
    </Link>
  )
}

export default BookCard