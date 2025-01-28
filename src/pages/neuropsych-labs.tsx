/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from "react";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";

const NeuropsychLabsPage: FC = function () {
  const card_items = [
    {
      title: "PGX",
      description:
        "Pharmacogenomics analysis to identify genetic variations, enhancing treatment outcome through personalized medication strategy.",
    },
    {
      title: "MTHFR",
      description:
        "MTHFR analysis to provide genetic information that impacts neurotransmitters and mental health.",
    },
    {
      title: "Mosaic",
      description:
        "Specialized laboratory analysis to identify key biochemical causes of mental health symptoms.",
    },
  ];

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="bg-[#F9FAFB] ">
        <div className="mt-2 grid grid-cols-1 gap-4  pe-4 ps-4 pt-4 md:grid-cols-2 lg:grid-cols-3 ">
          {card_items.map((item, index) => (
            <div className="rounded-lg bg-[#D2E6DB] p-6" key={index}>
              <div className="flex h-full flex-col items-start justify-between gap-[20px]">
                <div>
                  <p className="text-[20px] font-[600] text-[#19213D]">
                    {item.title}
                  </p>
                  <h2 className="mt-4 text-[14px] font-[400] text-[#374151]">
                    {item.description}
                  </h2>
                </div>
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
export default NeuropsychLabsPage;
