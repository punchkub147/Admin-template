import React from 'react'
import Card from '../../components/Card'
import Line from '../../components/Charts/Line'

const WidgetLineChart = props => (
  <Card>
    <div className="flex flex-row w-full items-center p-6">
      <div className="flex justify-center bg-red-500 rounded-full text-white w-12 h-12">
        <i className="fas fa-user-alt fa-lg self-center" />
      </div>
      <div className="ml-4">
        <h5>45.6k</h5>
        <p>New Users</p>
      </div>
    </div>
    <Line />
  </Card>
);

export default WidgetLineChart
