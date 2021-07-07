import React from 'react';
import EditFriendForm from './EditFRiendForm'
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
