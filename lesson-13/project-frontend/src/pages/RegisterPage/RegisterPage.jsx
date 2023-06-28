import {useNavigate } from "react-router-dom";

import RegisterForm from "../../modules/RegisterForm/RegisterForm";

import {register} from "../../shared/api/auth";

const RegisterPage = () => {

    const navigate = useNavigate();

    const onRegister = async (data)=> {
        try {
            await register(data);
            navigate("/login");
        }
        catch(error) {
            console.log(error.message)
        }
    }

    return (
        <div className="container">
            <h1 className="page-title">Register page</h1>
            <RegisterForm onSubmit={onRegister} />
        </div>
    )
}

export default RegisterPage;