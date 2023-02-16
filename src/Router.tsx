import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Music from "./screens/Music";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "music",
                element: <Music/>
            }
        ]
    }
])
export default router;