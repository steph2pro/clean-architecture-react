import {BoxArrowLeft, HouseGear, People, PlusCircle,} from "react-bootstrap-icons"
import React, {PropsWithChildren, ReactNode} from "react"
import {useLocation, useNavigate,} from "react-router-dom";
import {STRING_ROUTE_EDIT, STRING_ROUTE_HOME, STRING_ROUTE_USERS} from "../../utils/const.ts";

export const NavBar: React.FC =() => {

    const route = useNavigate()
    const location = useLocation();

    const handleChangePage = (index: number) => {
        switch (index) {
            case 0:{
                route(STRING_ROUTE_HOME);
                break;
            }
            case 1:
            {
                route(STRING_ROUTE_USERS);
                break;
            }
            case 2:
            {
                route(STRING_ROUTE_EDIT);
                break;
            }
        }
    }

    return (
        <div
            className="   lg:w-[20vw] lg:h-[100vh] bg-white  fixed z-100000 max-sm:max-lg:bottom-0 sm:bottom-0  max-sm:max-lg:border-t sm:border-t max-sm:max-lg:w-full sm:w-full flex flex-col   lg:px-10 lg:border-r-2">

            <div className="flex-1 max-sm:max-lg:flex max-sm:max-lg:justify-evenly sm:justify-evenly sm:flex lg:block">

                <div className="text-center text-3xl text-green-950 mb-7 font-bold max-sm:max-lg:hidden">
                    Gest-USERS
                </div>


                <NavBarItem title="dashboard" icon={<HouseGear/>} isActive={location.pathname == STRING_ROUTE_HOME} index={0}
                            onClick={handleChangePage}/>
                <NavBarItem title="utilisateur" icon={<People/>} isActive={location.pathname == STRING_ROUTE_USERS} index={1}
                            onClick={handleChangePage}/>
                <NavBarItem title="plus" icon={<PlusCircle/>} isActive={location.pathname == STRING_ROUTE_EDIT} index={2}
                            onClick={handleChangePage}/>

            </div>
           
        </div>
    )
}

export const NavBarItem: React.FC<PropsWithChildren<{
    icon: ReactNode,
    index: number,
    title: string,
    isActive?: boolean,
    onClick: (index: number) => void
}>> = ({icon, title, isActive = false, onClick, index}) => {
    return (
        <div onClick={() => onClick(index)}
             className={`flex items-center max-sm:max-lg:justify-evenly sm:justify-evenly lg:justify-start  px-4 mx-2 my-5 py-3 space-x-4 hover:cursor-pointer ${isActive ? "bg-green-950 text-white rounded-xl" : null}`}>

            {icon}

            <span className="max-sm:max-lg:hidden sm:hidden lg:block">{title}</span>
        </div>
    )
}
