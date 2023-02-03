import styled from "styled-components";
import logo from "../assets/logo.svg";

const Aside = styled.aside`
  width: 100%;
  height: 72px;
  background-color: #1e2139;

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
`;

export function Menu() {
  return (
    <Aside>
      <div className="bg">
        <img
          src={logo}
          alt="logo"
        />
      </div>
      Menu
    </Aside>
  );
}
