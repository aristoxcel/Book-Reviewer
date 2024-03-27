import BookGallary from "../components/BookGallary"
import Header from "../components/Header"


function Home() {
  return (
    <div>
      <Header></Header>
      <div className="text-center text-5xl font-bold mt-16 mb-12 playfair">Books</div>
      <BookGallary></BookGallary>
    </div>
    
  )
}

export default Home