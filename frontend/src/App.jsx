import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home, Signup, Login, PageNotFound, UserHome } from "./pages";
import AppOutlet from "./outlets/AppOutlet";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="" element={<AppOutlet />}>
          <Route path="/dashboard" element={<UserHome />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
