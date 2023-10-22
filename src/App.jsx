
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/mainPage"
import ProductsPage from "./pages/ProductsPage"
import ProductDetail from "./pages/ProductDetail"
import Header from "./Components/Header"

import ErrorPage from "./pages/ErrorPage"




function App() {


  return (
    <BrowserRouter>

    <Header/>

    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/product" element={<ProductsPage/>}/>
      <Route path="/detail/:id" element={<ProductDetail/>}/> 

      <Route path="/undefined" element={<ErrorPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
