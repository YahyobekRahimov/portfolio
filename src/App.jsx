import "./App.css";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Home from "/src/pages/Home/Home";
import {
   createBrowserRouter,
   RouterProvider,
   Route,
   Link,
} from "react-router-dom";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Home />,
      },
      {
         path: "/about",
         element: <About />,
      },
      {
         path: "/projects",
         element: <Projects />,
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
