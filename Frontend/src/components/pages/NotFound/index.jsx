import MainLayout from "@/components/templates/MainLayout";
const NotFound = () => {
  return (
    <MainLayout className="bg-[#1A2238] flex-col" title="Page Not Found">
      <div className="flex justify-center items-center">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
      </div>
      <button className="mt-5">
        <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <a href="/">Go Home</a>
          </span>
        </div>
      </button>
    </MainLayout>
  );
};

export default NotFound;
