import { routes } from "."
import gifInformation from "../views/pages/gifInformation"

export const publicRoute = [
    {
        'component': gifInformation,
        'link': routes.gifInformation,
        'exact': true
    }
] 
