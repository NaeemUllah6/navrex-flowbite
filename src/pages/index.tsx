/* eslint-disable jsx-a11y/anchor-is-valid */
import { Badge, Table, useTheme } from "flowbite-react";
import type { FC } from "react";
import Chart from "react-apexcharts";
import { CreatePatient } from "../../public/images/dashboard/create-patient";
import { LocalSurvey } from "../../public/images/dashboard/local-survey";
import { OnlineSurvey } from "../../public/images/dashboard/online-survey";
import { Support } from "../../public/images/dashboard/support";
import { SurveyIcon } from "../../public/images/dashboard/survey-icon";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";

const DashboardPage: FC = function () {
  const card_items = [
    {
      title: "Create New Patient",
      icon: <CreatePatient />,
    },
    {
      title: "Local Survey",
      icon: <LocalSurvey />,
    },
    {
      title: "Online Survey",
      icon: <OnlineSurvey />,
    },
    {
      title: "Support",
      icon: <Support />,
    },
  ];

  return (
    <NavbarSidebarLayout>
      <div className="bg-[#F9FAFB] ">
        <div className="mt-2 grid grid-cols-1 gap-4  pe-4 ps-4 pt-4 md:grid-cols-2 lg:grid-cols-4 ">
          {card_items.map((item, index) => (
            <div className="rounded-lg bg-[#D2E6DB] p-6" key={index}>
              <div className="flex flex-col items-center gap-[20px]">
                <span>{item.icon}</span>
                <p className="text-[16px] font-[700] text-[#64957A]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 pt-6">
        <div className="my-4 grid grid-cols-1 xl:gap-4 2xl:grid-cols-3">
          <div className="grid gap-4 sm:grid-cols-1 2xl:grid-cols-1">
            <PatientOverview />
          </div>
          <div className="mb-4 rounded-lg bg-white px-4 pt-4 shadow dark:bg-gray-800 sm:p-6 xl:mb-0 xl:p-8 2xl:col-span-2">
            <PatientStats />
          </div>
        </div>
        <div className="my-4 grid grid-cols-1 gap-2 xl:gap-4 2xl:grid-cols-2">
          <PatientsSurvey />
          <SurveyTable />
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};

const PatientStatsChart: FC = function () {
  const { mode } = useTheme();
  const isDarkTheme = mode === "dark";

  const borderColor = isDarkTheme ? "#374151" : "#F3F4F6";
  const labelColor = "#9CA3AF";

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      fontFamily: "Inter, sans-serif",
      foreColor: labelColor,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "50%",
        borderRadius: 6,
        borderRadiusApplication: "end",
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: borderColor,
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15,
      },
    },
    xaxis: {
      title: {
        text: "Patients",
        style: {
          color: labelColor,
          fontSize: "14px",
          fontWeight: 600,
        },
      },
      categories: ["0", "26-44", "45-65", "66-79"],
      labels: {
        style: {
          colors: labelColor,
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      axisBorder: {
        color: borderColor,
      },
      axisTicks: {
        color: borderColor,
      },
      offsetY: 15,
    },
    yaxis: {
      title: {
        text: "Age",
        style: {
          color: labelColor,
          fontSize: "14px",
          fontWeight: 600,
        },
        offsetX: 15,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      show: false,
    },
    colors: ["#8EC0A4", "#E3B177"],
  };

  const series = [
    {
      name: "Patients",
      data: [20, 50, 75, 40],
    },
    {
      name: "Age",
      data: [20, 50, 75, 40],
    },
  ];

  return <Chart height={420} options={options} series={series} type="bar" />;
};

const PatientOverview: FC = function () {
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Patients Overview
      </h3>
      <div className="flex h-full items-center justify-center">
        <PatientsChart />
      </div>
    </div>
  );
};

const PatientStats: FC = function () {
  return (
    <div>
      <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Patients Stats
      </h3>
      <div>
        <PatientStatsChart />
      </div>
    </div>
  );
};

const PatientsChart: FC = function () {
  const { mode } = useTheme();
  const isDarkTheme = mode === "dark";

  const options: ApexCharts.ApexOptions = {
    labels: ["Paediatric", "Adult"],
    colors: ["#8EC0A4", "#E3B177"],
    chart: {
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      colors: [isDarkTheme ? "#111827" : "#fff"],
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9,
        },
      },
    },
    tooltip: {
      shared: true,
      followCursor: false,
      fillSeriesColor: false,
      inverseOrder: true,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
      x: {
        show: true,
        formatter: function (_, { seriesIndex, w }) {
          const label = w.config.labels[seriesIndex];
          return label;
        },
      },
      y: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      position: "bottom",
    },
  };
  const series = [20, 30];

  return <Chart height={305} options={options} series={series} type="donut" />;
};

const PatientsSurvey: FC = function () {
  return (
    <div className="rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between px-4 pt-4">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Patients
          </h3>
        </div>
        <div className="shrink-0">
          <a
            href="#"
            className="hover:[#111928] rounded-lg border p-2 text-sm font-medium text-[#111928] dark:text-[#111928] dark:hover:bg-gray-700"
          >
            View all
          </a>
        </div>
      </div>
      <hr className="mx-4 mb-4 h-px border-0 bg-gray-200 px-2 dark:bg-gray-700"></hr>
      <div className="flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table
                striped
                className="min-w-full divide-y divide-gray-200 dark:divide-gray-600"
              >
                <Table.Head className="bg-gray-50 text-[12px] font-[600] text-[#6B7280] dark:bg-gray-700">
                  <Table.HeadCell>PATIENT NAME</Table.HeadCell>
                  <Table.HeadCell>DATE OF BIRTH</Table.HeadCell>
                  <Table.HeadCell>AGE</Table.HeadCell>
                  <Table.HeadCell>CLASSIFICATION</Table.HeadCell>
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  <Table.Row>
                    <Table.Cell className="whitespace-nowrap p-4 text-[16px] font-[500] text-[#111928] dark:text-white">
                      <span className="font-semibold">Patient Sample1</span>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-gray-400">
                      23 Nov 2022
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      13
                    </Table.Cell>
                    <Table.Cell className="flex whitespace-nowrap p-4">
                      <Badge
                        color="success"
                        className="rounded-[5px] bg-[#F8ECDE] px-4 text-[#946C3D]"
                      >
                        Pediatric
                      </Badge>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="whitespace-nowrap p-4 text-[16px] font-[500] text-[#111928] dark:text-white">
                      <span className="font-semibold">Patient Sample2</span>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-gray-400">
                      23 Nov 2022
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      13
                    </Table.Cell>
                    <Table.Cell className="flex whitespace-nowrap p-4">
                      <Badge
                        color="success"
                        className="rounded-[5px] bg-[#E4F0E9] px-4 text-[#507761]"
                      >
                        Adult
                      </Badge>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="whitespace-nowrap p-4 text-[16px] font-[500] text-[#111928] dark:text-white">
                      <span className="font-semibold">Patient Sample3</span>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-gray-400">
                      23 Nov 2022
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      13
                    </Table.Cell>
                    <Table.Cell className="flex whitespace-nowrap p-4">
                      <Badge
                        color="success"
                        className="rounded-[5px] bg-[#E4F0E9] px-4 text-[#507761]"
                      >
                        Adult
                      </Badge>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="whitespace-nowrap p-4 text-[16px] font-[500] text-[#111928] dark:text-white">
                      <span className="font-semibold">Patient Sample4</span>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-gray-400">
                      23 Nov 2022
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      13
                    </Table.Cell>
                    <Table.Cell className="flex whitespace-nowrap p-4">
                      <Badge
                        color="success"
                        className="rounded-[5px] bg-[#F8ECDE] px-4 text-[#946C3D]"
                      >
                        Pediatric
                      </Badge>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="whitespace-nowrap p-4 text-[16px] font-[500] text-[#111928] dark:text-white">
                      <span className="font-semibold">Patient Sample5</span>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-gray-400">
                      23 Nov 2022
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      13
                    </Table.Cell>
                    <Table.Cell className="flex whitespace-nowrap p-4">
                      <Badge
                        color="success"
                        className="rounded-[5px] bg-[#F8ECDE] px-4 text-[#946C3D]"
                      >
                        Pediatric
                      </Badge>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SurveyTable: FC = function () {
  return (
    <div className="rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mb-4 flex items-center justify-between px-4 pt-4">
        <div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            Surveys
          </h3>
        </div>
        <div className="shrink-0">
          <a
            href="#"
            className="hover:[#111928] rounded-lg border p-2 text-sm font-medium text-[#111928] dark:text-[#111928] dark:hover:bg-gray-700"
          >
            View all
          </a>
        </div>
      </div>
      <hr className="mx-4 mb-4 h-px border-0 bg-gray-200 px-2 dark:bg-gray-700"></hr>
      <div className="flex flex-col">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table
                striped
                className="min-w-full divide-y divide-gray-200 dark:divide-gray-600"
              >
                <Table.Head className="bg-gray-50 text-[12px] font-[600] text-[#6B7280] dark:bg-gray-700">
                  <Table.HeadCell>SURVEY</Table.HeadCell>
                  <Table.HeadCell>PATIENT NAME</Table.HeadCell>
                  <Table.HeadCell>TYPE</Table.HeadCell>
                  <Table.HeadCell>GENDER</Table.HeadCell>
                </Table.Head>
                <Table.Body className="bg-white dark:bg-gray-800">
                  <Table.Row>
                    <Table.Cell className="flex items-center gap-1 whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      <SurveyIcon /> <span>Survey#2341</span>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-gray-400">
                      patient2
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      Adult
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      Male
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="flex items-center gap-1 whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      <SurveyIcon /> <span>Survey#2341</span>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-gray-400">
                      Bonnie Green
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      Paediatric
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      Female
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="flex items-center gap-1 whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      <SurveyIcon /> <span>Survey#2341</span>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-gray-400">
                      patient2
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      Adult
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      Male
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="flex items-center gap-1 whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      <SurveyIcon /> <span>Survey#2341</span>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-gray-400">
                      patient2
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      Adult
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      Male
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="flex items-center gap-1 whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      <SurveyIcon /> <span>Survey#2341</span>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-gray-400">
                      patient2
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      Adult
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap p-4 text-[14px] text-[#6B7280] dark:text-white">
                      Male
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
