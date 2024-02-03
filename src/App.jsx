import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
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
      {
         path: "/contact",
         element: <Contact />,
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
