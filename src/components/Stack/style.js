import styled from "styled-components";

export const StackContainer = styled.div`
  background: rgb(238, 238, 238);

  @media screen and (max-width: 786px) {
    padding: 5px;
  }
`;

export const StackContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media screen and (max-width: 1026px) {
    height: 100vh;
  }
  @media screen and (max-width: 830px) {
    height: 100%;
  }
  @media screen and (max-width: 820px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
  @media screen and (max-width: 750px) {
    height: 100%;
  }
  @media screen and (max-width: 650px) {
    height: 100%;
  }
  @media screen and (max-width: 450px) {
    height: 100%;
  }
  @media screen and (max-width: 412px) {
    height: 100%;
  }
  @media screen and (max-width: 380px) {
    height: 100%;
  }
`;
export const StackHeader = styled.div`
  margin-bottom: 60px;
  padding: 10px;
`;

export const StackHeaderH1 = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  @media screen and (max-width: 786px) {
    font-size: 48px;
  }
  @media screen and (max-width: 300px) {
    font-size: 38px;
  } ;
`;

export const Stacks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 40px;

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0;
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }
  @media screen and (max-width: 340px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const StackMiddle = styled.div`
  padding: 10px;
`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
  object-fit: contain;
  border-radius: 999px;
  background: #fff;
  padding: 10px;
  box-shadow: 1px 5px 7px -9px rgba(255, 255, 255, 0.9);
  animation: ${({ bounce }) => (bounce ? "bounce" : "refloat")} 3s infinite;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0px);
      animation-timing-function: ease-in-out;
    }
    50% {
      transform: translateY(-25%);
      animation-timing-function: ease-in-out;
    }
  }
  @keyframes refloat {
    0%,
    100% {
      transform: translateY(-25%);
      animation-timing-function: ease-in-out;
    }
    50% {
      transform: translateY(0px);
      animation-timing-function: ease-in-out;
    }
  }
  @media screen and (max-width: 780px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 300px) {
    width: 160px;
    height: 160px;
  } ;
`;

export const StackImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StackFooter = styled.div`
  /* padding: 60px; */
  max-width: 700px;
  @media screen and (max-width: 786px) {
    padding: 40px 0px;
  }
`;

export const StackFooterH3 = styled.h3`
  font-size: 20px;
  @media screen and (max-width: 300px) {
    font-size: 16px;
  } ;
`;
