import {Link} from "react-router-dom";
import styled from "styled-components";

const PreviewButtonsWrapper = styled.div`
  width: 100%;
  height: 91px;
  padding: 22px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({theme}) => theme.colors.box};
  display: flex;
  justify-content: center;
  gap: 7px;

  .buttons {
    width: 330px;
    display: flex;
    justify-content: flex-start;
    gap: 7px;
  }

  button {
    height: 48px;
    border-radius: 24px;
    padding: 16px;
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    letter-spacing: 0.25px;
  }

  .edit_btn {
    width: 73px;
    background-color: ${({theme}) => theme.colors.discardBtn};
    color: ${({theme}) => theme.colors.discardText};
  }

  .delete_btn {
    width: 89px;
    background-color: #ec5757;
    color: #fff;
  }

  .paid_btn {
    width: 149px;
    background-color: #7c5dfa;
    color: #fff;
  }

  .send_btn {
    width: 112px;
    background-color: #7c5dfa;
    color: #fff;
  }

  @media (min-width: 768px) {
    width: initial;
    height: 48px;
    padding: 0;
    position: absolute;
    bottom: initial;
    left: initial;
    top: 20px;
    right: 32px;
    background-color: ${({theme}) => theme.colors.box};
    display: flex;
    justify-content: center;
    gap: 7px;


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
      letter-spacing: 0.25px;
    }

    .edit_btn {
      width: 73px;
      background-color: ${({theme}) => theme.colors.discardBtn};
      color: ${({theme}) => theme.colors.discardText};
    }

    .delete_btn {
      width: 89px;
      background-color: #ec5757;
      color: #fff;
    }

    .paid_btn {
      width: 149px;
      background-color: #7c5dfa;
      color: #fff;
    }

    .send_btn {
      width: 112px;
      background-color: #7c5dfa;
      color: #fff;
    }
  }
`;
export default function PreviewButtons({
                                           id,
                                           status,
                                           setDeleteModalOpen,
                                           markAsPaid,
                                       }) {
    return status === "paid" ? null : (
        <PreviewButtonsWrapper>
            <div className="buttons">
                <Link to={`/invoices/edit/${id}`}>
                    <button className="edit_btn">Edit</button>
                </Link>
                <button
                    onClick={() => setDeleteModalOpen(true)}
                    className="delete_btn"
                >
                    Delete
                </button>
                {status === "pending" ? (
                    <Link to={"/"}>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                markAsPaid();
                            }}
                            className="paid_btn"
                        >
                            Mark as Paid
                        </button>
                    </Link>
                ) : null}
            </div>
        </PreviewButtonsWrapper>
    );
}
