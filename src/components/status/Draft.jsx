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

export default DraftBar;
