import axios from "axios";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { IoThumbsUpOutline } from "react-icons/io5";

const Url = () => {
  const [copy, setCopy] = useState(false);
  const [longUrl, setLongUrl] = useState("");
  const [error, setError] = useState("");
  const [urlResponse, setUrlResponse] = useState("");
  // copy button click

  const handleCopy = () => {
    setCopy(true);

    // 2 sec পরে আবার false করে দিবে

    setTimeout(() => {
      setCopy(false);
    }, 2000);

    let copyText = document.querySelector(".myText");
    navigator.clipboard.writeText(copyText.innerText);

    console.log("text copied");
  };

  // short url button click
  const handleShort = (e) => {
    e.preventDefault();
    if (!longUrl) {
      setError("long url required");
      return;
    }

    setError("");

    axios
      .post("http://localhost:9000/url/getURL", { longUrl })
      .then((res) => {
        setUrlResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setLongUrl("");
  };

  console.log(urlResponse)
  return (
    <>
      <div className="bg-white dark:bg-black h-screen flex justify-center items-center">
        <div className="w-[400px] bg-green-200 border-green-600 shadow-lg p-5 rounded-[10px]">
          <h2
            className="mb-4 font-bold text-3xl font-noto text-gray-700 text-center p-5 rounded-[15px] 
             shadow-inner 
             bg-gray-200"
          >
            Maskur's Short URL Service
          </h2>
          <p className="text-[16px]  font-noto text-red-500">{error}</p>

          {/* Form */}

          <form
            onSubmit={handleShort}
            className="mt-4 flex justify-between w-full px-[15px] py-[9px] border-2 border-gray-300 rounded-[10px] bg-green-300 items-center"
          >
            <input
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Enter your long url"
              className="  shadow-gray-400 shadow-inner outline-0  p-2 rounded-[5px] w-[70%]"
              type="text"
            />
            <button
              type="submit"
              className=" shadow-inner shadow-gray-400  text-[14px] lg:text-[16px] text-gray-600 cursor-pointer hover:bg-purple-300 active:scale-[1.2] p-2 font-sm rounded-[5px]"
            >
              Short It
            </button>
          </form>
            {
              urlResponse&&
          <h2 className="text-gray-400 text-[12px] overflow-hidden lg:text-[14px] font-noto mt-[10px]">
            Long url : {urlResponse.longUrl}
          </h2>
            }

          {/* Short url with copy button */}
            {
              urlResponse&&
          <div className="flex justify-between items-center mt-2">
             
            <a
              href={urlResponse.shortUrl}
              target="_blank"
              className="text-[14px] lg:text-[16px] font-noto text-gray-400"
            >
              Short url: <span className="myText text-purple-500"> {urlResponse.shortUrl} </span>
            </a>
           

            {copy ? (
              <button className="text-blue-500 text-lg cursor-pointer">
                <IoThumbsUpOutline />
              </button>
            ) : (
              <button
                onClick={handleCopy}
                className="text-lg  active:scale-[1.2] cursor-pointer text-purple-400"
              >
                <FaCopy />
              </button>
            )}
          </div>
            }
        </div>
      </div>
    </>
  );
};

export default Url;
