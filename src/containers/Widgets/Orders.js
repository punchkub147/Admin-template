import React from "react";
import Card from "../../components/Card";
import Select from "../../components/Select";
import Doughnut from '../../components/Charts/Doughnut'

const WidgetOrders = ({ options = [] }) => {
  return (
    <Card
      title="Product Orders"
      action={
        <div className="p-2">
          <Select>
            {options.length > 0 &&
              options.map((option) => <option value={option}>{option}</option>)}
          </Select>
        </div>
      }
    >
      <div className="flex flex-col w-full p-4 items-center">
        <div className="w-full">
          <Doughnut />
        </div>
        <div className="w-full flex flex-col text-center mt-6">
          <div className="flex justify-between">
            <b><span className="text-green-500">O</span> Finished</b>
            <p>23043</p>
          </div>
          <div className="flex justify-between">
            <b><span className="text-orange-500">O</span> Pending</b>
            <p>14658</p>
          </div>
          <div className="flex justify-between">
            <b><span className="text-red-500">O</span> Rejected</b>
            <p>4758</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WidgetOrders;
