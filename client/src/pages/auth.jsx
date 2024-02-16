import { Button } from "../components/button/button"
import '../assets/styles/auth.css'
import { Link } from "react-router-dom"
import { useState } from "react"
export function SignIn() {
    return (
        <>
            <section className="auth">
                <div className="authSignBox signIn">
                    <form className="authIn" action='submit'>
                        <h1>Login to you account</h1>
                        <p>Welcome Back</p>
                        <input type="text" placeholder='Email Address' />
                        <input type="password" placeholder='Password' />

                        <p className='authSecP'>Don&apos;t have an account <Link to={'/signup'}>Sign Up</Link></p>
                        <Button>Sign In</Button>
                    </form>
                </div>
            </section>
        </>
    )
}

export function SignUp() {
    const [accComplete, isAccComplete] = useState(true)
    return (
        <>
            <section className="auth signup">
                {accComplete ? <AccountCreated /> : (

                    <div className="authSignBox">
                        <form className='authIn' action="submit">
                            <h1>Create
                                an account</h1>
                            <p>To get started create an account and join the fun</p>
                            <input type="text" placeholder='Your Name' />
                            <input type="text" placeholder='Email Address' />
                            <input type="password" placeholder='Password' />

                            <p className='authSecP'>Already have an account <Link to={'/signin'}>Sign In</Link></p>
                            <Button>Sign Up</Button>
                        </form>
                    </div>
                )}
            </section >
        </>
    )
}


function AccountCreated() {
    return (
        <>
            <div className="accCreate">
                <div className="accWrap">
                    <h1>Your Account Has Been Created</h1>
                    <Button>Get Started</Button>
                </div>
            </div>
        </>
    )
}