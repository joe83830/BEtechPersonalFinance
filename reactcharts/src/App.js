import React, {Component} from 'react';
import './App.css';
import Chart from './components/Chart';
import NavBar from './components/NavBar';
import LineChart from './components/Line';
import Form from './components/form';

class App extends Component{

    constructor(){
        super();
        this.state = {
            chartData: {},
            lineData: {},
            savingsGoal: 'Savings Goal...'
        }
        this.updateSavingsGoal = this.updateSavingsGoal.bind(this);
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

    updateSavingsGoal(e) {
        this.setState({savingsGoal: e.target.value});
    }

    render() {
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*</header>*/}
                <NavBar/>
                {/*<Form2/>*/}
                <input type = "text" value = {this.state.savingsGoal}
                       onChange = {this.updateSavingsGoal} />
                <h4>{this.state.savingsGoal}</h4>

                <LineChart lineData={this.state.lineData}/>
                <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition={"bottom"}/>
            </div>
        );
    }
}

// class Form2 extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             data: 'Savings Goal...'
//         }
//         this.updateState = this.updateState.bind(this);
//     };
//     updateState(e) {
//         this.setState({data: e.target.value});
//     }
//     render() {
//         return (
//             <div>
//                 <input type = "text" value = {this.state.data}
//                        onChange = {this.updateState} />
//                 <h4>{this.state.data}</h4>
//             </div>
//         );
//     }
// }

export default App;
