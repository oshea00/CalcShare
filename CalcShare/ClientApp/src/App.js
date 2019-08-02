import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchWeatherData from './components/FetchWeatherData';
import PrivateRoute from './components/PrivateRoute';
import { useAuth0 } from './react-auth0-spa';
import Loading from './components/Loading';
import Profile from './components/Profile';
import ExternalApi from './components/ExternalApi';

export default () => {

    const { loading } = useAuth0();

    if (loading) {
        return <Loading />;
    }

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <PrivateRoute path='/fetch-data/:startDateIndex?' component={FetchWeatherData} />
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/external-api' component={ExternalApi}/>
        </Layout>);
}
