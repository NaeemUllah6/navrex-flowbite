import React from "react";

const DynamicDataTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-start text-sm">
        <thead className="border border-e-0 border-s-0 border-[#E5E7EB] !text-start">
          <tr className="bg-[#F9FAFB] text-gray-600">
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-4 text-xs font-semibold text-gray-500"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-y hover:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="py-4 text-sm font-normal text-gray-500"
                >
                  {column.render
                    ? column.render(row[column.key], rowIndex)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicDataTable;
