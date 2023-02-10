import styled from "styled-components";

const PaidWrapper = styled.div`
  width: 104px;
  height: 40px;
  border-radius: 6px;
  background-color: #33d6a010;
  color: #33d69f;
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
    background-color: #33d69f;
    margin-right: 8px;
  }
`;

function PaidBar() {
  return (
    <PaidWrapper>
      <div className="circle"></div>
      <p>Paid</p>
    </PaidWrapper>
  );
}

export default PaidBar;
