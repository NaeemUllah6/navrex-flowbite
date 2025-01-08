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
      <table className="min-w-full  text-sm text-start overflow-auto  ">
        <thead className=" text-start border border-s-0 border-e-0 border-[#E5E7EB] ">
          <tr className="bg-[#F9FAFB] text-gray-600 ">
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-4 ps-4 text-[#6B7280] text-start text-[12px] font-[600]"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-start">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 border-t-[1px] border-b-[1px]"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="  py-4 text-[#6B7280]  text-[14px] ps-4 font-[400]"
                >
                  {column.render ? (
                    column.render(row[column.key], row)
                  ) : Array.isArray(row[column.key]) ? (
                    <div className="flex items-center">
                      {row[column.key].map((item: any, index: number) =>
                        item.img ? (
                          <>
                            <span key={index}>{item.name}</span>
                            <img
                              key={index}
                              src={item.img}
                              alt="icon"
                              className="w-5 h-5"
                            />
                          </>
                        ) : (
                          <span key={index}>{item.name}</span>
                        )
                      )}
                    </div>
                  ) : (
                    row[column.key]
                  )}
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
