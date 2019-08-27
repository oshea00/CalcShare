import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
import '../index.css';

const Profile = (props) => {
    const [token, setToken] = useState();
    const { user, isAuthenticated, getTokenSilently } = useAuth0();
    if (!isAuthenticated)
        return <Loading />;

    useEffect(() => {
        const getToken = async () => {
            const token = await getTokenSilently();
            setToken(token);
        }
        getToken();
    },[]);


    return (
      <div className="container mb-5">
        <h2>Profile</h2>
        <table className='table sm table-dark table-bordered'>
            <tbody className='bigfont'>
                <tr><td colSpan="2" ><img alt="avatar" src={user.picture} /></td></tr>
                <tr><th>Name</th><td>{user.name}</td></tr>
                <tr><th>Nickname</th><td>{user.nickname}</td></tr>
                <tr><th>Email</th><td>{user.email}</td></tr>
            </tbody>
            </table>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title" style={{ color: 'black' }}>JWT</h4>
                    <span className="card-text"
                        style={{ color: 'black', wordBreak: 'normal', whiteSpace: 'pre-wrap' }}>
                        {token}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Profile;
