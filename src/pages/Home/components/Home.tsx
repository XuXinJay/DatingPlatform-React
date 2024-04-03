import { useState, useEffect } from "react";
import "../style/index.css";
import useFilterActivities from "../hooks/useFilterActivities";
import SwiperComponent from "./swiper";

import taipei101 from "@/assets/image/taipei-101.jpg";
import newTaipei from "@/assets/image/new-taipei.jpg";
import taichung from "@/assets/image/taichung.jpg";
import tainan from "@/assets/image/台南.jpg";
import taoyuan from "@/assets/image/桃園.jpg";
import kaohsiung from "@/assets/image/高雄.jpg";

import slide1 from "@/assets/image/03.jpg";
import slide2 from "@/assets/image/02.jpg";

function Main() {
  const { filterByLocation, filteredActivities, handleFilterClick } =
    useFilterActivities();
  const [activities, setActivities] = useState<Activity[]>([]);

  interface Activity {
    activityId: number;
    activityName: string;
    activityPlace: string;
    activityPartyTime: string;
    name: string;
    activityImage: string;
    movie: number;
    sports: number;
    boardGame: number;
    dineTogether: number;
  }

  // 若後端有資料可以從這邊拿
  useEffect(() => {
    setActivities([
      {
        activityId: 1,
        activityName: "讀書會",
        activityPlace: "台北",
        activityPartyTime: "2024-04-15",
        name: "Jett",
        activityImage: slide1,
        movie: 0,
        sports: 0,
        boardGame: 0,
        dineTogether: 0,
      },
      {
        activityId: 2,
        activityName: "POE大賽",
        activityPlace: "高雄",
        activityPartyTime: "2024-04-15",
        name: "Oscar",
        activityImage: slide2,
        movie: 1,
        sports: 0,
        boardGame: 0,
        dineTogether: 0,
      },
    ]);
  }, []);

  const activitiesToShow = filterByLocation ? filteredActivities : activities;

  // 搜尋功能
  const handleClick = (location: string) => {
    handleFilterClick(location, activities);
  };

  return (
    <main className="main_pages_j">
      <SwiperComponent />
      <h1 className="hottitle">熱門地點</h1>
      <section className="hotbox">
        <button className="hotplace" onClick={() => handleClick("台北")}>
          <img className="hotimg" src={taipei101} alt="" />
          <div className="hottext">台北</div>
        </button>
        <button className="hotplace" onClick={() => handleClick("新北")}>
          <img className="hotimg" src={newTaipei} alt="" />
          <div className="hottext">新北</div>
        </button>
        <button className="hotplace" onClick={() => handleClick("桃園")}>
          <img className="hotimg" src={taoyuan} alt="" />
          <div className="hottext">桃園</div>
        </button>
        <button className="hotplace" onClick={() => handleClick("台中")}>
          <img className="hotimg" src={taichung} alt="" />
          <div className="hottext">台中</div>
        </button>
        <button className="hotplace" onClick={() => handleClick("台南")}>
          <img className="hotimg" src={tainan} alt="" />
          <div className="hottext">台南</div>
        </button>
        <button className="hotplace" onClick={() => handleClick("高雄")}>
          <img className="hotimg" src={kaohsiung} alt="" />
          <div className="hottext">高雄</div>
        </button>
      </section>

      <section className="tabs_box">
        <div className="main_tabs">
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab0"
            defaultChecked={true}
          />
          <label htmlFor="tab0" className="tabs_label">
            全部
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activitiesToShow.map((activity) => {
                  return (
                    <a
                      className="grid-item"
                      href={`/event/${activity.activityId}`}
                      key={activity.activityId}
                    >
                      <img
                        className="grid-img"
                        src={activity.activityImage}
                        alt=""
                      />
                      <div className="grid-text">
                        <h6>主題:{activity.activityName}</h6>
                        <span className="grid_text_txt">
                          地點:{activity.activityPlace}
                        </span>
                        <span className="grid_text_txt">
                          時間:{activity.activityPartyTime}
                        </span>
                        <span className="grid_text_txt">
                          創建人:{activity.name}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab1"
          />
          <label htmlFor="tab1" className="tabs_label">
            電影
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activitiesToShow.map((activity) => {
                  if (activity.movie === 1) {
                    return (
                      <a
                        className="grid-item"
                        href={`/event/${activity.activityId}`}
                        key={activity.activityId}
                      >
                        <img
                          className="grid-img"
                          src={activity.activityImage}
                          alt=""
                        />
                        <div className="grid-text">
                          <h6>主題:{activity.activityName}</h6>
                          <span className="grid_text_txt">
                            地點:{activity.activityPlace}
                          </span>
                          <span className="grid_text_txt">
                            時間:{activity.activityPartyTime}
                          </span>
                          <span className="grid_text_txt">
                            會員:{activity.name}
                          </span>
                        </div>
                      </a>
                    );
                  } else {
                    // 不是電影主題的活動不顯示
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab2"
          />
          <label htmlFor="tab2" className="tabs_label">
            運動
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activitiesToShow.map((activity) => {
                  if (activity.sports === 1) {
                    return (
                      <a
                        className="grid-item"
                        href={`/event/${activity.activityId}`}
                        key={activity.activityId}
                      >
                        <img
                          className="grid-img"
                          src={activity.activityImage}
                          alt=""
                        />
                        <div className="grid-text">
                          <h6>主題:{activity.activityName}</h6>
                          <span className="grid_text_txt">
                            地點:{activity.activityPlace}
                          </span>
                          <span className="grid_text_txt">
                            時間:{activity.activityPartyTime}
                          </span>
                          <span className="grid_text_txt">
                            創建人:{activity.name}
                          </span>
                        </div>
                      </a>
                    );
                  } else {
                    // 不是電影主題的活動不顯示
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab3"
          />
          <label htmlFor="tab3" className="tabs_label">
            桌遊
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activitiesToShow.map((activity) => {
                  if (activity.boardGame === 1) {
                    return (
                      <a
                        className="grid-item"
                        href={`/event/${activity.activityId}`}
                        key={activity.activityId}
                      >
                        <img
                          className="grid-img"
                          src={activity.activityImage}
                          alt=""
                        />
                        <div className="grid-text">
                          <h6>主題:{activity.activityName}</h6>
                          <span className="grid_text_txt">
                            地點:{activity.activityPlace}
                          </span>
                          <span className="grid_text_txt">
                            時間:{activity.activityPartyTime}
                          </span>
                          <span className="grid_text_txt">
                            會員:{activity.name}
                          </span>
                        </div>
                      </a>
                    );
                  } else {
                    // 不是電影主題的活動不顯示
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab4"
          />
          <label htmlFor="tab4" className="tabs_label">
            聚餐
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activitiesToShow.map((activity) => {
                  if (activity.dineTogether === 1) {
                    return (
                      <a
                        className="grid-item"
                        href={`/event/${activity.activityId}`}
                        key={activity.activityId}
                      >
                        <img
                          className="grid-img"
                          src={activity.activityImage}
                          alt=""
                        />
                        <div className="grid-text">
                          <h6>主題:{activity.activityName}</h6>
                          <span className="grid_text_txt">
                            地點:{activity.activityPlace}
                          </span>
                          <span className="grid_text_txt">
                            時間:{activity.activityPartyTime}
                          </span>
                          <span className="grid_text_txt">
                            會員:{activity.name}
                          </span>
                        </div>
                      </a>
                    );
                  } else {
                    // 不是電影主題的活動不顯示
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
          <input
            type="radio"
            className="tabs_radio"
            name="tabs-example"
            id="tab5"
          />
          <label htmlFor="tab5" className="tabs_label">
            其他
          </label>
          <div className="tabs_content">
            <div className="grid-box">
              <div className="grid-container">
                {activities.map((activity) => {
                  if (
                    activity.movie === 0 &&
                    activity.sports === 0 &&
                    activity.boardGame === 0 &&
                    activity.dineTogether === 0
                  ) {
                    return (
                      <a
                        className="grid-item"
                        href={`/event/${activity.activityId}`}
                        key={activity.activityId}
                      >
                        <img
                          className="grid-img"
                          src={activity.activityImage}
                          alt=""
                        />
                        <div className="grid-text">
                          <h6>主題:{activity.activityName}</h6>
                          <span className="grid_text_txt">
                            地點:{activity.activityPlace}
                          </span>
                          <span className="grid_text_txt">
                            時間:{activity.activityPartyTime}
                          </span>
                          <span className="grid_text_txt">
                            會員:{activity.name}
                          </span>
                        </div>
                      </a>
                    );
                  } else {
                    // 不是電影主題的活動不顯示
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
