import '../assets/styles/home.css'
import heroImg from '../assets/images/Hero-img.png'
import waveImg from '../assets/images/bgWave.png'
import { Button } from '../components/button/button'

import fImg1 from '../assets/images/3d-illustration-sand-clock-isolated-white-removebg-preview 1.png'
import fImg2 from '../assets/images/question-mark-bubble-speech-sign-icon-3d-rendering_47987-15901-removebg-preview 1.png'
import fImg3 from '../assets/images/Red_play_button_3d_vector_illustration-removebg-preview 1.png'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'

export default function Home() {
    const featuresList = [
        {
            id: "fImg1",
            img: fImg2,
            title: "Fun and practical quiz",
            des: "We provide  a simple module that enables you learn at your own pace"
        },
        {
            id: "fImg2",
            img: fImg1,
            title: "Learn at your own pace ",
            des: "We provide  a simple module that enables you learn at your own pace"
        },
        {
            id: "fImg3",
            img: fImg3,
            title: "Over 100 videos on Youtube ",
            des: "We provide  a simple module that enables you learn at your own pace"
        }
    ]

    function handleFeatures(id) {

        const card = document.getElementById(id)
        if (card.classList.contains('fclose')) {
            card.style.height = 'fit-content'
            card.classList.remove('fclose')

        } else {
            card.style.height = '260px'
            card.classList.add('fclose')
        }

    }


    return (
        <>
        <Navbar/>
            <section className="hero">
                <div className="heroWrap">
                    <div className="heroContent">
                        <h1>Igbo Learning <br /> Made Fun</h1>
                        <p>
                            Discover the new possibility in the way we
                            approach Igbo learning
                        </p>
                        <Button>Play Demo</Button>
                    </div>
                    <div className="heroImage">
                        <img src={heroImg} alt="hero image of kids smiling" />
                    </div>
                </div>
            </section>

            <section className="aboutIgbo">
                <div className="aboutWrap">
                    <div className="igboImg">

                    </div>
                    <div className="igboContent">
                        <h1>Igbo is Fun</h1>
                        <p>Kids love fun and that is where we come in, with various amazing topics for your kids </p>
                        <Button>Get Started</Button>
                    </div>
                </div>
                <div className="aboutWave">
                    <div className="bbWave">
                        <img src={waveImg} alt="" />
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="featureWrap">
                    {
                        featuresList.map((value) => {
                            return (
                                <div key={value.title} id={value.id} className="fBox fclose">
                                    <div className="fIMgWrap">
                                        <img src={value.img} alt="" className="fImage" />
                                    </div>
                                    <h2>{value.title}</h2>
                                    <p>{value.des}</p>
                                    <div className="fButtonWrap" onClick={() => { handleFeatures(value.id) }}></div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="commu">
                <div className="commuPlayWrap">
                    <div className="commuPlay">
                        <div className="playCard"></div>
                    </div>
                    <div className="commuText">
                        <h1>Learn with
                            our Community</h1>
                        <p>Kids love fun and that is where we come in, with various amazing topics for your kids </p>
                        <Button>Follow Us</Button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footerTop">
                    <div className="footopWrap">
                        <div className="fooLogo">Logo</div>
                        <div className="fooLink">
                            <Link to="/">Home</Link>
                            <Link to="/">About</Link>
                            <Link to="/">Topics</Link>
                        </div>
                        <div className="fooButton">
                            <p>Youtube</p>
                        </div>
                    </div>
                </div>
                <div className="footerBottom">
                    <p>text A</p>
                    <p>text B</p>
                </div>
            </footer>
        </>
    )

}


