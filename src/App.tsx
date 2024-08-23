import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Index from "./pages/Index";
import Error from "./pages/Error";
import Main from "./components/Layouts/Main";
import Dnd from "./pages/systems/dnd/Dnd";
import CharacterGenerator from "./pages/systems/dnd/character-generator/CharacterGenerator.tsx";
import Automatic from "./pages/systems/dnd/character-generator/Automatic.tsx";
import UserForm from "./components/Registration/UserForm.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {index: true, element: <Index/>},
        ]
    },
    {path: "signup", element: <UserForm/>},
    {path: "systems/dnd", element: <Dnd/>},
    {path: "dnd/character-generator", element: <CharacterGenerator/>},
    {path: "dnd/character-generator/automatic/basic-information", element: <Automatic/>},
    {path: "dnd/character-generator/automatic/race", element: <Automatic/>},
    {path: "dnd/character-generator/automatic/class", element: <Automatic/>}
]);

export default function App() {
    return <RouterProvider router={router}/>;
}
