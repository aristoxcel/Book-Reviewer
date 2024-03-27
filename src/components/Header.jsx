import { Link } from "react-router-dom"


function Header() {
  return (
    <div>
        <div className="hero container mx-auto rounded-2xl mt-4 bg-base-200 p-16">
  <div className="hero-content flex-col lg:flex-row justify-around  w-full">
    <div className="text-center lg:text-left  w-full space-y-4">
      <h1 className="text-6xl font-bold playfair">Books to freshen up </h1>
      <h1 className="text-6xl font-bold pb-16 playfair">your bookshelf</h1>
      <button className="btn bg-[#23BE0A] font-bold text-xl mt-10 text-white"><Link to={'/listedBook'}>View the List</Link></button>
    </div>
    <div className="card shrink-0 w-full max-w-sm ">
      <img src={'ban.png'} alt="" />
    </div>
  </div>
</div>
    </div>
  )
}

export default Header