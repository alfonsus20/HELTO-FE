import React from "react";
import {
  CalendarIcon,
  NewspaperIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import HamburgerMenu from "react-hamburger-menu";
import { useSidebarContext } from "../../context/SidebarContext";
import classNames from "classnames";

const SidebarAdmin = () => {
  const { isOpened, toogleIsOpened } = useSidebarContext();

  return (
    <div
      className={classNames(
        "flex-none w-80 h-full bg-white z-10 max-h-screen overflow-y-auto fixed md:sticky top-0 transition-all ease-in duration-500",
        { "-left-full": !isOpened, "left-0": isOpened }
      )}
    >
      <div className="block md:hidden absolute right-4 top-4">
        <HamburgerMenu
          isOpen={isOpened}
          menuClicked={toogleIsOpened}
          width={18}
          height={15}
          strokeWidth={2}
          rotate={0}
          color="black"
          borderRadius={2}
          animationDuration={0.5}
        />
      </div>
      <div className="flex justify-center p-4">
        <img src={Logo} alt="logo" className="w-24 h-20" />
      </div>
      <div className="px-4">
        <Link
          to="/admin/tips-dan-trik"
          className="flex p-4 gap-x-4 items-center  rounded-lg hover:bg-brown-500 hover:text-white "
        >
          <div className="flex-none">
            <SearchIcon className="w-5 h-5" />
          </div>
          <div className="flex-auto">Tips &amp; Trik</div>
        </Link>
        <Link
          to="/admin/berita"
          className="flex p-4 gap-x-4 items-center  rounded-lg hover:bg-brown-500 hover:text-white "
        >
          <div className="flex-none">
            <NewspaperIcon className="w-5 h-5" />
          </div>
          <div className="flex-auto">Berita Terkini</div>
        </Link>
        <Link
          to="/admin/agenda"
          className="flex p-4 gap-x-4 items-center  rounded-lg hover:bg-brown-500 hover:text-white "
        >
          <div className="flex-none">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div className="flex-auto">Agenda</div>
        </Link>
        <Link
          to="/admin/media"
          className="flex p-4 gap-x-4 items-center  rounded-lg hover:bg-brown-500 hover:text-white "
        >
          <div className="flex-none">
            <VideoCameraIcon className="w-5 h-5" />
          </div>
          <div className="flex-auto">Media</div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarAdmin;
