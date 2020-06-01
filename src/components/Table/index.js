import React from "react";

const Table = ({ columns = [], dataSource = [], hideHeader = false }) => {
  return (
    <div className="w-full overflow-scroll pb-4">
      <table className="table-auto w-full">
        {!hideHeader && (
          <thead className="border-t border-b text-left">
            <tr>
              {columns.map(column => (
                <th className="text-xs p-4">{column.title}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {dataSource.map((data, index) => (
            <tr className="transition-full transform hover:-translate-y-1 hover:bg-gray-100 hover:shadow">
              {columns.map(column => (
                <td className="text-base px-4 py-2">
                  {column.render
                    ? column.render(data[column.key], data, index)
                    : data[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
