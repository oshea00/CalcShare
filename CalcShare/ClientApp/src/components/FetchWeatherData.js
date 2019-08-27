import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { actionCreators } from '../store/WeatherForecasts';
import Loading from './Loading';

class FetchWeatherData extends Component { 
  componentDidMount() {
    this.ensureDataFetched();
  }

  componentDidUpdate() {
    this.ensureDataFetched();
  }

  ensureDataFetched() {
      const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
      if (this.props.auth.isAuthenticated)
          this.props.requestWeatherForecasts(startDateIndex,this.props.auth);
  }

    render() {
        if (!this.props.auth.isAuthenticated) {
            return <Loading />;
        }
        else {
            return (
            <div>
                <h1>Weather forecasts</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {renderForecastsTable(this.props)}
                {renderPagination(this.props)}
            </div>)
        }
    }
}

function renderForecastsTable(props) {
    return (
    <Table dark>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {props.forecasts.map(forecast =>
          <tr key={forecast.dateFormatted}>
            <td>{forecast.dateFormatted}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

function renderPagination(props) {
  const prevStartDateIndex = (props.startDateIndex || 0) - 5;
  const nextStartDateIndex = (props.startDateIndex || 0) + 5;

  return <p className='clearfix text-center'>
    <Link className='btn btn-default pull-left' to={`/fetch-data/${prevStartDateIndex}`}>Previous</Link>
    <Link className='btn btn-default pull-right' to={`/fetch-data/${nextStartDateIndex}`}>Next</Link>
    {props.isLoading ? <span>Loading...</span> : []}
  </p>;
}

const mapStateToProps = (state, ownProps) => ({
    ...state.weatherForecasts
})

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(FetchWeatherData);
