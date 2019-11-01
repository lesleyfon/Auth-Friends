import React from 'react';
import authWithAxios from './../utils/authWIthAxios';
import styled from 'styled-components'
function Friends(props) {
    const [friends, setFriends] = React.useState([]);
    const   [isEdit, setIsEdit] = React.useState(false);
    React.useEffect(()=>{
        authWithAxios().get('/api/friends' )
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
          {
              (friends.length >= 1) 
              &&
                friends.map(friend => <FriendDiv key={friend.name}> 
                    <h3> Name: {friend.name} </h3>
                    <h4> Age: {friend.age}  </h4>
                    <h5> email:  {friend.email} </h5>
                </FriendDiv>)  
          }
        </div>
    )
}



function EditFriendForm(){

    return (
        <form>
            
        </form>
    )
}












export default Friends

const FriendDiv = styled.div`
    width: 400px;
    margin: 0 auto;
    border: 1px solid lightgray;
    border-radius: 7px;
    margin-bottom: 15px;
    `;