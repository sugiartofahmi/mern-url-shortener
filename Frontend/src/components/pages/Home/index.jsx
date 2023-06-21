import FormField from "@/components/molecules/FormField";
import MainLayout from "@/components/templates/MainLayout";
import axios from "axios";
import { Suspense, lazy, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Loading = lazy(() => import("@/components/atoms/Loading"));
const Home = () => {
  const url = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [shortener, setShortener] = useState({
    originalUrl: "",
    requestUrl: "",
  });
  const [result, setResult] = useState({
    requestUrl: "",
    status: "",
  });
  const handleChange = (e) => {
    setShortener({ ...shortener, [e.target.name]: e.target.value });
  };
  const spaceRegex = /\s/gi;

  const isSpace = (str) =>
    spaceRegex.test(str) ? str.replace(spaceRegex, "-") : str;

  const handleSubmit = async () => {
    let { originalUrl, requestUrl } = shortener;
    const config = {
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
    };
    requestUrl = isSpace(requestUrl);

    try {
      const res = await axios.post(
        url,
        {
          originalUrl,
          requestUrl,
        },
        config
      );
      setResult({
        status: res?.data?.status,
        requestUrl: `${import.meta.env.VITE_API_URL}${
          res?.data?.result?.requestUrl
        }`,
      });
      console.log(res);
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(error?.response?.data?.message);
    }
  };
  const regex = new RegExp(
    "([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
  );
  const validate = regex.test(shortener.originalUrl);
  return (
    <MainLayout className="flex-col bg-[#F1F3F5] ">
      <div className="flex flex-col  justify-center items-center md:w-1/2 w-4/5 text-center gap-y-5">
        <h1 className="text-black text-5xl font-bold">ShortWay</h1>
        <p className="text-[#4B5563]">
          Welcome to ShortWay - the fastest and easiest way to shorten your long
          and complicated URLs into short, shareable links.
        </p>
        <div className="flex md:flex-row flex-col  md:gap-3 gap-4">
          <FormField
            value={shortener.originalUrl}
            name="originalUrl"
            placeholder="Paste url here"
            title="Destination"
            onChange={handleChange}
          />
          <FormField
            value={shortener.requestUrl}
            name="requestUrl"
            placeholder="Insert request "
            title="Request URL (optional)"
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={!validate}
          className="text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-slate-500 bg-gradient-to-r from-green-400 disabled:from-slate-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:outline-none font-bold rounded-lg md:text-base text-sm px-5 py-2 text-center "
        >
          Submit
        </button>
        <Suspense fallback={<Loading />}>
          <div>
            {result?.requestUrl && (
              <div className="flex flex-row border-2 border-gray-900 rounded-md w-full">
                <h1 className="max-w-[40vh] truncate px-2 py-2 ">
                  {result.requestUrl}
                </h1>
                <CopyToClipboard
                  onCopy={() => {
                    toast.success("Copied to clipboard", {
                      position: toast.POSITION.TOP_CENTER,
                    });
                    setShortener({
                      originalUrl: "",
                      requestUrl: "",
                    });
                  }}
                  text={result.requestUrl}
                >
                  <button className="inline-flex items-center justify-center px-2 py-2 text-black transition-all duration-200   hover:bg-black hover:text-white focus:bg-black focus:text-white">
                    Copy
                  </button>
                </CopyToClipboard>
              </div>
            )}
          </div>
        </Suspense>

        <p className="text-[#4B5563]">
          The process of shortening a URL only takes a few seconds.
        </p>
        <ToastContainer />
      </div>
    </MainLayout>
  );
};

export default Home;
