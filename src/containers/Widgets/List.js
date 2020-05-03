import React from "react";
import Card from "../../components/Card";
import Select from "../../components/Select";

const WidgetList = ({ title, data = [], options = [] }) => {
  return (
    <Card
      title={title}
      action={
        <div className="p-2">
          <Select>
            {options.map(option => (
              <option value={option}>{option}</option>
            ))}
          </Select>
        </div>
      }
    >
      <table className="w-full">
        <tbody>
          {data.map(
            ({
              value = 0,
              icon = "fab fa-ebay",
              badgeColor = "bg-blue-500",
              name = "Item name",
              description = "description"
            }) => (
              <tr className="h-16 hover:bg-gray-200">
                <td className="pl-4 w-10">
                  <div className={`flex justify-center ${badgeColor} rounded-full text-white w-10 h-10`}>
                    <i className={`${icon} fa-lg self-center`} />
                  </div>
                </td>
                <td className="pl-4">
                  <p className="text-base m-0">{name}</p>
                  <p className="text-sm text-gray-500 m-0">{description}</p>
                </td>
                <td className="pr-4 text-right">
                  <p className="text-sm font-bold m-0">{value}</p>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default WidgetList;