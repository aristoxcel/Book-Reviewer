import { useLoaderData } from "react-router-dom"
import BookCard from "./BookCard"

function BookGallary() {
    const books = useLoaderData()

  return (
    <div className="container mx-auto">
        
        
        <div className="grid lg:grid-cols-3 gap-6">
        {
            books.map(book=> <BookCard key={book.id} book={book}></BookCard>)
        }
        </div>

    </div>
  )
}

export default BookGallary