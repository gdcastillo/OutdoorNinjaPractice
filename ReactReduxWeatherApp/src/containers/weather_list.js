import React, {Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData){            //renders a single city
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        return (
            <tr key = {name}>
                <td>{name}</td>
            </tr>
        )

    }

    render(){   //using bootstrap again
        return (
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps( { weather} ) {
    return { weather };        //this is equivalent to state.weather
}

export default connect(mapStateToProps)(WeatherList);