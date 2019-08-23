import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchWeatherData from './components/FetchWeatherData';
import Profile from './components/Profile';
import ExternalApi from './components/ExternalApi';
import { withAuth } from './components/Auth';

export default () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data/:startDateIndex?' component={withAuth(FetchWeatherData)} />
            <Route path='/profile' component={Profile} />
            <Route path='/external-api' component={withAuth(ExternalApi)}/>
        </Layout>);
}
