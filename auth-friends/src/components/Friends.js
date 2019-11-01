import React from 'react';
import authWithAxios from './../utils/authWIthAxios';
import styled from 'styled-components'
function Friends(props) {
    const [friends, setFriends] = React.useState([]);
    const   [isEdit, setIsEdit] = React.useState(false);
    const [id, setId] = React.useState(0)
    React.useEffect(()=>{
        authWithAxios().get('/api/friends' )
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    }, [isEdit, id])

    function editFriend(e){
        e.preventDefault()
        setIsEdit(true)
        
    }
    function deleteFriend(e, id){
        e.preventDefault()
        authWithAxios().delete(`/api/friends/${id}`)
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }
   
    return (
        <div>
          {
              (friends.length >= 1) 
              &&
                friends.map(friend => <FriendDiv key={friend.name}> 
                    <h3> Name: {friend.name} </h3>
                    <h4> Age: {friend.age}  </h4>
                    <h5> email:  {friend.email} </h5>
                    <div className='editDelete' >
                        <h6 onClick={e=>{
                            editFriend(e)
                            setId(friend.id)
                            }} >Edit Friend</h6>
                        <h6 onClick={e=>{
                            deleteFriend(e, friend.id)
                        }}>Delete Friend</h6>
                    </div>
                </FriendDiv>)  
          }
          {
              isEdit && <EditFriendForm setIsEdit={setIsEdit} id ={id} history= {props.history}/>
          }
        </div>
    )
}



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












export default Friends

const FriendDiv = styled.div`
    width: 400px;
    margin: 0 auto;
    border: 1px solid lightgray;
    border-radius: 7px;
    margin-bottom: 15px;

    .editDelete{
        display: flex;
        justify-content: space-between;
        padding: 0px 30px;
        color: lightcoral;
        cursor: pointer;
        &&:hover{
            text-decoration: underline;
        }
    }

    `;

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