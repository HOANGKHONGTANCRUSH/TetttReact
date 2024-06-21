import { useState } from 'react'
import './Register.scss'
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiSevice';
import { toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc"
import { devToolsEnhancer } from 'redux-devtools-extension';


const Register = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const [isPasswordSecure, setIsPasswordSecure] = useState(false);

    const handleRegister = async () => {
        //validate

        //submit apis
        let data = await postRegister(email, password, username);
        if (data && data.EC === 0) {
            toast.success(data.EM)
            navigate('/Login')
        }
        if (data && +data.EC !== 0) {
            toast.error(data.EM)
        }
    }

    return (
        <div className="Register-container">
            <div className='header'>
                <span> Don't leu leu have an account yet?</span>
                <button onClick={() => { navigate('/Login') }}>Lo gin</button>
            </div>
            <div className='title col-4 mx-auto'>
                Hoang & Pham
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, Who's this?
            </div>
            <div className='content-from col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type={"email"}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group pass-group'>
                    <label>Password (*)</label>
                    <input type={isPasswordSecure ? "text" : "password"}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {
                        isPasswordSecure ? <span className="icons-eye" onClick={() => setIsPasswordSecure(false)}>
                            <VscEye />
                        </span> : <span className="icons-eye" onClick={() => setIsPasswordSecure(true)}>
                            <VscEyeClosed />
                        </span>
                    }

                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input type={"username"}
                        className='form-control'
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div>
                    <span className='forgot-password'>Forgot password</span>
                </div>

                <div>
                    <button className='btn-submit'
                        onClick={() => handleRegister()}
                    >Register</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/') }}> &#60;&#60; Go to Homepage</span>
                </div>
            </div>
        </div >
    )
}

export default Register