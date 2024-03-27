import { useLoaderData, useParams } from "react-router-dom"
import { capitalizeFirstLetter,  saveWishlist } from "../Utility/Utility";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 


function BookDetailsPage() {

    const books = useLoaderData();
    const {id}=useParams()
    const book = books.find(b=>b.id==id)

    const handleRead = ()=>{
        const saveData = JSON.parse(localStorage.getItem("books") ||'[]') ;
        const findData = saveData.find(bk=>bk.id == book.id);
        if(findData){
            toast.error("This book already has been read !");
        } else {
            saveData.push(book);
            localStorage.setItem("books", JSON.stringify(saveData));
            toast.success("Saved as Read!");
        }
    }

    const handleWish= ()=>{
        saveWishlist(book)
    }
   
   
  return (
    <div>
        <div className="container mx-auto grid md:grid-cols-2 bg-base-100  mt-8">
            <figure className="p-8"><img className="w-4/5  shadow-xl rounded-xl" src={book.image} alt="Movie"/></figure>
            <div className="card-body">
                <h1 className="card-title text-[40px] font-bold playfair mb-4">{book.book_name}</h1>
                <h3 className="text-2xl font-medium text-gray-600 mb-4">By : {book.author}</h3>
                <hr />
                <h3 className="text-2xl font-medium text-gray-600 my-3">{capitalizeFirstLetter(book.category)}</h3>
                <hr />
                <p className="text-base leading-7"><span className=" font-bold">Review : </span>{book.review}</p>
                <div className="flex gap-2 lg:gap-6 justify-start items-center">
                    <h2 className="text-base font-bold">Tag</h2>
                    <button className="btn bg-green-50 text-[#23BE0A] rounded-[30px] h-1 px-4 font-semibold text-base">#{book.tags[0]}</button>
                    <button className="btn bg-green-50 text-[#23BE0A] rounded-[30px] h-1 px-4 font-semibold text-base">#{book.tags[1]}</button>
                </div>
                <hr />
                <table className="space-y-5">
                    <tbody className="text-base">
                        <tr>
                            <td>Number of Pages:</td>
                            <td className="font-bold">{book.total_pages}</td>
                        </tr>
                        <tr>
                            <td>Publisher:</td>
                            <td className="font-bold">{book.publisher}</td>
                        </tr>
                        <tr>
                            <td>Year of Publishing:</td>
                            <td className="font-bold">{book.year_of_publishing}</td>
                        </tr>
                        <tr>
                            <td>Rating:</td>
                            <td className="font-bold">{book.rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-4">
                   <button  onClick={handleRead} className="btn mr-4 text-lg font-semibold">Read</button>
                    <button onClick={handleWish} className="btn bg-sky-400 text-white text-lg font-semibold">Wishlist</button>

                </div>
            </div>
        </div>
       
        <ToastContainer />
    </div>
  )
}

export default BookDetailsPage