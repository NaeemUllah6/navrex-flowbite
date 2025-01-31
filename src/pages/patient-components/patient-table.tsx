// DynamicDataTable.tsx
import React from "react";

interface Column {
  key: string;
  header: any;
  render?: (value: any, row: any) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
}

const DynamicDataTable: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full  overflow-auto text-start text-sm  ">
        <thead className=" border border-e-0 border-s-0 border-[#E5E7EB] !text-start">
          <tr className="bg-[#F9FAFB] text-gray-600 ">
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-4 text-[12px] font-[600] text-[#6B7280]"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-y-[1px] hover:bg-gray-50">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="  py-4 text-[14px] font-[400] text-[#6B7280]"
                >
                  {column.render
                    ? column.render(row[column.key], row)
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
