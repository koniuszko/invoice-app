import styled from "styled-components";

const LoaderWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .circle {
    display: inline-block;
    background-color: #7c5dfa;
    height: 15px;
    width: 15px;
    border-radius: 25px;
  }

  .container {
    height: 15px;
  }

  .ball-1 {
    -webkit-animation-name: bounce;
    -webkit-animation-delay: 1s;
    -webkit-animation-duration: 1.2s;
    -webkit-animation-iteration-count: infinite;
  }
  .ball-2 {
    -webkit-animation-name: bounce;
    -webkit-animation-delay: 1.1s;
    -webkit-animation-duration: 1.2s;
    -webkit-animation-iteration-count: infinite;
  }
  .ball-3 {
    -webkit-animation-name: bounce;
    -webkit-animation-delay: 1.2s;
    -webkit-animation-duration: 1.2s;
    -webkit-animation-iteration-count: infinite;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(23px);
    }
    60% {
      transform: translateY(-25px);
    }
    80% {
      transform: translateY(0);
    }
  }
`;

function Loader() {
  return (
    <LoaderWrapper>
      <div className="container">
        <div className="ball-1 circle"></div>
        <div className="ball-2 circle"></div>
        <div className="ball-3 circle"></div>
      </div>
    </LoaderWrapper>
  );
}

export default Loader;
