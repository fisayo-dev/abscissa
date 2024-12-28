import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home, Signup, Login, PageNotFound, UserHome, Whiteboard, Converter, Calculator, PiMind, Solver, FormulaBank, Account, Settings, LengthConverter } from "./pages";
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
          <Route path="/whiteboard" element={<Whiteboard />} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/converter/length" element={<LengthConverter />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/abscissa-ai" element={<PiMind />} />
          <Route path="/problem-solver" element={<Solver />} />
          <Route path="/formulae-bank" element={<FormulaBank />} />
          <Route path="/profile" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
