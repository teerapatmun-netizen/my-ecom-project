import './App.css'
import Home from "./component/Page/Home"
import ProductPage from './component/Page/Productpage'
import OrderSummary from './component/Order Summary/OrderSum'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/product/:id' element={<ProductPage/>} />
        <Route path='/Summary' element={<OrderSummary/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App