import React from 'react';
import authWithAxios from './../utils/authWIthAxios';
import styled from 'styled-components'


function AddFriend({setIsEdit, id, history}){

    const [cred, setCred] = React.useState({
        id: Date.now(),
        name: '',
        age: '', 
        email:''
    })
    function handleChange(e){
        setCred({
            ...cred,
            [e.target.name]: e.target.value 
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        authWithAxios().post(`/api/friends/`, cred)
        .then(res => {
            history.push('/friends')
            
        })
        .catch(err => console.log(err))

    }
   

    return (
        <EditStyles onSubmit={handleSubmit}>

               
                <input
                    type="text"
                    name="name"
                    value= {cred.name}
                    onChange= { handleChange}
                    placeholder='Friend Name'
                    />
                    <input
                    type="email"
                    name="email"
                    value= {cred.email}
                    onChange= { handleChange}
                    placeholder='Email'
                    />
                    <input
                    type="age"
                    name="age"
                    value= {cred.age}
                    onChange= { handleChange}
                    placeholder='age'
                    />
                    <button>Signin</button>
        </EditStyles>
    )
}

export default AddFriend;

const EditStyles = styled.form`
        background: #ffff;
        width: 400px;
        display: flex;
        margin: 10% auto;
        flex-direction: column;
        padding: 100px 30px;
        border: 1px solid lightgray;
        border-radius: 8px;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        input, button{
            height: 25px;
            border-radius: 5px;
            border: 1px solid lightgray;   
            margin-bottom: 35px;
            border-radius: 25px;
            padding-left: 50px;
            }
        
`;