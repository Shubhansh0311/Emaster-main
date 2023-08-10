import { useDebugValue } from "react"
import Home from "./pages/home"
import CheckoutPage from "./pages/CheckoutPage"
import "./App.css"
import { Outlet } from "react-router"
const App=()=>{
  // return<><Home/></>
  return<Outlet/>
}
export default App;