import classNames from "classnames";
import type { FC, PropsWithChildren, ReactNode } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { SidebarProvider, useSidebarContext } from "../context/SidebarContext";

interface NavbarSidebarLayoutProps {
  isFooter?: boolean;
  isHeader?: ReactNode;
}

const NavbarSidebarLayout: FC<PropsWithChildren<NavbarSidebarLayoutProps>> =
  function ({ children, isFooter = true }) {
    return (
      <SidebarProvider>
        <div className="flex items-start">
          <Sidebar />

          <MainContent isFooter={isFooter} isHeader={<Navbar />}>
            {children}
          </MainContent>
        </div>
      </SidebarProvider>
    );
  };

const MainContent: FC<PropsWithChildren<NavbarSidebarLayoutProps>> = function ({
  children,
  isHeader,
  isFooter,
}) {
  const { isOpenOnSmallScreens: isSidebarOpen } = useSidebarContext();

  return (
    <main
      className={classNames(
        "overflow-y-auto relative w-full h-full bg-gray-50 dark:bg-gray-900",
        isSidebarOpen ? "lg:ml-16" : "lg:ml-64",
      )}
    >
      {isHeader && isHeader}
      <div className="content-wraper pb-4 pt-14">{children}</div>
    </main>
  );
};

export default NavbarSidebarLayout;
