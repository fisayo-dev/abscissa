import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import {
  Home,
  Signup,
  Login,
  PageNotFound,
  UserHome,
  Whiteboard,
  Converter,
  Calculator,
  PiMind,
  Solver,
  FormulaBank,
  Settings,
  LengthConverter,
  AreaConverter,
  CurrencyConverter,
  VolumeConverter,
  SpeedConverter,
  EnergyConverter,
  TemperatureConverter,
  WeightAndMassConverter,
  Profile,
} from "./pages";
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
          {/* Converter Routes */}
          <Route path="/converter" element={<Converter />} />
          <Route path="/converter/length" element={<LengthConverter />} />
          <Route path="/converter/area" element={<AreaConverter />} />
          <Route path="/converter/currency" element={<CurrencyConverter />} />
          <Route path="/converter/volume" element={<VolumeConverter />} />
          <Route path="/converter/speed" element={<SpeedConverter />} />
          <Route path="/converter/energy" element={<EnergyConverter />} />
          <Route
            path="/converter/temperature"
            element={<TemperatureConverter />}
          />
          <Route
            path="/converter/weight-and-mass"
            element={<WeightAndMassConverter />}
          />

          <Route path="/calculator" element={<Calculator />} />
          <Route path="/abscissa-ai" element={<PiMind />} />
          <Route path="/problem-solver" element={<Solver />} />
          <Route path="/formulae-bank" element={<FormulaBank />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
