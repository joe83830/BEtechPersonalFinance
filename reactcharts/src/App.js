import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import NavBar from './components/NavBar';
import LineChart from './components/Line';

class App extends Component{

    constructor(){
        super();
        this.state = {
            chartData: {},
            lineData: {}
        }
    }

    componentWillMount(){
        this.getLineData()
        this.getChartData()
    }

    getChartData(){

        // Ajax calls here
        this.setState({
            chartData: {
                labels: ['Boston1', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }

                ]
            }
        });
    }

    getLineData(){

        this.setState({
            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    borderColor: 'rgba(255, 99, 132, 0.6)',
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    fill: false,
                    data: [
                        0.5,
                        0.1,
                        0.3,
                        0.4,
                        0.8,
                        0.6,
                        0.7
                    ],
                    yAxis: 'y-axis-1',
                }, {
                    label: 'My Second dataset',
                    borderColor: 'rgba(255, 99, 132, 0.6)',
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    fill: false,
                    data: [
                        0.8,
                        0.1,
                        0.3,
                        0.4,
                        0.8,
                        0.6,
                        0.7
                    ],
                    yAxis: 'y-axis-2'
                }]
            }
        });
    }

    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*</header>*/}
                <NavBar/>
                <LineChart lineData={this.state.lineData}/>
                <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition={"bottom"}/>
            </div>
        );
    }
}

export default App;
