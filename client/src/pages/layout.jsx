import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './home'
import Navbar from '../components/navbar/navbar'
export default function App(){
    return(
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}