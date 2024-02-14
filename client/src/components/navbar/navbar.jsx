import {Link} from 'react-router-dom'
import { Button } from '../button/button'
import './style.css'

export default function Navbar(){
    const navLinks = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About Us",
            link: "/"
        },
        {
            title: "Contact",
            link: "/"
        }
    ] 


    return(
        <nav>
            <div className="navWrap">
                <div className="navBox">
                    <div className="logo">
                        <h2>Logo</h2>
                    </div>
                    <div className="content">
                        {navLinks.map((value)=>{
                            return(
                                <Link key={value.title} to={value.link}>{value.title}</Link>
                            )
                        })}
                    </div>
                    <div className="button">
                        <Button>Login</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}