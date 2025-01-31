import { Checkbox } from "flowbite-react";
import React, { useEffect } from "react";
import "../../index.css";
import Dots from "../../../public/images/patients-images/dots-horizontal.svg";
import DynamicDataTable from "./patient-table";

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const tableColumns = [
    {
      key: "checkbox",
      header: <Checkbox />,
      render: () => (
        <div>
          <Checkbox />
        </div>
      ),
    },
    { key: "patientName", header: "Patient Name" },
    { key: "initials", header: "" },
    { key: "dateOfBirth", header: "Date of Birth" },
    { key: "age", header: "Age" },
    { key: "gender", header: "Gender" },
    {
      key: "classification",
      header: "Status",
      render: (value: string) => (
        <span
          className={`inline-block rounded px-[10px] py-1 text-xs font-medium ${
            value === "Pending"
              ? "bg-orange-100 text-[#946C3D]"
              : "bg-green-100 text-green-600"
          }`}
        >
          {value}
        </span>
      ),
    },
    { key: "createdBy", header: "Created On" },
    { key: "createdOn", header: "Scheduled Appointment" },
    {
      key: "active",
      header: "Active",
      render: (value: boolean) => (
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only rounded"
            checked={value}
            onChange={() => {}}
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-1 after:top-[2.3px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#DEA25C] peer-checked:after:translate-x-[88%] peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:bg-gray-700"></div>
        </label>
      ),
    },
    {
      key: "disable",
      header: "",
      render: (_: any, rowIndex: number) => (
        <div className="dropdown-container relative">
          <button>
            <img
              src={Dots}
              alt="Options"
              className="h-5 w-5 cursor-pointer"
              title=""
            />
          </button>
        </div>
      ),
    },
    {
      key: "report",
      header: "Report",
      render: (_: any, row: any) =>
        row.reportButton === "Report" && (
          <div>
            <button className="rounded bg-[#DEA25C] px-3 py-1 text-white">
              Link to Report
            </button>
          </div>
        ),
    },
    {
      key: "report",
      header: "Questionnaire",
      render: (_: any, row: any) =>
        row.reportButton === "Report" && (
          // <div>
          //   <button
          //     className="rounded bg-[#DEA25C] px-3 py-1 text-white"
          //     onClick={handleOpen}
          //   >
          //     Adult
          //   </button>
          //   <div className={`${open ? "block" : "hidden"} relative`}>
          //     <ul className="absolute left-[30%] top-2 flex flex-col gap-3 rounded bg-white  shadow-md">
          //       <li className="px-6 py-1 text-base  text-[#946C3D] hover:bg-[#DEA25C] hover:text-white">
          //         <a href="#">Adult</a>
          //       </li>
          //       <li className="px-6 py-1 text-base text-[#946C3D] hover:bg-[#DEA25C] hover:text-white">
          //         <a href="#">Padiatric</a>
          //       </li>
          //       <li className="px-6 py-1 text-base text-[#946C3D] hover:bg-[#DEA25C] hover:text-white">
          //         <a href="#">Geneatric</a>
          //       </li>
          //     </ul>
          //   </div>
          // </div>
          <div className="flex items-center justify-center">
            <select className="selectCustom w-fit appearance-none focus:border-0 focus:outline-none focus:ring-0">
              <option value="">Adult</option>
              <option value="">Padiatric</option>
              <option value="">Geneatricn</option>
            </select>
          </div>
        ),
    },
    {
      key: "report",
      header: "",
      render: (_: any, row: any) =>
        row.reportButton === "Report" && (
          <div>
            <button className="rounded bg-[#DEA25C] px-5 py-[5px] text-white">
              Edit
            </button>
          </div>
        ),
    },
  ];

  const tableData = [
    {
      patientName: "Patient Sample 1",
      dateOfBirth: "20 Nov 2022",
      age: 13,
      gender: "Male",
      classification: "Pending",
      createdBy: "20 Nov 2022",
      createdOn: "20 Nov 2022",
      active: false,
      disable: "disabled-column",
      reportButton: "Report",
    },
    {
      patientName: "Patient Sample 2",
      dateOfBirth: "23 Nov 2022",
      age: 12,
      gender: "Female",
      classification: "Pending",
      createdBy: "23 Nov 2022",
      createdOn: "23 Nov 2022",
      active: true,
      disable: "disabled-column",
    },
    {
      patientName: "Patient Sample 3",
      dateOfBirth: "19 Nov 2022",
      age: 36,
      gender: "Female",
      classification: "Completed",
      createdBy: "19 Nov 2022",
      createdOn: "19 Nov 2022",
      active: false,
      disable: "disabled-column",
    },
    {
      patientName: "Patient Sample 4",
      dateOfBirth: "27 Nov 2022",
      age: 11,
      gender: "Male",
      classification: "Completed",
      createdBy: "27 Nov 2022",
      createdOn: "27 Nov 2022",
      active: true,
      disable: "disabled-column",
    },
    {
      patientName: "Patient Sample 5",
      dateOfBirth: "20 Nov 2022",
      age: 9,
      gender: "Male",
      classification: "Pending",
      createdBy: "20 Nov 2022",
      createdOn: "20 Nov 2022",
      active: false,
      disable: "disabled-column",
    },
    {
      patientName: "Patient Sample 6",
      color: "blue",
      dateOfBirth: "18 Nov 2022",
      age: 33,
      gender: "Female",
      classification: "Completed",
      createdBy: "18 Nov 2022",
      createdOn: "18 Nov 2022",
      active: false,
    },
  ];

  return (
    <div>
      <DynamicDataTable columns={tableColumns} data={tableData} />
    </div>
  );
};

export default App;
