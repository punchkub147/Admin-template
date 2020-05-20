import React from "react";
import Card from "../../components/Card";
import Select from "../../components/Select";
import Doughnut from '../../components/Charts/Doughnut'

const WidgetTracker = ({ options = [] }) => {
  return (
    <Card
      title="Stat Tracker"
      action={
        <div className="p-2">
          <Select>
            {options.length > 0 &&
              options.map((option) => <option value={option}>{option}</option>)}
          </Select>
        </div>
      }
    >
      <div className="flex flex-col w-full p-4">
        <div className="flex w-full">
          <div className="text-center p-6">
            <h3>163</h3>
            <p>Ticketes</p>
          </div>
          <div className="w-full">
            <Doughnut />
          </div>
        </div>
        <div className="w-full flex flex-row text-center mt-6">
          <div className="w-1/3">
            <p>New Ticket</p>
            <h6>29</h6>
          </div>
          <div className="w-1/3">
            <p>New Ticket</p>
            <h6>29</h6>
          </div>
          <div className="w-1/3">
            <p>New Ticket</p>
            <h6>29</h6>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WidgetTracker;
