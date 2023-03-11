import styled from "styled-components";

import EditForm from "../components/EditForm";

import BackButton from "../components/BackButton";
import {useParams} from "react-router-dom";
import {useWindowWidth} from "@react-hook/window-size";

const EditWrapper = styled.div`
  width: 100%;
  margin-top: 104px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: ${({theme}) => theme.colors.background};

  @media (min-width: 768px) {
    margin-top: 0;
    position: absolute;
    left: 0;
    top: 80px;
    width: 100vw;
    background-color: rgb(0, 0, 0, 0.6);
    z-index: 999;

    .purple {
      margin: 48px 0;
    }

    label {
      color: ${({theme}) => theme.colors.inputText};
      font-size: 12px;
      font-weight: normal;
      line-height: 15px;
      letter-spacing: -0.25px;
      display: flex;
      flex-direction: column;

      .label-name {
        &--error {
          display: flex;
          justify-content: space-between;
          color: ${({theme}) => theme.colors.errorRed};
        }
      }

      .error-message {
        font-size: 10px;
        line-height: 15px;
        letter-spacing: -0.21px;
      }
    }

    input {
      margin: 10px 0 24px;
      padding: 0 20px;
      height: 48px;
      width: 504px;
      border: 1px solid ${({theme}) => theme.colors.inputBorder};
      border-radius: 4px;
      background-color: ${({theme}) => theme.colors.itemsBox};
      color: ${({theme}) => theme.colors.primaryText};
      font-size: 12px;
      line-height: 15px;
      font-weight: bold;
      letter-spacing: -0.25px;
    }

    input:focus {
      outline: 1px solid ${({theme}) => theme.colors.active};
    }

    input.error {
      outline: 1px solid ${({theme}) => theme.colors.errorRed};
    }


    .half, .third {
      width: 152px;
    }

    .gradient {
      height: 10px;
      margin: 0;
    }
  }
`;

function Edit() {
    const width = useWindowWidth();
    const params = useParams();
    return (
        <EditWrapper>
            {width >= 768 ? null : <BackButton path={`/invoices/preview/${params.id}`}/>}
            <EditForm/>
        </EditWrapper>
    );
}

export default Edit;
