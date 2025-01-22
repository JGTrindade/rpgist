import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dnd from "./pages/systems/dnd/Dnd";
import CharacterBuilder from "./pages/systems/dnd/character-builder/CharacterBuilder.tsx";
import CharacterGenerator from "./pages/systems/dnd/character-generator/CharacterGenerator.tsx";
import Automatic from "./pages/systems/dnd/character-generator/Automatic.tsx";
import CharSheet from "./pages/systems/dnd/character-generator/CharSheet.tsx";

const router = createBrowserRouter([
    {path: "systems/dnd/character-builder", element: <CharacterBuilder/>},
    {path: "dnd/character-generator", element: <CharacterGenerator/>},
    {path: "dnd/character-generator/automatic", element: <Automatic/>},
    {path: "dnd/characters/character-name", element: <CharSheet/>}
]);

export default function App() {
    return <RouterProvider router={router}/>;
}
