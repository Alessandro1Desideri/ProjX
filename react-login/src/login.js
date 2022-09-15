import { useRef, useState, useEffect} from 'react';

const Login = () => {
    const useRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSucces] = useState(false);

    useEffect(() => {
        useRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    return (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive">{errMsg}
            </p>
            <h1><p>Log In</p>now and start customizing your activities on our platform</h1>
            <form>
                <label hmtlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username"
                    ref={useRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label hmtlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Log In</button>
            </form>
            <p>
                Don't have an account? 
                <span className="line">
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
    )
}

export default Login