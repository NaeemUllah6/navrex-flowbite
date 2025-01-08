import { Checkbox } from "flowbite-react";
import React from "react";
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
  { key: "initials", header: "Initials" },
  { key: "dateOfBirth", header: "Date of Birth" },
  { key: "age", header: "Age" },
  { key: "gender", header: "Gender" },
  {
    key: "classification",
    header: "Classification",
    render: (value: string) => (
      <span
        className={`inline-block px-[10px] py-1 rounded text-xs font-medium ${
          value === "Pediatric"
            ? "bg-orange-100 text-[#946C3D]"
            : "bg-green-100 text-green-600"
        }`}
      >
        {value}
      </span>
    ),
  },
  { key: "createdBy", header: "Created By" },
  { key: "createdOn", header: "Created On" },
  {
    key: "activing",
    header: "Active",
    render: (value: boolean) => (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer rounded"
          checked={value}
          onChange={() => {}}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-[#DEA25C] after:content-[''] after:absolute after:top-[2.3px] after:left-1 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-[88%] peer-checked:after:border-white"></div>
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
        className="w-5 h-5 cursor-pointer"
        title=""
      />
    ),
  },
];

const tableData = [
  {
    patientName: "Jese Leos",
    initials: "AB",
    dateOfBirth: "20 Nov 2022",
    age: 13,
    gender: "Male",
    classification: "Pediatric",
    createdBy: "20 Nov 2022",
    createdOn: "20 Nov 2022",
    active: false,
    disable: "disabled-column",
  },
  {
    patientName: "Bonnie Green",
    initials: "BC",
    dateOfBirth: "23 Nov 2022",
    age: 12,
    gender: "Female",
    classification: "Pediatric",
    createdBy: "23 Nov 2022",
    createdOn: "23 Nov 2022",
    active: true,
    disable: "disabled-column",
  },
  {
    patientName: "Leslie Livingston",
    initials: "CM",
    dateOfBirth: "19 Nov 2022",
    age: 36,
    gender: "Female",
    classification: "Adult",
    createdBy: "19 Nov 2022",
    createdOn: "19 Nov 2022",
    active: false,
    disable: "disabled-column",
  },
  {
    patientName: "Michael Gough",
    initials: "AK",
    dateOfBirth: "27 Nov 2022",
    age: 11,
    gender: "Male",
    classification: "Adult",
    createdBy: "27 Nov 2022",
    createdOn: "27 Nov 2022",
    active: true,
    disable: "disabled-column",
  },
  {
    patientName: "Joseph McFall",
    initials: "AK",
    dateOfBirth: "20 Nov 2022",
    age: 9,
    gender: "Male",
    classification: "Pediatric",
    createdBy: "20 Nov 2022",
    createdOn: "20 Nov 2022",
    active: false,
    disable: "disabled-column",
  },
  {
    patientName: "Karen Nelson",
    color: "blue",
    initials: "CM",
    dateOfBirth: "18 Nov 2022",
    age: 33,
    gender: "Female",
    classification: "Adult",
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
