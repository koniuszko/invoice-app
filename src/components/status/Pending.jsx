import styled from "styled-components";

const PendingWrapper = styled.div`
  width: 104px;
  height: 40px;
  border-radius: 6px;
  background-color: #ff910010;
  color: #ff8f00;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
  letter-spacing: -0.25px;

  .circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ff8f00;
    margin-right: 8px;
  }
`;

function PendingBar() {
  return (
    <PendingWrapper>
      <div className="circle"></div>
      <p>Pending</p>
    </PendingWrapper>
  );
}

export default PendingBar;
