import styled from "styled-components";

import { Link } from "react-router-dom";

const NewFormButtonsWrapper = styled.div`
  width: 100%;
  height: 91px;
  padding: 22px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.box};
  display: flex;
  justify-content: center;
  gap: 7px;

  button {
    height: 48px;
    border-radius: 24px;
    padding: 16px;
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    letter-spacing: -0.25px;
  }

  .discard_btn {
    width: 84px;
    background-color: ${({ theme }) => theme.colors.discardBtn};
    color: ${({ theme }) => theme.colors.discardText};
  }

  .draft_btn {
    width: 117px;
    background-color: #373b53;
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  .send_btn {
    width: 112px;
    background-color: #7c5dfa;
    color: #fff;
  }
`;
export default function NewFormButtons({ saveInvoice, saveAsDraft }) {
  return (
    <NewFormButtonsWrapper>
      <Link to={"/"}>
        <button className="discard_btn">Discard</button>
      </Link>
      <Link to={"/"}>
        <button
          onClick={(e) => {
            saveAsDraft();
          }}
          className="draft_btn"
        >
          Save as Draft
        </button>
      </Link>
      <Link to={"/"}>
        <button
          onClick={(e) => {
            saveInvoice();
          }}
          className="send_btn"
        >
          Save & Send
        </button>
      </Link>
    </NewFormButtonsWrapper>
  );
}
