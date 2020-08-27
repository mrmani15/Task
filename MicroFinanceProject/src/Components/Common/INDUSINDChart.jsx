import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
export default class INDUSINDChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ["17 02 2020", "18 02 2020", "19 02 2020", "20 02 2020", "22 02 2020"],
        datasets:[
          {
            label:'Stock value',
            data:[
                1182.65,
                1173.65,
                1117.80,
                1139.00,
                1180.95
            ],
            backgroundColor:[
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
    }
  }
  
  back = () => {
    this.props.history.push("/dashboard")
}

  render(){
    return (
      <div className = "text-center barChart" style={{width:"600px", height:"500px"}}>
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:true,
              text:'INDUSINDBK',
              fontSize:25
            },
            legend:{
              display:true,
              position:"top"
            }
          }}
        />
        <button onClick = {this.back} type="submit" className="btn btn-primary mt-4">Go To Dashboard</button>
      </div>
    )
  }
}