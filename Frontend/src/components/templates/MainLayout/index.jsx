import { useEffect } from "react";

const MainLayout = (props) => {
  const { className, children, title = "Shortway" } = props;
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <main
      className={`${className}  w-full h-screen flex justify-center items-center`}
    >
      {children}
    </main>
  );
};

export default MainLayout;
