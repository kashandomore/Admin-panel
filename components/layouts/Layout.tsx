import React, { ReactNode } from "react";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

type Props = {
  children?: ReactNode;
  title?: string;
  home?: boolean;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <div className="p-[73px] fixed inset-0 min-h-screen overflow-y-auto">
      <div className="max-w-[1240px] mx-auto h-full w-full flex items-start">
        <div>
          <Sidebar />
        </div>
        <main className="ml-[27px] w-full">
          <Nav />
          {children}
        </main>
      </div>
    </div>
  </>
);

export default Layout;
