/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from "react";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";

const DataIntegrationPage: FC = function () {
  const card_items = [
    {
      title: "View Records/Data Preparation",
      description:
        "Provides access to stored records and data pre-processing for AI/ML training.",
    },
    {
      title: "Model Creation and Management",
      description: "Build and train AI models for prediction-inference.",
    },
    {
      title: "Digital Twin Brain (DTB)",
      description:
        "Select from a variety of dynamic reporting options to display findings.",
    },
  ];

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="bg-[#F9FAFB] ">
        <div className="mt-2 grid grid-cols-1 gap-4  pe-4 ps-4 pt-4 md:grid-cols-2 lg:grid-cols-3 ">
          {card_items.map((item, index) => (
            <div className="rounded-lg bg-[#D2E6DB] p-6" key={index}>
              <div className="flex flex-col items-start gap-[20px]">
                <p className="text-[20px] font-[600] text-[#19213D]">
                  {item.title}
                </p>
                <h2 className="text-[14px] font-[400] text-[#374151]">
                  {item.description}
                </h2>
                <span className="text-[16px] font-[600] text-[#DEA25C]">
                  Learn more
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};
export default DataIntegrationPage;
