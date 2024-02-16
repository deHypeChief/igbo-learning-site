import {Link} from 'react-router-dom'
import { Button } from '../button/button'
import './style.css'
import { useEffect } from 'react'

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

    useEffect(()=>{
        const nav = document.getElementsByTagName('nav')[0]
        const navWrap = document.getElementsByClassName('navWrap')[0]
        let offset = 50
        document.onscroll = (e)=>{
            if(scrollY > offset){
                nav.style.background = "white"
                navWrap.style.padding = "10px 70px"
            }
            if(scrollY < offset -10){
                nav.style.background = "transparent"
                navWrap.style.padding = "20px 70px"
            }
        }
    }, [])

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