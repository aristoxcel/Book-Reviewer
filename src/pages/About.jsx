

function About() {
  return (
    <div>
        <div className="hero  bg-base-200 container mx-auto rounded-2xl py-24">
            <div className="hero-content flex-col lg:flex-row ">
                <img src="main.png" className="max-w-sm rounded-lg shadow-2xl " />
                <div>
                <h1 className="text-5xl font-bold playfair">Book reviewer</h1>
                <p className="py-6"><span className="font-semibold text-lg"><span className="text-3xl text-[#23BE0A]">W</span>e are book enthusiast.</span> You can buy a guidebook or a tourist map. The bookstall is just over there. Love Thirty will sit comfortably on any coffee table, any bookstall.</p>
                <p>Less than ten yards away from Harry as he waited for the Swindon train, the same man stood examining paperbacks on a bookstall.</p>
                <button className="btn bg-[#23BE0A] text-white font-semibold text-lg rounded-lg mt-6">Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About