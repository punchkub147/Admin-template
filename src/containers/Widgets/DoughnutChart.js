import React from 'react'
import Card from '../../components/Card'
import Doughnut from '../../components/Charts/Doughnut'

const WidgetDoughnutChart = props => (
  <Card>
    <div className="flex flex-row w-full items-center p-6">
      <div className="flex flex-col">
        <h5>100K</h5>
        <p>Product Sales</p>
      </div>
      <Doughnut />
    </div>
  </Card>
);

export default WidgetDoughnutChart
