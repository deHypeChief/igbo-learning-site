import '../../assets/styles/topics.css'
import { Button } from '../../components/button/button'

export default function Topics() {
    return (
        <>
            <section className="topicWrap">
                <div className="moveBttns">
                    <div className="topicMove_bttn disabled"></div>
                </div>
                <div className="topicArea">
                    <div className="topicInfo">
                        <h2>Level 1</h2>
                        <h1>
                        Starting
                            Igbo Language
                        </h1>
                        <p>Get your bacis solid by learning the
basiscs of Igbo</p>
                        <div className="topic-bttnWrap">
                            <Button>Start Lesson</Button>
                            <Button>Take Quiz</Button>
                        </div>
                    </div>
                    <div className="topicSubComp"></div>
                </div>
                <div className="moveBttns">
                    <div className="topicMove_bttn"></div>
                </div>
            </section>
        </>
    )
}