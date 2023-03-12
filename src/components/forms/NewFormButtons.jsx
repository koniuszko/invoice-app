import styled from "styled-components";

import {useStore} from "../../context/context";

const NewFormButtonsWrapper = styled.div`
  width: 100%;
  height: 91px;
  padding: 22px 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({theme}) => theme.colors.box};
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
    background-color: ${({theme}) => theme.colors.discardBtn};
    color: ${({theme}) => theme.colors.discardText};
  }

  .draft_btn {
    width: 117px;
    background-color: #373b53;
    color: ${({theme}) => theme.colors.secondaryText};
  }

  .send_btn {
    width: 112px;
    background-color: #7c5dfa;
    color: #fff;
  }

  @media (min-width: 768px) {
    margin: 48px 0 24px;
    width: 100%;
    height: 48px;
    padding: 0;
    position: relative;
    bottom: 0;
    left: 0;
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    gap: 8px;

    .discard_btn {
      width: 96px;
      margin-right: auto;
    }

    .draft_btn {
      width: 133px;
    }

    .send_btn {
      width: 128px;
    }
  }
`;
export default function NewFormButtons({saveInvoice, saveAsDraft}) {
    const {setAddModalOpen} = useStore();

    return (
        <NewFormButtonsWrapper>
            <button className="discard_btn" onClick={(e) => {
                e.preventDefault();
                setAddModalOpen(false)
            }}>Discard
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    saveAsDraft();
                }}
                className="draft_btn"
            >
                Save as Draft
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();

                    saveInvoice();
                }}
                className="send_btn"
            >
                Save & Send
            </button>
        </NewFormButtonsWrapper>
    );
}
