const ContentLayout = ({ children }) => {
  return (
    <main className="flex flex-col min-w-screen min-h-screen justify-center items-center">
      {children}
    </main>
  );
};

export default ContentLayout;
