import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarItem } from "../../static/mockdb";

import clsx from "clsx";

const Header = () => {
  let location = useLocation();

  return (
    <nav>
      <ul className="flex justify-center gap-2 my-2 cursor-pointer">
        {NavbarItem &&
          NavbarItem.map((item, index) => (
            <Link key={index} to={item.path} className="w-full">
              <li
                className={clsx(
                  "flex justify-center items-center p-2 rounded w-full",
                  location.pathname === item.path
                    ? "bg-blue-500 text-white"
                    : ""
                )}
              >
                {item.name}
              </li>
            </Link>
          ))}
      </ul>
    </nav>
  );
};

export default Header;
