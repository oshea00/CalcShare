
import React from 'react';
import { useAuth0 } from '../react-auth0-spa';

// Wrapping Hook API as a functional component that
// can be used by class components (see NavMenu.js)

export const withAuth = (Component) => {
    return (props) => {
        const useAuth = useAuth0();
        return <Component auth={useAuth} {...props} />
    }
};



