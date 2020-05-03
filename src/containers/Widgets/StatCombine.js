import React from 'react'
import Card from '../../components/Card'
import ProgressBar from '../../components/Progress/Bar'
import Bar from "../../components/Charts/Bar";
import Select from "../../components/Select";

const WidgetStatCombine = ({options = []}) => <Card>
<div className="grid grid-cols-12 gap-4 w-full p-4">
  <div className="col-span-6 flex flex-col align-left items-start justify-between">
    <div>
      <h3>2.7K</h3>
      <sub>Avg Sessions</sub>
      <p className="mb-4"><span className="text-green-500">+5.2</span> vs Last 7 Days</p>
    </div>
    <button className="w-full bg-indigo-500 text-white p-2">View Details >></button>
  </div>
  <div className="col-span-6 w-full flex flex-col justify-end items-end">
    <div className="w-32 mb-4">
      <Select>
        {options.length > 0 && options.map((option) => <option value={option}>{option}</option>)}
      </Select>
    </div>
    <Bar />
  </div>
  
  <div className="col-span-12">
    <hr className="w-full"/>
  </div>
  <div className="col-span-12">
    <div className="grid grid-cols-12 gap-4 w-full">
      <div className="col-span-6"><p>Goal: $100000</p><ProgressBar value={Math.random() * 100}/></div>
      <div className="col-span-6"><p>Users: 100K</p><ProgressBar value={Math.random() * 100}/></div>
      <div className="col-span-6"><p>Retention: 90%</p><ProgressBar value={Math.random() * 100}/></div>
      <div className="col-span-6"><p>Duration: 1yr</p><ProgressBar value={Math.random() * 100}/></div>
    </div>
  </div>
</div>
</Card>

export default WidgetStatCombine