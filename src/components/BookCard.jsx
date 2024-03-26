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
  <div className="card-body space-y-3">
    <div className="flex gap-4">
      <button className="btn  bg-green-50 text-green-500 rounded-3xl h-1 px-4 font-bold">{tags[0]}</button>
      <button className="btn  bg-green-50 text-green-500 rounded-3xl h-1 px-4 font-bold">{tags[1]}</button>
    </div>
    <h1 className="card-title text-2xl">{book_name}</h1>
    <h3 className="text-xl text-gray-500 font-bold">By: <span>{author}</span></h3>
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