import { useEffect, useState } from "react"
import ReadBookCard from "../components/ReadBookCard";


function ListedBook() {
  const [bookData, setBookData] = useState([]);
  const [displayData, setDisplayData] = useState([])

  useEffect(()=>{
    const getData = JSON.parse(localStorage.getItem("books"));
    const wishData = JSON.parse(localStorage.getItem("wish"));

    const value =getData;
    setDisplayData(value)
    setBookData(wishData)
  },[])



const handleSortData = ()=> {
  
}

  return (
    <div className="container mx-auto">
      <div className=" text-center space-y-4 mb-10">
      <div className="h-16 bg-gray-200 flex items-center justify-center text-3xl font-bold">Books</div>
      <div>
        <details className="dropdown">
        <summary className="m-1 btn">Sort By</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a onClick={()=>handleSortData()}>Rating</a></li>
          <li><a>Number of Pages</a></li>
          <li><a>Published Year</a></li>
        </ul>
      </details>
      </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab w-10" aria-label="Read Books" checked/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 border-b-0 border-l-0 border-r-0 pt-8">
          <div>
            {
              displayData.map(book=><ReadBookCard key={book.id} book={book}></ReadBookCard>)
            }
          </div>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books"  />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300  pt-8 border-b-0 border-l-0 border-r-0">
          <div>
          {
              bookData.map(book=><ReadBookCard key={book.id} book={book}></ReadBookCard>)
            }
          </div>
        </div>

      </div>
       
    </div>
  )
}

export default ListedBook