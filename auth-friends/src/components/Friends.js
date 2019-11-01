import React from 'react';
import authWithAxios from './../utils/authWIthAxios';

function Friends(props) {
    const [friends, setFriends] = React.useState([]);
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
              (friends.length >= 1) && console.log(friends) 
          }
        </div>
    )
}

export default Friends
