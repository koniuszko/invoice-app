import styled from "styled-components";
import logo from "../assets/logo.svg";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import user from "../assets/image-avatar.jpg";

import {useStore} from "../context/context";

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  background-color: #1e2139;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 99;

  .bg {
    position: relative;
    width: 72px;
    height: 72px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    background-color: #7c5dfa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: auto;
    cursor: pointer;
  }

  .bg::after {
    position: absolute;
    top: 50%;
    content: "";
    display: block;
    width: 72px;
    height: 72px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #9277ff;
  }

  img {
    z-index: 1;
  }

  .switcher {
    margin-right: 24px;
    width: 20px;
    height: 20px;
    background-size: contain;
  }

  .settings {
    padding: 20px 24px;
    border-left: 1px solid #494e6e;
  }

  .avatar {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }

  @media (min-width: 768px) {
    height: 80px;

    .bg {
      width: 80px;
      height: 80px;
      cursor: pointer;
    }

    .bg::after {
      width: 80px;
      height: 80px;
    }

    .switcher {
      margin-right: 32px;

    }

    .settings {
      padding: 24px 32px;
    }
  }
`;

export function Menu() {
    const {theme, themeSwitch} = useStore();
    return (
        <Aside>
            <div onClick={() => window.location = '/'} className="bg">
                <img
                    src={logo}
                    alt="logo"
                />
            </div>
            <div className="switcher">
                <button onClick={() => themeSwitch()}>
                    <img
                        src={theme === "dark" ? sun : moon}
                        alt="theme-icon"
                    />
                </button>
            </div>
            <div className="account">
                <div className="settings">
                    <button>
                        <img
                            className="avatar"
                            src={user}
                            alt="user-portrait"
                        />
                    </button>
                </div>
            </div>
        </Aside>
    );
}
