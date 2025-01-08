import down_icon from "../../public/images/patients-images/down_icon.svg";
import Card_icon from "../../public/images/patients-images/survay-card-1.svg";
import card2 from "../../public/images/patients-images/survay-card-2.svg";
import card3 from "../../public/images/patients-images/survay-card-3.svg";
import up_icon from "../../public/images/patients-images/up_icon.svg";
import Myinput from "./patient-components/input";

import type { FC } from "react";
import { CiFilter } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { IoChevronDownSharp } from "react-icons/io5";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";
import SurveyTableData from "./survey-components/survey-table-data";

const PatientsPage: FC = function () {
  const card_items = [
    {
      total_patients: "Pending Surveys",
      up_rate: "vs last 24h ",
      No_of_patients: "325",
      card_icon: Card_icon,
      Up_icon: up_icon,
      percent: "8.5%",
    },
    {
      total_patients: "Pending Surveys",
      up_rate: "vs last 24h ",
      No_of_patients: "25",
      card_icon: card2,
      Up_icon: up_icon,
      percent: "8.8%",
    },
    {
      total_patients: "Pending Surveys",
      up_rate: "vs last 24h ",
      No_of_patients: "300",
      card_icon: card3,
      Up_icon: down_icon,
      percent: "2.5%",
    },
  ];

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="bg-[#F9FAFB] ">
        <div className="mt-2 grid grid-cols-1 gap-2  pe-4 ps-4 pt-4 md:grid-cols-2 lg:grid-cols-3 ">
          {card_items.map((item, index) => (
            <div className="rounded-lg bg-[#D2E6DB] p-6" key={index}>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[14px] font-[400] text-[#374151]">
                    {item.total_patients}
                  </p>
                  <h2 className="text-[24px] font-[700] text-[#111928]">
                    {item.No_of_patients}
                  </h2>
                  <span className="flex items-center gap-2 text-[14px] font-[600] text-[#0E9F6E]">
                    <span>
                      <img src={item.Up_icon} alt="up-icon" />
                    </span>
                    <span>{item.percent}</span>
                    <span className="text-[16px] font-[400] text-[#6B7280]">
                      {item.up_rate}
                    </span>
                  </span>
                </div>
                <div>
                  <img width="56px" height="56px" src={item.card_icon} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="rounded-2xl  shadow-md">
            <div className="block items-center justify-between bg-white p-4">
              <div className=" w-full border-b-[1px] border-[#E5E7EB] pb-4">
                <div className="items-center justify-between sm:flex">
                  <div className="flex w-full flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-[16px] font-[600]">DX Surveys</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <Myinput
                          className="h-[37px] rounded-[8px] border border-[#D1D5DB] ps-[16px] font-[400] placeholder:text-[14px]"
                          input_type="text"
                          input_placeholder="Search for Survey"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className={`flex h-[37px] items-center gap-2 rounded-[8px] border  border-[#D1D5DB] px-3 py-[10px] text-[14px] font-[500] text-[#111928]`}
                        >
                          <CiFilter />
                          All
                          <IoChevronDownSharp />
                        </button>
                        <button
                          className={`flex h-[37px] items-center gap-2 rounded-[8px] border  border-[#D1D5DB] bg-[#DEA25C] px-3 py-[10px] text-[14px] font-[500] text-[#FFF]`}
                        >
                          <FiPlus />
                          Start New Survay
                        </button>

                        <div
                          id="default-modal"
                          aria-hidden="true"
                          className="fixed inset-x-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
                        >
                          <div className="relative max-h-full w-full max-w-2xl p-4">
                            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                              <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                  Terms of Service
                                </h3>
                                <button
                                  type="button"
                                  className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-modal-hide="default-modal"
                                >
                                  <svg
                                    className="h-3 w-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                  </svg>
                                  <span className="sr-only">Close modal</span>
                                </button>
                              </div>
                              {/* <!-- Modal body --> */}
                              <div className="space-y-4 p-4 md:p-5">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                  With less than a month to go before the
                                  European Union enacts new consumer privacy
                                  laws for its citizens, companies around the
                                  world are updating their terms of service
                                  agreements to comply.
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                  The European Union’s General Data Protection
                                  Regulation (G.D.P.R.) goes into effect on May
                                  25 and is meant to ensure a common set of data
                                  rights in the European Union. It requires
                                  organizations to notify users as soon as
                                  possible of high-risk data breaches that could
                                  personally affect them.
                                </p>
                              </div>
                              {/* <!-- Modal footer --> */}
                              <div className="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
                                <button
                                  data-modal-hide="default-modal"
                                  type="button"
                                  className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                  I accept
                                </button>
                                <button
                                  data-modal-hide="default-modal"
                                  type="button"
                                  className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                                >
                                  Decline
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white">
              <SurveyTableData />
            </div>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};
export default PatientsPage;
