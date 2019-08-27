import React from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '../react-auth0-spa';
import { Card, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import Loading from './Loading';

const Home = props => {
    const { user, isAuthenticated, loading } = useAuth0();

    if (loading && !user) {
        return (<Loading/>);
    }

    return (
        <div>
            <h1>RPN Software</h1>
            <div className="mb-5">
                <ListGroup>
                    <ListGroupItem>Games</ListGroupItem>
                    <ListGroupItem>Engineering</ListGroupItem>
                    <ListGroupItem>Navigation</ListGroupItem>
                </ListGroup>
            </div>
            {isAuthenticated &&
                <Card>
                <CardTitle>
                    <img width="50" alt="avatar" src={user && user.picture} /> Programs
                </CardTitle>
                <CardBody>
                <CardText>Card Books</CardText>
                    <ListGroup>
                        <ListGroupItem>Strategy Games</ListGroupItem>
                        <ListGroupItem>Simulation</ListGroupItem>
                    </ListGroup>
                </CardBody>
                </Card>
            }
        </div>
    );
};

export default connect()(Home);
