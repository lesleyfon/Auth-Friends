
import React from 'react';
import { Redirect, Route} from 'react-router-dom';

function Private(props) {
    const {component: Component, ...rest} = props
    return <Route 
            {...rest}
            render = { props => (
                
                <Component 
                    {...props}

                />)}
    />

}
export default Private
