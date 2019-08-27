import React from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '../react-auth0-spa';

const Home = props => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <div>
            <h1>RPN Software</h1>
            <div className="mb-5">
                <ul className="list-group">
                    <li className="list-group-item">Games</li>
                    <li className="list-group-item">Engineering</li>
                    <li className="list-group-item">Navigation</li>
                </ul>
            </div>
            {isAuthenticated &&
                <div className="card p-5" >
                <h4 className="card-title">
                    <img width="50" alt="avatar" src={user && user.picture} /> Programs</h4>
                <p className="card-text">Card Books</p>
                    <ul className="list-group">
                        <li className="list-group-item">Strategy Games</li>
                        <li className="list-group-item">Simulation</li>
                        </ul>
                </div>
            }
        </div>
    );
};

export default connect()(Home);
