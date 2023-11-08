import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-Jost  bg-blue-50 dark:bg-slate-900 text-black dark:text-white">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"Ilk Lodge"}</title>
      </Helmet>
      <Outlet />
    </div>
  );
};

export default Root;
