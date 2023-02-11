import styled from "styled-components";
import statusIcon from "./status/StatusIcon";

const StatusBarWrapper = styled.div`
  width: 330px;
  height: 90px;
  padding: 24px;
  margin-top: 32px;
  background-color: ${({ theme }) => theme.colors.box};
  border-radius: 8px;
  display: flex;
  align-items: center;

  .status-title {
    margin-right: auto;
    font-size: 12px;
    font-weight: normal;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.colors.previewText};
  }
`;

function StatusBar({ status }) {
  return (
    <StatusBarWrapper>
      <p className="status-title">Status</p>
      {statusIcon(status)}
    </StatusBarWrapper>
  );
}

export default StatusBar;
