import { Checkbox } from "flowbite-react";
import React from "react";
import Dots from "../../../public/images/patients-images/dots-horizontal.svg";
import PDF from "../../../public/images/patients-images/pdf.svg";
import DynamicDataTable from "./survey-table";

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
    header: "Survey",
  },
  { key: "initials", header: "Patient Name" },
  { key: "dateOfBirth", header: "Created On" },
  { key: "age", header: "Type" },
  { key: "gender", header: "Gender" },
  {
    key: "classification",
    header: "Status",
    render: (value: string) => (
      <span
        className={`inline-block rounded px-[10px] py-1 text-xs font-medium ${
          value === "Complete"
            ? "bg-orange-100 text-[#946C3D]"
            : "bg-green-100 text-green-600"
        }`}
      >
        {value}
      </span>
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
    patientName: [{ img: PDF }, { name: "Survey#2341" }],
    initials: "Patient Sample 1",
    dateOfBirth: "20 Nov 2022",
    age: "Pedriatic",
    gender: "Male",
    classification: "Complete",
    createdBy: "20 Nov 2022",
    createdOn: "20 Nov 2022",
    active: false,
    disable: "disabled-column",
  },
  {
    patientName: [{ img: PDF }, { name: "Survey#2341" }],
    initials: "Patient Sample 2",
    dateOfBirth: "20 Nov 2022",
    age: "Pedriatic",
    gender: "Female",
    classification: "Complete",
    createdBy: "20 Nov 2022",
    createdOn: "20 Nov 2022",
    active: true,
    disable: "disabled-column",
  },
  {
    patientName: [{ img: PDF }, { name: "Survey#2341" }],
    initials: "Patient Sample 3",
    dateOfBirth: "20 Nov 2022",
    age: "Adult",
    gender: "Female",
    classification: "Pending",
    createdBy: "20 Nov 2022",
    createdOn: "20 Nov 2022",
    active: false,
    disable: "disabled-column",
  },
  {
    patientName: [{ img: PDF }, { name: "Survey#2341" }],
    initials: "Patient Sample 4",
    dateOfBirth: "18 Nov 2022",
    age: "Pedriatic",
    gender: "Male",
    classification: "Pending",
    createdBy: "18 Nov 2022",
    createdOn: "18 Nov 2022",
    active: true,
    disable: "disabled-column",
  },
  {
    patientName: [{ img: PDF }, { name: "Survey#2341" }],
    initials: "Patient Sample 5",
    dateOfBirth: "17 Nov 2022",
    age: "Adult",
    gender: "Male",
    classification: "Complete",
    createdBy: "18 Nov 2022",
    createdOn: "20 Nov 2022",
    active: false,
    disable: "disabled-column",
  },
  {
    patientName: [{ img: PDF }, { name: "Survey#2341" }],
    color: "Bonnie Green",
    initials: "Patient Sample 6",
    dateOfBirth: "18 Nov 2022",
    age: "Pedriatic",
    gender: "Female",
    classification: "Pending",
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
