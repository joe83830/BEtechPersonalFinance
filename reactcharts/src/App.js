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
            savingsGoal: 28
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
                labels: ['You', 'Average American'],
                datasets: [
                    {
                        label: 'Dollars',
                        data: [
                            24,
                            91,
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                        ]
                    }

                ]
            }
        });
    }

    getLineData(){

        this.setState({
            lineData: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'My Savings Goal',
                    borderColor: 'rgba(255, 99, 132, 0.6)',
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    fill: false,
                    data: [
                        4,
                        8,
                        12,
                        16,
                        20,
                        24,
                        28
                    ],
                    yAxis: 'y-axis-1',
                }, {
                    label: 'My Savings So far',
                    borderColor: 'rgba(54, 162, 235, 0.6)',
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    fill: false,
                    data: [
                        0,
                        0,
                        4
                        // 8,
                        // 8,
                        // 8,
                        // 12
                    ],
                    yAxis: 'y-axis-2'
                }]
            }
        });
    }

    updateSavingsGoal(e) {
        console.log("HAAAAAA");
        console.log(e.target[0].value);
        // console.log(e.target.getAttribute('input'));
        // const value = parseInt(e.target.value, 10);
        this.setState({
            savingsGoal: e.target[0].value,
            lineData: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'My Savings Goal',
                    borderColor: 'rgba(255, 99, 132, 0.6)',
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    fill: false,
                    data: [
                        e.target[0].value,
                        e.target[0].value,
                        12,
                        16,
                        20,
                        24,
                        28
                    ],
                    yAxis: 'y-axis-1',
                }, {
                    label: 'My Savings So Far',
                    borderColor: 'rgba(54, 162, 235, 0.6)',
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    fill: false,
                    data: [
                        0,
                        0,
                        4,
                        8,
                        8,
                        8,
                        12
                    ],
                    yAxis: 'y-axis-2'
                }]
            }}, () => {console.log("WHAT THE FUCK")});
        console.log("SAVINGS GOAL UPDATED");
        console.log(this.state.savingsGoal);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(
            `this.state.clickCounts(♻️ componentDidUpdate)`,

            "UPDATED TO" + this.state.savingsGoal
        );
    }

    render() {
        // console.log(this.state.lineData)
        // console.log(this.state.savingsGoal)
        console.log(this.state.savingsGoal);
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*</header>*/}
                <NavBar/>
                {/*<Form2/>*/}
                {/*<input type = "text" value = {this.state.savingsGoal}*/}
                       {/*onChange = {this.updateSavingsGoal} />*/}

                <form onSubmit={this.updateSavingsGoal}>
                    <label>SavingsGoal  </label>
                    <input type = "text" defaultValue={this.state.savingsGoal}/>
                    <button>Send data!</button>
                </form>

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
