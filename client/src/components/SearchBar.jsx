import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
//import { useSelector } from "react-redux";
const API_BASE_URL = import.meta.env.MODE === 'production'
  ? import.meta.env.VITE_API_BASE_URL // Use production URL
  : import.meta.env.VITE_API_BASE_URL_DEV;


const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchStatus, setSearchStatus] = useState("");

  //const user = useSelector((state) => state.user.userData);

  //const username = user.userName;

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const notes = await axios.get(API_BASE_URL+"/notes/getFiles", {
        params: {
          title: searchQuery,
        },
      });

      if (notes.data.data.length > 0) {
        setSearchResults(notes.data.data);
        setSearchStatus("Found");
      } else {
        setSearchResults([]);
        setSearchStatus("Not-Found");
      }
    } catch (error) {
      console.log("Error Fetching Notes: ", error);
    }
  }

  const showPDF = async (files) => {
    window.open(`http://localhost:6969/files/${files}`, "_blank", "noreferrer");
  };

  return (
    <div className="h-heightWithoutNavbar flex flex-col items-center justify-start p-4 bg-[#D8D2C2]">
      <div className="flex w-full items-center justify-center">
        <form className="w-full max-w-[700px] rounded-xl border border-black bg-[#4A4947] p-4" onSubmit={handleSearch}>
          <div className=" flex items-center justify-between">
            {/* serach logo  */}
            <FaSearch className="text-2xl text-white" />
            {/* input  */}
            <input
              type="search"
              placeholder="Seach for Notes"
              className="ml-3 w-full bg-[#4A4947] text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className=" bottom-2.5 end-2.5 rounded-lg bg-[#FAF7F0] px-4 py-2 text-sm font-medium hover: focus:outline-none focus:ring-4 text-black"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="mt-5 grid w-full grid-cols-1 gap-5 border sm:grid-cols-2 lg:grid-cols-4">
        {searchStatus === "Found" && searchResults.length > 0 && searchResults.map((notes) => (
          <div
            key={notes._id}
            className="flex w-full max-w-[300px] flex-wrap-reverse items-center justify-between rounded-xl bg-[#374151] px-3 py-2 text-white shadow-lg"
          >
            <p className="mt-2 text-sm">
              <span className="font-bold">File name: </span>
              <span >{notes.fileName} </span>
            </p>

            <button onClick={() => showPDF(notes.files)}>
              Show PDF
            </button>

          </div>

        ))}

        {searchStatus === "Not-Found" && (
          <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
            No Notes Found
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
