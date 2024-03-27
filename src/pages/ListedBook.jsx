import { useEffect, useState } from "react"
import ReadBookCard from "../components/ReadBookCard";
import { descendingData } from "../Utility/Utility";
import { SlArrowDown } from "react-icons/sl";



function ListedBook() {
  const [displayData, setDisplayData] = useState([])
  const [bookData, setBookData] = useState([]);
  

  useEffect(()=>{
    const getData = JSON.parse(localStorage.getItem("books") ||' []') ;
    const wishData = JSON.parse(localStorage.getItem("wish") ||' []');
    
    const value =getData;
    setDisplayData(value)
    setBookData(wishData)
  },[])


const handleSortRating = ()=> {
  const desData = descendingData()
  setDisplayData(desData)
}
const handleSortPages = ()=> {
  const getData = JSON.parse(localStorage.getItem("books") || '[]') ;
  let desRating = [...getData]
  desRating.sort((a,b)=>a.total_pages-b.total_pages).reverse();
  setDisplayData(desRating)
}
const handleSortYear = ()=> {
  const getData = JSON.parse(localStorage.getItem("books") || '[]') ;
  let desRating = [...getData]
  desRating.sort((a,b)=>a.year_of_publishing-b.year_of_publishing).reverse();
  setDisplayData(desRating)
}

  return (
    <div className="container mx-auto">
      <div className=" text-center space-y-8 mb-10">
      <div className="h-24 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl font-bold">Books</div>
      <div>
        <details className="dropdown">
        <summary className="m-1 btn bg-[#23BE0A] text-white text-lg font-semibold rounded-lg">Sort By   <SlArrowDown className="text-lg font-extrabold ml-2 mt-1"/></summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><a onClick={()=>handleSortRating()}>Rating</a></li>
          <li><a onClick={()=>handleSortPages()}>Number of Pages</a></li>
          <li><a onClick={()=>handleSortYear()}>Published Year</a></li>
        </ul>
      </details>
      </div>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab w-10 md:text-xl" aria-label="Read Books" checked/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 border-b-0 border-l-0 border-r-0 pt-8">
          <div>
            {
              displayData.map(book=><ReadBookCard key={book.id} book={book}></ReadBookCard>)
            }
          </div>
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab md:text-xl" aria-label="Wishlist Books"  />
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