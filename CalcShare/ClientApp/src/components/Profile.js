import React from "react";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

const Profile = (props) => {
  
    const { user, isAuthenticated } = useAuth0();
    if (!isAuthenticated)
        return <Loading />;
  
    return (
      <div className="container mb-5">
        <h2>Profile</h2>
        <table className='table sm table-dark table-bordered'>
            <tr><td colspan="2" ><img alt="avatar" src={user.picture} /></td></tr>
            <tr><th>Name</th><td>{user.name}</td></tr>
            <tr><th>Nickname</th><td>{user.nickname}</td></tr>
            <tr><th>Email</th><td>{user.email}</td></tr>
        </table>
      </div>
    );
};

export default Profile;
