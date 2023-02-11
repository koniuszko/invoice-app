import styled from "styled-components";
import statusIcon from "./status/StatusIcon";

const StatusBarWrapper = styled.div``;

function StatusBar({ status }) {
  return (
    <StatusBarWrapper>
      <p>Status</p>
      {statusIcon(status)}
    </StatusBarWrapper>
  );
}

export default StatusBar;
