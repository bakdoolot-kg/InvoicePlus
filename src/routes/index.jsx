import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import ServicesPage from "../pages/services-page/ServicesPage.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/services",
        element: <ServicesPage />
    }
])