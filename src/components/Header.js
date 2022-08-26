import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header bg-primary p-6">
      <div className="container mx-auto px-12 md:px-64">
        <a href="/" className="text-white text-2xl font-semibold texet-centr">
          TODO LIST APP
        </a>
      </div>
    </div>
  );
};

export default Header;
