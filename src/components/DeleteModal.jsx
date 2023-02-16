import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const url = "http://localhost:3030";
// const url = "https://invoice-backend.azurewebsites.net";

const DeleteModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 999;

  h2 {
    font-size: 20px;
    font-weight: bold;
    line-height: 32px;
    letter-spacing: -0.42px;
  }

  p {
    font-size: 12px;
    font-weight: normal;
    line-height: 22px;
    letter-spacing: -0.25px;
    margin: 8px 0 24px;
    color: #888eb0;
  }
  .delete-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 330px;
    height: 220px;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.box};
    border-radius: 8px;
  }

  &-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
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
    background-color: ${({ theme }) => theme.colors.discardBtn};
    color: ${({ theme }) => theme.colors.discardText};
  }

  .delete_btn {
    width: 89px;
    background-color: #ec5757;
    color: #fff;
  }
`;

function DeleteModal({ setModalOpen }) {
  const param = useParams();

  const deleteInvoice = () => {
    axios
      .delete(`${url}/invoices/preview/${param.id}`)
      .then(() => (window.location = `/`));
  };

  const params = useParams();
  return (
    <DeleteModalWrapper>
      <div className="delete-modal">
        <h2>Confirm Deletion</h2>
        <p>
          Are you sure you want to delete invoice #{params.id.slice(-6)}? This
          action cannot be undone.
        </p>
        <div className="delete-modal-buttons">
          <button
            onClick={() => setModalOpen(false)}
            className="cancel_btn"
          >
            Cancel
          </button>
          <button
            onClick={() => deleteInvoice()}
            className="delete_btn"
          >
            Delete
          </button>
        </div>
      </div>
    </DeleteModalWrapper>
  );
}

export default DeleteModal;
