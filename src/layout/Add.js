import styled from "styled-components";

import BackButton from "../components/BackButton";
import NewForm from "../components/NewForm";
import {useWindowWidth} from "@react-hook/window-size";

const AddWrapper = styled.div`
  width: 100%;
  margin-top: 104px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: ${({theme}) => theme.colors.background};
  
  @media (min-width: 768px) {
    //width: 616px;
    margin-top: 0;
    position: absolute;
    left: 0;
    top: 80px;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.6);
    z-index: 999;

  }
`;

function Add() {
    const width = useWindowWidth();
    return (
        <AddWrapper>
            {width >= 768 ? null : <BackButton path={"/"}/>}
            <NewForm/>
        </AddWrapper>
    );
}

export default Add;
