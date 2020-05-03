import React from "react";
import Card from "../../components/Card";
import Line from "../../components/Charts/Line";
import Doughnut from "../../components/Charts/Doughnut";
import Bar from "../../components/Charts/Bar";
import Select from "../../components/Select";
import Table from "../../components/Table";
import ProgressBar from '../../components/Progress/Bar'
import TableCampaigns from "./TableCampaigns";
import TableStats from "./TableStats";
import WidgetList from "./List"
import WidgetStatSmall from "./StatSmall"
import WidgetStatCombine from "./StatCombine"
import WidgetTracker from "./Tracker";
import WidgetOrders from "./Orders";
import WidgetStatus from './Status';

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

const Widgets = () => {
  return (
    <React.Fragment>
      <div className="animated fadeIn grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">

        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <WidgetLineChart />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <WidgetDoughnutChart />
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
            <div className="col-span-6 md:col-span-6">
              <WidgetStatSmall
                name="New Users"
                icon="fas fa-user-friends"
                value="1.5K"
                badgeColor="bg-red-500"
              />
            </div>
            <div className="col-span-6 md:col-span-6">
              <WidgetStatSmall
                name="New Orders"
                icon="fas fa-shopping-bag"
                value="4.2K"
                badgeColor="bg-orange-500"
              />
            </div>
            <div className="col-span-6 md:col-span-6">
              <WidgetStatSmall
                name="Balances"
                icon="fas fa-money-bill-alt"
                value="902K"
                badgeColor="bg-green-500"
              />
            </div>
            <div className="col-span-6 md:col-span-6">
              <WidgetStatSmall
                name="Benefits"
                icon="fas fa-money-bill-wave-alt"
                value="34K"
                badgeColor="bg-teal-500"
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 lg:col-span-3">
          <WidgetList
            title="Transaction Types"
            data={[
              {
                value: "91K",
                badgeColor: "bg-red-500",
                icon: "fab fa-cc-amazon-pay",
                name: "Amazon pay",
                description: "12K new"
              },
              {
                value: "16K",
                badgeColor: "bg-blue-500",
                icon: "fab fa-cc-mastercard",
                name: "Mastercard",
                description: "2K New"
              },
              {
                value: "44K",
                badgeColor: "bg-green-500",
                icon: "fab fa-cc-visa",
                name: "Visa",
                description: "5K New"
              },
              {
                value: "32K",
                badgeColor: "bg-orange-500",
                icon: "fab fa-cc-paypal",
                name: "Paypal",
                description: "7K New"
              }
            ]}
            options={["2020", "2019", "2018", "2017"]}
          />
        </div>
    
        <div className="col-span-12 md:col-span-6">
          <TableCampaigns />
        </div>

        <div className="col-span-12 md:col-span-3">
          <Card>
            <div className="flex flex-col p-4 items-center">
              <h5 className="py-2">3.2k</h5>
              <p>New Orders</p>
            </div>
            <div className="w-full flex justify-center">
              <Bar />
            </div>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-6">
          <WidgetStatCombine options={["Last 7 days", "Last 14 days", "Last Month", "Last Year"]}/>
        </div>

        <div className="col-span-12 md:col-span-6">
          <WidgetTracker options={["Last 7 days", "Last 14 days", "Last Month", "Last Year"]}/>
        </div>

        <div className="col-span-12 md:col-span-4">
          <WidgetOrders options={["Last 7 days", "Last 14 days", "Last Month", "Last Year"]}/>
        </div>

        <div className="col-span-12 md:col-span-4">
          <WidgetStatus />
        </div>

        <div className="col-span-12 md:col-span-4">
          <TableStats />
        </div>

        <div className="col-span-12">
          <Card title="New Users">
            <div className="flex flex-col p-4 items-center">
              <div className="flex justify-center bg-red-500 rounded-full text-white w-16 h-16">
                <i className="fas fa-user-alt fa-2x self-center" />
              </div>
              <h5 className="py-2">45.6k</h5>
              <p>New Users</p>
            </div>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Widgets;
