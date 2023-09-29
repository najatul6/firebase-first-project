import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase.init';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const logedInUser = result.user
                console.log(logedInUser)
                setUser(logedInUser)
            })
            .catch(error => {
                console.log("error", error.message)
            })
    };

    const handleGithubLogIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const logedInUser= result.user
                console.log(logedInUser)
                setUser(logedInUser)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser('')
            })
            .catch((error) => {
                console.log("error", error.message)
            })

    }


    return (
        <div>
            {
                user ?
                <button onClick={handleSignOut}>Sign Out</button> :
                    <div>
                        <button onClick={handleGoogleLogIn}>Google Log In</button>
                        <button onClick={handleGithubLogIn}>Git Hub</button>
                    </div>
            }
            {!signOut &&
                <p>Sign out Successfully</p>
            }
            {user && <div>
                <h3>User : {user.displayName}</h3>
                <h2>Email: {user.email}</h2>
                <div>
                    <img src={user.photoURL} alt="" />
                </div>
            </div>}
        </div>
    );
};

export default Login;