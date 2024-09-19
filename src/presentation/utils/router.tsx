import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home.tsx";
import {STRING_ROUTE_HOME, STRING_ROUTE_USERS, STRING_ROUTE_EDIT} from "./const.ts";
import UserPage from "../pages/UserPage.tsx";
import UserList from "../components/UserList.tsx";

const router = createBrowserRouter([
    {
        path: STRING_ROUTE_EDIT,
        element: <UserList/>,
    },
    {
        path: STRING_ROUTE_HOME,
        element: <Home/>,
        children: [
            {
                path: STRING_ROUTE_USERS,
                element: <UserPage/>
            }
        ]
    }
]);

export default router;