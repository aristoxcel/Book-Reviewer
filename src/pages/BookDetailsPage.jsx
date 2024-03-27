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
        <div className="container mx-auto grid md:grid-cols-2 bg-base-100 shadow-xl">
            <figure><img className="w-full" src={book.image} alt="Movie"/></figure>
            <div className="card-body">
                <h1 className="card-title text-4xl font-bold">{book.book_name}</h1>
                <h3 className="text-2xl font-semibold text-gray-600">By : {book.author}</h3>
                <hr />
                <h3 className="text-2xl font-bold text-gray-600">{capitalizeFirstLetter(book.category)}</h3>
                <hr />
                <p><span className="text-xl font-bold">Review :</span>{book.review}</p>
                <div className="flex gap-2 lg:gap-6 justify-start items-center">
                    <h2>Tag</h2>
                    <button className="btn bg-green-50 text-green-500 rounded-3xl">{book.tags[0]}</button>
                    <button className="btn bg-green-50 text-green-500 rounded-3xl">{book.tags[1]}</button>
                </div>
                <hr />
                <table>
                    <tbody>
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
                <div>
                   <button  onClick={handleRead} className="btn mr-4 ">Read</button>
                    <button onClick={handleWish} className="btn bg-sky-400 ">Wishlist</button>

                </div>
            </div>
        </div>
       
        <ToastContainer />
    </div>
  )
}

export default BookDetailsPage