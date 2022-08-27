import React, {useState} from 'react';
import GoogleLogin, {GoogleLogout} from "react-google-login";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


function LoginPage(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const responseGoogle = response => {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
        setLoginStatus(true);
    };
    const logout = () => {
        setLoginStatus(false);
    };
    const navigate  = useNavigate();
    const goHome = () =>{
        navigate('/')
    }

    return (
        <Login>
            <h1 className="login-title">Login with Google</h1>
            { !loginStatus && (
                <span className="btn__login">
                    <GoogleLogin
                        clientId="1029849239609-3j1a5104v1ua8vdhci8udhr5jaicsk4d.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    />
            </span>
            )}
            {
                loginStatus && (
                    <div>
                        <h2>Welcome {name}</h2>
                        <h2>Email: {email}</h2>
                        <img src={url} alt={name} />
                        <br />
                        <GoogleLogout
                            clientId="671348139606-906f7lcl8vk6l26hivc1ka0hk2teuvb1.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={logout}
                        />
                    </div>
                )
            }


        </Login>
    );
}

const Login = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  .login-title {
    padding-top: 40px;
    text-align: center;
  }

  .btn__login {
    max-width: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 100%;
    padding-bottom: 400px;
  }



`;

export default LoginPage;
