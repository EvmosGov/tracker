import Head from "./head";
import HeaderNav from "./header-nav";
import Side from "../../../features/common/components/homesidebar";
import Footer from "./footer";
import type { ReactElement } from "react";

type Props = {
  children: ReactElement;
  title?: string;
  metaDescription?: string;
};

export function Layout(props: Props) {
  return (
    <div className="min-h-screen dark:bg-zinc-900 dark:text-white">
      <Head title={props.title} metaDescription={props.metaDescription} />
      <HeaderNav />
      <div className="flex overflow-hidden">
      <Side />
      <div className="relative flex flex-col flex-1 overflow-x-hidden">
      <main className="py-6">
        <div className="container mx-auto p-4">{props.children}</div>
      </main>
      
      
      <Footer />
    </div></div></div>
  );
}

export default Layout;
