import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'

export default class Chart extends React.Component{
    render(){
        const options1 = {
            title: {
              text: 'Transaction Data'
            },
            colors:['#e8d816','#00ff14','#00b8ff'],
            credits: false,
            series: [{
                name:'transaction count',
                type: 'pie',
                data: [
                    {
                        name:'Total Txn',
                        y: 10
                    },{
                        name:'Settled Txn',
                        y: 7
                    },{
                        name:'Pending Txn',
                        y: 3
                    }
                ]
            }]
          },
          options2 = {
            title: {
              text: 'Refunds Data'
            },
            colors:['red','grey','#00b8ff'],
            credits: false,
            series: [{
                name:'transaction count',
                type: 'pie',
                data: [
                    {
                        name:'Refund Total',
                        y: 15
                    },{
                        name:'Pending Refund 3 days or more',
                        y: 7
                    },{
                        name:'Pending Refund Txn',
                        y: 3
                    }
                ]
            }]
          };
        return(
            <div className="chart-container row">
                <div className="high-chart-holder col-md-6">
                    <HighchartsReact options={options1} />
                </div>
                <div className="high-chart-holder col-md-6">
                    <HighchartsReact options={options2} />
                </div>
            </div>
        )
    }
}