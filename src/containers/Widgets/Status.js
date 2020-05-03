import React from "react";
import Card from "../../components/Card";
import Select from "../../components/Select";
import Radar from '../../components/Charts/Radar'

const WidgetStatus = ({ options = [] }) => {
  return (
    <Card
      title="Sales Status"
      action={
        <div className="p-4">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      }
    >
      <div className="flex flex-col w-full p-4 items-center">
        <div className="w-full flex">
          <b className="mr-4"><span className="text-green-500">O</span> Sales</b>
          <b className="mr-4"><span className="text-orange-500">O</span> Visits</b>
        </div>
        <div className="w-full mt-4">
          <Radar />
        </div>
      </div>
    </Card>
  );
};

export default WidgetStatus;
