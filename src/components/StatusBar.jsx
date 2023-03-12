import styled from "styled-components";
import statusIcon from "./status/StatusIcon";
import {useWindowWidth} from "@react-hook/window-size";
import PreviewButtons from "./PreviewButtons";

const StatusBarWrapper = styled.div`
  width: 330px;
  height: 90px;
  padding: 24px;
  margin-top: 32px;
  background-color: ${({theme}) => theme.colors.box};
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px 2px rgb(0, 0, 0, 0.15);

  .status-title {
    margin-right: auto;
    font-size: 12px;
    font-weight: normal;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({theme}) => theme.colors.previewText};
  }

  @media (min-width: 768px) {
    position: relative;
    width: 688px;
    height: 88px;
    padding: 20px 32px;

    .status-title {
      margin-right: 16px;
    }
  }
  @media (min-width: 768px) {
    width: 730px;
  }
`;

function StatusBar({status, markAsPaid, setDeleteModalOpen, id}) {
    const width = useWindowWidth();
    return (
        <StatusBarWrapper>
            <p className="status-title">Status</p>
            {statusIcon(status)}
            {width >= 768 ?
                <PreviewButtons id={id} setDeleteModalOpen={setDeleteModalOpen} markAsPaid={markAsPaid}
                                status={status}/> : null}
        </StatusBarWrapper>
    );
}

export default StatusBar;
