/* eslint-disable jsx-a11y/anchor-is-valid */
import button_close from "../../public/images/patients-images/Button close X.svg";
import card2 from "../../public/images/patients-images/card2.png";
import card3 from "../../public/images/patients-images/card3.svg";
import Card_icon from "../../public/images/patients-images/card_img.svg";
import down_icon from "../../public/images/patients-images/down_icon.svg";
import up_icon from "../../public/images/patients-images/up_icon.svg";
import Mybutton from "./patient-components/button";
import Myinput from "./patient-components/input";
import DataTable from "./patient-components/patient-table.-data";

import type { FC } from "react";
import { useState } from "react";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";
import { CiFilter } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

const PatientsPage: FC = function () {
  const card_items = [
    {
      total_patients: "Pending",
      up_rate: "vs last 24h ",
      No_of_patients: "325",
      card_icon: Card_icon,
      Up_icon: up_icon,
      percent: "8.5%",
    },
    {
      total_patients: "Pending",
      up_rate: "7 Days ",
      No_of_patients: "25",
      card_icon: card2,
      Up_icon: up_icon,
      percent: "8.8%",
    },
    {
      total_patients: "Pending",
      up_rate: "+7 Days ",
      No_of_patients: "300",
      card_icon: card3,
      Up_icon: down_icon,
      percent: "2.5%",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="bg-[#F9FAFB] ">
        <div className="mt-2 grid grid-cols-1 gap-2  pe-4 ps-4 pt-4 md:grid-cols-2 lg:grid-cols-3 ">
          {card_items.map((item, index) => (
            <div className="rounded-lg bg-[#D2E6DB] p-6" key={index}>
              <div className="flex items-end justify-between">
                <div>
                  <button className="text-[14px] font-[400] text-[#374151]">
                    {item.total_patients}
                  </button>
                  <h2 className="text-[24px] font-[700] text-[#111928]">
                    {item.No_of_patients}
                  </h2>
                  <button className="flex items-center gap-2 text-[14px] font-[600] text-[#0E9F6E]">
                    <span>
                      <img src={item.Up_icon} alt="up-icon" />
                    </span>
                    <span>{item.percent}</span>
                    <span className="text-[16px] font-[400] text-[#6B7280]">
                      {item.up_rate}
                    </span>
                  </button>
                </div>
                <div>
                  <button>
                    <img
                      width="56px"
                      height="56px"
                      src={item.card_icon}
                      alt=""
                    />
                  </button>
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
                      <p className="text-[16px] font-[600]">Patients</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <Myinput
                          className="h-[37px] rounded-[8px] border border-[#D1D5DB] ps-[16px] font-[400] placeholder:text-[14px]"
                          input_type="text"
                          input_placeholder="Search for Products"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className={`flex h-[37px] items-center gap-2 rounded-[8px] border  border-[#D1D5DB] px-3 py-[10px] text-[14px] font-[500] text-[#111928]`}
                        >
                          <CiFilter />
                          Filter Option
                          <IoChevronDownSharp />
                        </button>
                        <button
                          onClick={toggleModal}
                          className={`flex h-[37px] items-center gap-2 rounded-[8px] border  border-[#D1D5DB] bg-[#DEA25C] px-3 py-[10px] text-[14px] font-[500] text-[#FFF]`}
                        >
                          <FiPlus />
                          New Patient
                        </button>

                        {isOpen && (
                          <div
                            className="fixed inset-0 z-10"
                            aria-labelledby="modal-title"
                            role="dialog"
                            aria-modal="true"
                          >
                            {/* Background Backdrop */}
                            <div
                              className="fixed inset-0 bg-gray-500/75 transition-opacity"
                              aria-hidden="true"
                              onClick={toggleModal}
                            ></div>

                            <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
                              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <div className="relative overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                  <div className="rounded-[12px] p-6 shadow-md">
                                    <form action="">
                                      <div className="flex flex-wrap items-center justify-between gap-2">
                                        <div>
                                          <h2 className="text-[18px] font-[600]">
                                            Create New Patient
                                          </h2>
                                          <p className="pt-1 text-[14px] font-[400] text-[#475467]">
                                            Enter details to create new patient.
                                          </p>
                                        </div>
                                        <div>
                                          <button
                                            type="button"
                                            onClick={toggleModal}
                                            className=""
                                          >
                                            <img src={button_close} alt="" />
                                          </button>
                                        </div>
                                      </div>
                                      <div className="mt-[20px] grid grid-cols-1 gap-[20px] md:grid-cols-1 lg:grid-cols-2">
                                        <div className="flex flex-col gap-2">
                                          <label
                                            className="text-[14px] font-[500] text-[#111928]"
                                            htmlFor="namefirst"
                                          >
                                            First Name
                                          </label>
                                          <input
                                            className="rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3"
                                            id="namefirst"
                                            type="text"
                                            placeholder="Enter First Name"
                                          />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                          <label
                                            className="text-[14px] font-[500] text-[#111928]"
                                            htmlFor="namefirst"
                                          >
                                            First Name
                                          </label>
                                          <input
                                            className="rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3"
                                            id="namefirst"
                                            type="text"
                                            placeholder="Enter Last Name"
                                          />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                          <label
                                            className="text-[14px] font-[500] text-[#111928]"
                                            htmlFor="namefirst"
                                          >
                                            Age
                                          </label>
                                          <input
                                            className="rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3"
                                            id="namefirst"
                                            type="text"
                                            placeholder="Enter Age"
                                          />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                          <label
                                            className="text-[14px] font-[500] text-[#111928]"
                                            htmlFor="namefirst"
                                          >
                                            Gender
                                          </label>
                                          <select className="rounded-[8px]  border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-[#6B7280]">
                                            <option value="">Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                              Female
                                            </option>
                                            <option value="other">Other</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="mt-[20px] grid grid-cols-1">
                                        <div className="flex flex-col gap-2">
                                          <label
                                            className="text-[14px] font-[500] text-[#111928]"
                                            htmlFor="namefirst"
                                          >
                                            Classification
                                          </label>
                                          <select className="rounded-[8px] border  border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-[#6B7280] placeholder:text-[#6B7280]">
                                            <option value="">
                                              Select Gender
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                              Female
                                            </option>
                                            <option value="other">Other</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="mt-[20px] grid grid-cols-1">
                                        <div className="flex flex-col gap-2">
                                          <label
                                            className="text-[14px] font-[500] text-[#111928]"
                                            htmlFor="namefirst"
                                          >
                                            Initials
                                          </label>
                                          <input
                                            className="rounded-[8px] border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3"
                                            id="namefirst"
                                            type="text"
                                            placeholder="Enter"
                                          />
                                        </div>
                                      </div>
                                      <div className="mt-8 flex items-center justify-end gap-3">
                                        <button
                                          type="button"
                                          onClick={toggleModal}
                                          className="rounded-lg border px-[30px] py-[10px] text-[14px] font-[600]"
                                        >
                                          Cancel
                                        </button>
                                        <Mybutton
                                          className="rounded-lg bg-[#DEA25C] px-[30px] py-[10px] text-[14px] font-[600] text-white"
                                          button_text="Save"
                                        />
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <DataTable />
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};
export default PatientsPage;
