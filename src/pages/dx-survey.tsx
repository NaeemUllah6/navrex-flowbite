/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from "react";
import NavbarSidebarLayout from "../layouts/navbar-sidebar";

const DXSurvey: FC = function () {
  return (
    <NavbarSidebarLayout isFooter={false}>
      dx-survey Component
    </NavbarSidebarLayout>
  );
};

export default DXSurvey;
