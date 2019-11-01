
import React from 'react';
import { Redirect, Route} from 'react-router-dom';

function Private(props) {
    const {component: Component, ...rest} = props
    console.log(localStorage.getItem('token'))
    return <Route 
            {...rest}
            render = { props => (
                <>
                {
                    localStorage.getItem('token')
                    ?

                        <Component  {...props} {...rest} token={localStorage.getItem('token')}/>
                    :
                         <Redirect to ='/login' />

                }
                </>
               )}
    />

}
export default Private
