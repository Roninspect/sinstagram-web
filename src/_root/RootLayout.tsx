import { Outlet } from "react-router-dom";

import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import SideBar from "@/components/shared/SideBar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <SideBar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;