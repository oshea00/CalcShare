import React from "react";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-wrapper";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }

  console.log(user);

  return (
    <div className="container mb-5">
      <h2>{user.name}</h2>
      <p className="lead text-muted">{user.email}</p>
    <div className="highlight">{JSON.stringify(user, null, 2)}</div>
    </div>
  );
};

export default Profile;
