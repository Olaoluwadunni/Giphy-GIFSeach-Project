import { routes } from ".";
import GifInformation from "../views/pages/gifInformation";
import Home from "../views/pages/home";

export const publicRoutes = [
    {
        'component': Home,
        'link': routes.home
    },
    {
        'component': GifInformation,
        'link': routes.gifInformation
    }
]

