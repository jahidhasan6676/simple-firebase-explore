import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import auth from '../../firebase/firebase.init'
import { useState } from "react";
const Login = () => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user,setUser] = useState(null);

   const handleGoogleSingIn = () =>{
    signInWithPopup(auth,provider)
    .then(result =>{
        console.log(result.user)
        setUser(result.user)
    })
    .catch(error =>{
        console.log(error)
        setUser(null)
    })
   }

   const handleLogOut = () =>{
    signOut(auth)
    .then(() => {
        setUser(null)

    })
    .catch(error =>{
        console.log(error)
    })
   };

   
   const handleGithubLogIn = () =>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
        console.log(result.user)
        setUser(result.user)
    })
    .catch(error => {
        console.log(error)
        setUser(null)
    })
   }
    
    return (
        <div>
           
            

        {
            user? 
            <button onClick={handleLogOut}>Log Out</button>
              :
           <>
            <button onClick={handleGoogleSingIn}>Login with Google</button>
            <button onClick={handleGithubLogIn}>Log With Github</button>
           </>
           
        }

            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>{user.email}</p>
                    <img src={user.photoUrl}/>
                </div>
            }
        </div>
    );
};

export default Login;