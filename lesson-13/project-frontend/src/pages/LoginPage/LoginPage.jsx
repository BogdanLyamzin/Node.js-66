import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginForm from "../../modules/LoginForm/LoginForm";

import { login } from "../../redux/auth/auth-operations";

import {verify} from "../../shared/api/auth";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const verificationCode = searchParams.get("verificationCode");

    useEffect(()=> {
        const verifyRequest = async() => {
            try {
                await verify(verificationCode);
            }
            catch(error) {
                console.log(error.message);
            }
            finally {
                setSearchParams({});
            }
        }
        if(verificationCode) {
            verifyRequest();
        }
    }, []);

    const onLogin = (data)=> {
        dispatch(login(data));
    }

    return (
        <div className="container">
            <h1 className="page-title">Login page</h1>
            {!verificationCode && <LoginForm onSubmit={onLogin} />}
        </div>
    )
}

export default LoginPage;