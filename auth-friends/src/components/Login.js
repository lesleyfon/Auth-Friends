import React, {useState} from 'react'
import api from './../utils/api'

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
        api()
            .post('/signin', credentials,)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.history.push('/account')
                
            })
            .catch(err=>{
                setFormError(err.response.data.message)
            })

    }

    return (
            <form onSubmit={handleSubmit}>
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
            </form>
    )
}

export default SignIn
