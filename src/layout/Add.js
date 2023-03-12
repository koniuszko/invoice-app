import styled from "styled-components";

import BackButton from "../components/BackButton";
import NewForm from "../components/NewForm";
import {useWindowWidth} from "@react-hook/window-size";
import {useStore} from "../context/context";

const AddWrapper = styled.div`
  width: 100%;
  margin-top: 72px;
  padding: 24px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: ${({theme}) => theme.colors.formBackground};

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 0;
    top: 80px;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.6);
  }
  @media (min-width: 1440px) {
    margin-top: 0;
    padding: 0;
    position: absolute;
    left: 83px;
    top: 0;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.6);
    z-index: 9;
  }
`;

function Add() {
    const {setAddModalOpen} = useStore();
    const width = useWindowWidth();
    return (
        <AddWrapper>
            {width >= 768 ? null : <BackButton setModalOpen={setAddModalOpen} path={"/"}/>}
            <NewForm/>
        </AddWrapper>
    );
}

export default Add;
