import '../../assets/styles/admin/admin.css'
import { Button } from '../../components/button/button'

export default function Admin(){
    return(
        <>
            <section className="admin">
                <div className="adminSide">
                    <div className="adminLogo">
                        <h1>Logo</h1>
                    </div>
                    <div className="adminList">
                        <div className="adminLinks active">
                            <p>Dashboard</p>
                        </div>
                        <div className="adminLinks">
                            <p>Users</p>
                        </div>
                        <div className="adminLinks">
                            <p>Lessons</p>
                        </div>
                        <div className="adminLinks">
                            <p>Assigment</p>
                        </div>
                        <div className="adminLinks">
                            <p>Logout</p>
                        </div>

                    </div>
                </div>

                <div className="adminContent">
                    <div className="adminTop">
                        <div className="adminTopText">
                            <h2>Hi, Welcome Back</h2>
                            <p>Let&apos;s get to work today 😎</p>
                        </div>
                        <Button admin>Create Lesson</Button>
                    </div>

                    <div className="adminSpace">
                        <div className="spaceBox usersSpace">
                            {/* <h2>20</h2>
                            <p>Active Users</p> */}
                        </div>
                        <div className="spaceBox badgesSpace">
                        <h2>20</h2>
                            <p>Active Users</p>
                        </div>
                        <div className="spaceBox QuickInfoSpace"></div>
                        <div className="spaceBox CurrentTaskSpace"></div>
                        <div className="spaceBox topSpace"></div>
                        <div className="spaceBox workDoneSpace"></div>
                    </div>
                </div>
            </section>
        </>
    )
}