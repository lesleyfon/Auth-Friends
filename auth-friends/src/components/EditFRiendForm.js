import React from 'react';
import authWithAxios from './../utils/authWIthAxios';
import styled from 'styled-components'


function EditFriendForm({setIsEdit, id, history}){

    const [cred, setCred] = React.useState({
        id: id,
        name: '',
        password: '', 
        email:''
    })
    function handleChange(e){
        setCred({
            ...cred,
            [e.target.name]: e.target.value 
        })
    }
    function close(e){
        e.preventDefault()
        setIsEdit(false)
    }
    function handleSubmit(e){
        e.preventDefault()
        authWithAxios().put(`/api/friends/${id}`, cred)
        .then(res => {
            console.log(res.data)
            
        })
        .catch(err => console.log(err))
        close(e)
    }

    return (
        <EditStyles>
            <form onSubmit={handleSubmit}>
                <div className='close' > <h1 onClick={close}>Close</h1></div>
               
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
                    type="password"
                    name="password"
                    value= {cred.password}
                    onChange= { handleChange}
                    placeholder='Password'
                    />
                     <button>Signin</button>
            </form>
        </EditStyles>
    )
}












export default EditFriendForm;

const EditStyles = styled.div`
    width: 100vw;
    height: 100vh;
    background: transparent;
    form{
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
        h1{
            float: right;
            background: #ffffff;
        }
        input, button{
            height: 25px;
            border-radius: 5px;
            border: 1px solid lightgray;   
            margin-bottom: 35px;
            border-radius: 25px;
            padding-left: 50px;
            }
        }
`;