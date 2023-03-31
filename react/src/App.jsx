import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Details from './Details/Details'
import  Home from "./components/Home/Home"
import Header from "./components/Header/Header"


function App() {

  return (
    <BrowserRouter>

    <div>
      <Header></Header>
        <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
        </div>
    </div>




    </BrowserRouter>
  )
}

export default App
