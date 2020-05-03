import React from 'react'
import Card from '../../components/Card'

const WidgetStatSmall = ({
  title,
  name = "name",
  value = "20 K",
  icon = "fas fa-shopping-bag",
  badgeColor = "bg-blue-500"
}) => (
  <Card title={title}>
    <div className="flex flex-col items-center p-4">
      <div
        className={`flex justify-center ${badgeColor} rounded-full text-white w-12 h-12`}
      >
        <i className={`${icon} fa-lg self-center`} />
      </div>
      <h6 className="mt-2">{value}</h6>
      <p>{name}</p>
    </div>
  </Card>
);

export default WidgetStatSmall