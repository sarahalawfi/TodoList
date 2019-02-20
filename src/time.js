
import React from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactDOM from 'react-dom';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date(moment().format("h:mm A")) };
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
        }).then((response) => {
            console.log(response);

        }).catch((error) => {
            console.log(error);
        });
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(moment().format("h:mm A"))
        });
    }

    render() {
        return (
            <div>
                <h3> {this.state.date.toLocaleTimeString()}</h3>

            </div>
        );
    }

}
ReactDOM.render(
    <Time />,
    document.getElementById('root')
);
export default Time;
