import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./pages/Index";
import Error from "./pages/Error";
import Main from "./components/Layouts/Main";
import Dnd from "./pages/systems/dnd/Dnd";
import CharacterGenerator from "./pages/systems/dnd/character-generator/CharacterGenerator.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Index/>},
        ]
    },
    {path: "systems/dnd", element: <Dnd/>},
    {path: "dnd/character-generator", element: <CharacterGenerator/>}
]);

export default function App() {
    return <RouterProvider router={router}/>;
}
