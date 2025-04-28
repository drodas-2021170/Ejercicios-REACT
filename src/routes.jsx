import { NotFoundPage } from "./pages/NotFoundPage";
import { PasswordPage } from "./pages/Passowrd/PasswordPage";
import { TemperaturePage } from "./pages/Temperature/TemperaturePage";
import App from "./App";

export const routes = [

    {
        path: '/',
        element:<PasswordPage/>
    },
    {
        path:'/temperature',
        element:<TemperaturePage/>
    },
    {
        path:'*',
        element:<NotFoundPage/>
    }
]