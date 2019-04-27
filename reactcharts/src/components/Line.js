import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class LineChart extends Component{

    constructor(props){
        super(props);
        this.state = {
            lineData: props.lineData
        }
        // console.log(this.state.lineData)
    }

    // static defaultProps = {
    //     displayTitle: true,
    //     displayLegend: true,
    //     legendPosition: 'right',
    //     location: 'City'
    // }

    render(){
        // console.log(this.state.lineData)
        return (
            <div className="lineChart">
                <Line
                    data={this.state.lineData}
                    options={{
                        maintainAspectRatio : false,
                        responsive: true,
                        hoverMode: 'index',
                        stacked: false,
                        title: {
                            display: true,
                            text: "CI Worked",
                            // text: 'You v.s. Your Savings Goal',
                            fontSize: 30

                        },
                        scales: {
                            yAxes: [{
                                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                display: true,
                                position: 'left',
                                id: 'y-axis-1',
                            }, {
                                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                display: true,
                                position: 'right',
                                id: 'y-axis-2',
                                // grid line settings
                                gridLines: {
                                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                                },
                            }],
                        }
                    }}
                />
            </div>
        )
    }
}

export default LineChart;