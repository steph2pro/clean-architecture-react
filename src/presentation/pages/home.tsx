import  {NavBar} from "../components/home/NavBar.tsx";
// import ErrorBoundary from "../components/ErrorBoundary.tsx";
import {Outlet} from "react-router-dom";

function Home() {



    return (
        <div className="flex ">

            <NavBar />

            {/* <ErrorBoundary> */}

                <div className="lg:ml-[20vw] sm:p-4  max-sm:max-lg:overflow-y-scroll lg:max-w-[80vw] flex-1">

                    <Outlet />

                    <div className="flex space-x-4 mb-30 mt-20 justify-center text-center  text-green-950"><p>  © {new Date().getFullYear()} Cette application a été réalisé par Stephane </p></div>
                </div>
            {/* </ErrorBoundary> */}
        </div>
    )
}
export default Home




