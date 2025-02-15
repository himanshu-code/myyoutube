import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  } else {
    return (
      <div className="w-48 p-4 shadow-lg">
        <div className="border-b pb-2">
          <ul>
            <li>
              <Link to="/">🏠 Home</Link>
            </li>
            <li>🎥 Shorts</li>
            <li>💰 Subscriptions</li>
          </ul>
        </div>
        <div className="border-b p-2">
          <h2>Explore </h2>
          <ul>
            <li>🎧 Music</li>
            <li>🏆 Sports</li>
            <li>🎬 Movies</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Sidebar;
