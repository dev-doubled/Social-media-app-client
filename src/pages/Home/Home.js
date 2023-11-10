import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Header from "~/layouts/Header";
import LeftSideBar from "~/pages/Home/LeftSideBar";
import RightSideBar from "~/pages/Home/RightSideBar";
import Content from "~/pages/Home/Content";
import CreateStatus from "~/components/Status/CreateStatus";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  const [openCreateStatus, setOpenCreateStatus] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {openCreateStatus && (
        <CreateStatus setOpenCreateStatus={setOpenCreateStatus} />
      )}
      <div className={cx("home-wrapper")}>
        <Header />
        <div className={cx("home-container")}>
          <LeftSideBar />
          <Content setOpenCreateStatus={setOpenCreateStatus} />
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default Home;
