import '../../assets/styles/student.css'
import { Button } from '../../components/button/button'
export default function StudentDashboard() {
    return (
        <>
            <div className="dashboardStu">
                <div className="profile">
                    <div className="profileWrap">
                        <div className="profileBox"></div>
                        <div className="profileInfo">
                            <h1>My Name</h1>
                            <p>emailaddress@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="stats">
                    <h2>Your Stats</h2>
                    <div className="lessonsStat">
                        <div className="lessBox">
                            <h3 className="lessText">
                                2
                            </h3>
                            <p>Current <br /> Level</p>
                        </div>
                        <div className="lessBox">
                            <h3 className="lessText">
                                2
                            </h3>
                            <p>Current <br /> Level</p>
                        </div>
                        <div className="lessBox">
                            <h3 className="lessText">
                                2
                            </h3>
                            <p>Current <br /> Level</p>
                        </div>
                        <div className="lessBox">
                            <h3 className="lessText">
                                2
                            </h3>
                            <p>Current <br /> Level</p>
                        </div>
                    </div>

                </div>
                <div className="lesson">
                    <h2>Current Lesson</h2>
                    <div className="nextLessWrap">
                        <h1>Starting
                            Igbo Language</h1>
                            <p>Get a one on lesson with a teacher and improve on your Igbo skills faster</p>
                            <Button>Start Lesson</Button>
                    </div>
                </div>
                <div className="getTutor">
                    <h1>Get a private tutor</h1>
                    <p>Get a one on lesson with a teacher and improve on your Igbo skills faster</p>
                    <Button>Get A Tutor</Button>
                </div>
            </div>
        </>
    )
}