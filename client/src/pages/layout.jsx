import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Navbar from '../components/navbar/navbar'
import { SignIn, SignUp } from './auth'
import TeacherPopUp from './teacher'
import StudentDashboard from './student/dashboard'
import Topics from './student/topics'
import Admin from './admin/adminBoard'


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' >
                        <Route index element={<Home />}/>
                        <Route path='/signin' element={<SignIn />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/teacher' index element={<TeacherPopUp />} />
                    </Route>

                    <Route path='/u'>
                        <Route index element={<StudentDashboard />} />
                        <Route path='/u/topics' element={<Topics />} />
                    </Route>
a
                    <Route path='/admin'>
                        <Route index element={<Admin />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}