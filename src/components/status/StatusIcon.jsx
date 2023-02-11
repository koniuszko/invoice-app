import styled from "styled-components";

const DraftWrapper = styled.div`
  width: 104px;
  height: 40px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.statusDraftBgc};
  color: ${({ theme }) => theme.colors.statusDraftText};
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
    background-color: ${({ theme }) => theme.colors.statusDraftText};
    margin-right: 8px;
  }
`;

function DraftBar() {
  return (
    <DraftWrapper>
      <div className="circle"></div>
      <p>Draft</p>
    </DraftWrapper>
  );
}

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

export default function statusIcon(status) {
  switch (status) {
    case "draft":
      return <DraftBar />;
      break;
    case "pending":
      return <PendingBar />;
      break;

    case "paid":
      return <PaidBar />;
      break;
  }
}
