import BookGallary from "../components/BookGallary"
import Header from "../components/Header"


function Home() {
  return (
    <div>
      <Header></Header>
      <div className="text-center text-3xl font-bold mt-16 mb-12">Books</div>
      <BookGallary></BookGallary>
    </div>
    
  )
}

export default Home