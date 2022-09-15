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
            <form action=""></form>
        </section>
    )
}

export default Login