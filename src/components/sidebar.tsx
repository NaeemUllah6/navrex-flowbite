/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from "classnames";
import { Navbar, Sidebar } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { FaLifeRing } from "react-icons/fa";
import { MdHeadphones } from "react-icons/md";
import { Dashboard } from "../../public/images/dashboard/dashboard";
import { DXSurvey } from "../../public/images/dashboard/dx-survey";
import { Integration } from "../../public/images/dashboard/integration";
import { Labs } from "../../public/images/dashboard/labs";
import { NavrexLogo } from "../../public/images/dashboard/navrex-logo";
import { Patients } from "../../public/images/dashboard/patients";
import { QEEG } from "../../public/images/dashboard/qeeg";
import { Testing } from "../../public/images/dashboard/testing";
import { useSidebarContext } from "../context/SidebarContext";
import isSmallScreen from "../helpers/is-small-screen";
import { useLocation } from "react-router";
import { Database } from "../../public/images/dashboard/database.tsx";

const ExampleSidebar: FC = function () {
  const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } =
    useSidebarContext();
  const { pathname } = useLocation();
  const [currentPage, setCurrentPage] = useState("/");

  useEffect(() => {
    setCurrentPage(pathname);
  }, []);

  return (
    <div
      className={classNames("lg:!block sidebar-wraper", {
        // hidden: !isSidebarOpenOnSmallScreens,
      })}
    >
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        collapsed={isSidebarOpenOnSmallScreens && !isSmallScreen()}
        className="custom-sidevar bg-secondary-80 p-0"
      >
        <div className="flex h-full flex-col justify-between bg-secondary-80">
          <div>
            <img
              className="small-logo hidden"
              src="/images/logo-small.svg"
              alt="logo"
            />
            <div className="hidden lg:block">
              <Navbar.Brand
                href="/"
                className="my-4 flex items-center justify-center"
              >
                <NavrexLogo />
              </Navbar.Brand>
            </div>
            <Sidebar.Items className="px-2">
              <Sidebar.ItemGroup>
                <Sidebar.Item
                  href="/"
                  icon={Dashboard}
                  className={`justify-start whitespace-normal text-[#E1EFFE] hover:bg-primary-base hover:text-white ${
                    "/" === currentPage
                      ? "bg-primary-base text-white hover:bg-primary-base hover:text-white"
                      : ""
                  }`}
                >
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item
                  href="/patients"
                  icon={Patients}
                  className={`justify-start whitespace-normal text-[#E1EFFE] hover:bg-primary-base hover:text-white ${
                    "/patients" === currentPage
                      ? "bg-primary-base text-white hover:bg-primary-base hover:text-white"
                      : ""
                  }`}
                >
                  Patients
                </Sidebar.Item>
                <Sidebar.Item
                  href="/dx-survey"
                  icon={DXSurvey}
                  className={`justify-start whitespace-normal text-[#E1EFFE] hover:bg-primary-base hover:text-white ${
                    "/dx-survey" === currentPage
                      ? "bg-primary-base text-white hover:bg-primary-base hover:text-white"
                      : ""
                  }`}
                >
                  Dx Survey
                </Sidebar.Item>
                <Sidebar.Item
                  href="/testings"
                  icon={Testing}
                  className={`justify-start whitespace-normal text-[#E1EFFE] hover:bg-primary-base hover:text-white ${
                    "/testings" === currentPage
                      ? "bg-primary-base text-white hover:bg-primary-base hover:text-white"
                      : ""
                  }`}
                >
                  Neuropsychological Testing
                </Sidebar.Item>
                <Sidebar.Item
                  href="/qeeg"
                  icon={QEEG}
                  className={`justify-start whitespace-normal text-[#E1EFFE] hover:bg-primary-base hover:text-white ${
                    "/qeeg" === currentPage
                      ? "bg-primary-base text-white hover:bg-primary-base hover:text-white"
                      : ""
                  }`}
                >
                  QEEG
                </Sidebar.Item>
                <Sidebar.Item
                  href="/neuropsych-labs"
                  icon={Labs}
                  className={`justify-start whitespace-normal text-[#E1EFFE] hover:bg-primary-base hover:text-white ${
                    "/neuropsych-labs" === currentPage
                      ? "bg-primary-base text-white hover:bg-primary-base hover:text-white"
                      : ""
                  }`}
                >
                  Neuropsych Labs
                </Sidebar.Item>
                <Sidebar.Item
                  href="/data-integration"
                  icon={Integration}
                  className={`justify-start whitespace-normal text-[#E1EFFE] hover:bg-primary-base hover:text-white ${
                    "/data-integration" === currentPage
                      ? "bg-primary-base text-white hover:bg-primary-base hover:text-white"
                      : ""
                  }`}
                >
                  Data Integration
                </Sidebar.Item>
                <Sidebar.Item
                  href="/database-analytics"
                  icon={Database}
                  className={`justify-start whitespace-normal text-[#E1EFFE] hover:bg-primary-base hover:text-white ${
                    "/database-analytics" === currentPage
                      ? "bg-primary-base text-white hover:bg-primary-base hover:text-white"
                      : ""
                  }`}
                >
                  Database Analytics
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
          <BottomMenu />
        </div>
      </Sidebar>
    </div>
  );
};

const BottomMenu: FC = function () {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
        <span className="sr-only">Tweaks</span>
        <MdHeadphones className="text-2xl text-[#E1EFFE] hover:text-[#E1EFFE] dark:text-[#E1EFFE] dark:hover:text-white " />
      </button>
      <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
        <span className="sr-only">Tweaks</span>
        <FaLifeRing className="text-2xl text-[#E1EFFE] hover:text-[#E1EFFE] dark:text-[#E1EFFE] dark:hover:text-white " />
      </button>
    </div>
  );
};

export default ExampleSidebar;
