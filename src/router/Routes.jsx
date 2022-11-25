import {createBrowserRouter} from "react-router-dom";
import App from '../App.jsx'
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";
import UsersList from "../pages/UsersList/UsersList.jsx";
import Main from "../pages/Main/Main.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {path: 'users', element: <UsersList/>},
            {path: 'help', element: <Main/>}
        ]
    },
])

export default routes