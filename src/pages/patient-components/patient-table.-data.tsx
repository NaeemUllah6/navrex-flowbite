import { Checkbox } from "flowbite-react";
import React from "react";
import "../../index.css";
import Dots from "../../../public/images/patients-images/dots-horizontal.svg";
import DynamicDataTable from "./patient-table";

const tableColumns = [
  {
    key: "New_Column",
    header: <Checkbox />,
    render: (value: string) => (
      <div className="">
        <Checkbox />
        <span>{value}</span>
      </div>
    ),
  },
  {
    key: "patientName",
    header: "Patient Name",
  },
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
  { key: "createdBy", header: "Created By" },
  { key: "createdOn", header: "Schedule Appointment" },
  {
    key: "activing",
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
    render: () => (
      <img
        src={Dots}
        alt="Options"
        className="h-5 w-5 cursor-pointer"
        title=""
      />
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
    classification: "ompleted",
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
    classification: "ompleted",
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
    classification: "ompleted",
    createdBy: "18 Nov 2022",
    createdOn: "18 Nov 2022",
    active: false,
  },
];

const App: React.FC = () => {
  return (
    <div className="">
      <DynamicDataTable columns={tableColumns} data={tableData} />
    </div>
  );
};

export default App;
