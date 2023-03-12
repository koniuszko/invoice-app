import {Link, useParams} from "react-router-dom";

import styled from "styled-components";
import {useStore} from "../../context/context";

const EditFormButtonsWrapper = styled.div`
  width: 100%;
  height: 91px;
  padding: 22px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({theme}) => theme.colors.box};
  display: flex;
  justify-content: center;

  .buttons {
    width: 330px;
    display: flex;
    justify-content: flex-end;
    gap: 7px;
  }

  button {
    height: 48px;
    border-radius: 24px;
    padding: 16px;
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    letter-spacing: -0.25px;
  }

  .cancel_btn {
    width: 96px;
    background-color: ${({theme}) => theme.colors.discardBtn};
    color: ${({theme}) => theme.colors.discardText};
  }

  .send_btn {
    width: 138px;
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
    justify-content: flex-end;
    gap: 8px;

  }
`;
export default function EditFormButtons({saveChanges}) {
    const params = useParams();
    const {setEditModalOpen} = useStore()
    return (
        <EditFormButtonsWrapper>
            <div className="buttons">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setEditModalOpen(false);
                    }}
                    className="cancel_btn">Cancel
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        saveChanges();
                    }}
                    className="send_btn"
                >
                    Save Changes
                </button>
            </div>
        </EditFormButtonsWrapper>
    );
}
