import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error);
  
    return (
      <div id="error-page" className="relative bg-sky-800 min-h-svh flex justify-center items-center">
        <img src={'preview.jpg'} alt="" />
        <p className="absolute z-10 flex flex-col pt-36">
          <i className="font-bold text-white text-3xl pb-3">{error.statusText || error.message}</i>
            <button><Link className="btn bg-lime-600 text-xl font-semibold text-white">Go Home</Link></button>
        </p>
      </div>
    );
  }