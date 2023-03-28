import React from "react";
import "./Rightbar.scss";
import { useTranslation } from "react-i18next";
export default function Rightbar() {
  const { t } = useTranslation();
  return (
    <div className="rightbar">
      <div className="container">
        {/* suggestion */}
        <div className="item">
          <span>{t("rightbar.suggestion")}</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Duy Hieern</span>
            </div>
            <div className="button">
              <button>{t("rightbar.follow")}</button>
              <button>{t("rightbar.dismiss")}</button>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>Duy Hieern</span>
            </div>
            <div className="button">
              <button>follow</button>

              <button>dismiss</button>
            </div>
          </div>
        </div>
        {/* hoat dong */}
        <div className="item">
          <span>{t("rightbar.activities")}</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Duy Hieern</span> {t("rightbar.stt")}
              </p>
              <p>{t("rightbar.time")}</p>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Duy Hieern</span> thay doi anh dai dien
              </p>
            </div>
            <p>1p truoc</p>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p>
                <span>Duy Hieern</span> thay doi anh dai dien
              </p>
              <p>1p truoc</p>
            </div>
          </div>
        </div>

        {/* online friend */}
        <div className="item">
          <span>{t("rightbar.online")}</span>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online"></div>
              <span>Duy Hieern</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online"></div>
              <span>Duy Hieern</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online"></div>
              <span>Duy Hieern</span>
            </div>
          </div>
          <div className="user">
            <div className="userinfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online"></div>
              <span>Duy Hieern</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
