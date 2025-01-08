/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from "react";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";

const QEEGPage: FC = function () {
  const card_items = [
    {
      title: "Data Acquisition",
      description:
        "Access EEG acquisition software for collecting raw brain map data.",
    },
    {
      title: "Run QBotz",
      description:
        "Execute QBotz analysis engine to statistically analyze raw EEG and convert into QEEG metrics.",
    },
    {
      title: "QBotz Completed",
      description:
        "Access available brain map records that have been completed by QBotz analysis.",
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
export default QEEGPage;
