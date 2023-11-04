import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-Jost h-[100vh] bg-blue-50 dark:bg-slate-900 text-black dark:text-white">
      <Outlet />
    </div>
  );
};

export default Root;
