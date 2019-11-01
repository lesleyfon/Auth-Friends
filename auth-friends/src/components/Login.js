import React, {useState} from 'react';
import styled from 'styled-components';

function Login(props) {
    const [credentials, setCredentials] = useState({
        username:'',
        password:''
    });

    const [formError, setFormError] = useState('')
    function handleChange(e){
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();

    }

    return (
            <Form onSubmit={handleSubmit}>
                {formError && <div className='error'>{formError}</div>}
                <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                />
                <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                />
                <button>Signin</button>
            </Form>
    )
}

export default Login;


const Form = styled.form`
    width: 600px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    padding: 100px 30px;
    border: 1px solid lightgray;
    border-radius: 8px;
    input, button{
        height: 25px;
        border-radius: 5px;
        border: 1px solid lightgray;   
        margin-bottom: 35px;
        border-radius: 25px;
    }
`;