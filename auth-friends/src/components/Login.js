import React, {useState} from 'react';
import styled from 'styled-components';
import authWithAxios from './../utils/authWIthAxios'

function Login(props) {


    const [formError, setFormError] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        authWithAxios().post('/api/login', { username: 'Lambda School', password: 'i<3Lambd4' })
            .then(res=> {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friends')
                console.log(props)
            })
            .catch(err=>console.log(err))

    }

    return (
            <Form onSubmit={handleSubmit}>
                {formError && <div className='error'>{formError}</div>}
                <input
                type="text"
                name="username"
                value= 'Lambda School'
                disabled
                />
                <input
                type="password"
                name="password"
                value='i<3Lambd4'
                disabled
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