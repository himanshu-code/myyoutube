import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";
import { cacheResults } from "../Utils/SearchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const resp = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await resp.json();
    console.log(data);
    setSuggestions(data[1]);

    dispatch(cacheResults({ [searchQuery]: data[1] }));
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 mb-2 shadow-lg">
      <div className="flex col-span-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        ></img>
        <img
          className="h-10 mx-2"
          alt="logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        ></img>
      </div>
      <div className="col-span-10  px-10 ">
        <div>
          <input
            className="w-10/12 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          ></input>
          <button className="border border-gray-400 p-2 bg-gray-100 rounded-r-full ">
            🔍
          </button>
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute w-6/12 border-gray-300 border-solid border-2 px-5 py-2 bg-white rounded-lg">
              <ul>
                {suggestions.map((item) => {
                  return (
                    <li
                      className="py-2 hover:bg-gray-100 hover:cursor-pointer"
                      key={item}
                    >
                      🔍{item}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-2 flex justify-end">
        <img
          className="h-10"
          alt="userIcon"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Head;
