import styled from "styled-components";

import { Link as LinkS } from "react-scroll";

export const SectionContainer = styled.div`
  background: rgb(9, 28, 41);
  min-height: 100vh;
  margin-top: -70px;
`;

export const SectionContainerBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 70px 0px;
  height: 100vh;
  max-width: 83%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0;
    margin-top: 30px;
    height: 100%;
    text-align: center;
  }
`;

export const SectionContainerBodyContainerLeft = styled.div`
  width: 100%;
  color: #fff;
`;

export const SectionContainerBodyContainerRigth = styled.div``;

export const Image = styled.img`
  width: 400px;
  height: 500px;

  @media screen and (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 852px;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    height: 750px;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    height: 700px;
  }

  @media screen and (max-width: 412px) {
    width: 100%;
    height: 650px;
  }

  @media screen and (max-width: 380px) {
    width: 100%;
    height: 580px;
  }

  @media screen and (max-width: 330px) {
    width: 100%;
    height: 450px;
  }
`;

export const SectionDetials = styled.div`
  padding: 10px;
`;

export const Button = styled(LinkS)`
  background: #667eea;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;
  display: inline-block;
  animation: bounce 3s infinite;
  cursor: pointer;
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(-50%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  @media screen and (max-width: 980px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 330px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 0.6rem;
  }
`;

export const SectionDetialsh1 = styled.h1`
  font-size: 4rem;
  margin-bottom: 10px;
  font-weight: bold;

  @media screen and (max-width: 1000px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 330px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 1.2rem;
  }
`;

export const Span1 = styled.span`
  display: inline-block;
`;

export const SectionDetialsh2 = styled.h2`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 10px;
  color: #cbd5e0;
  line-height: 1.5;

  @media screen and (min-width: 900px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 980px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 330px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 300px) {
    font-size: 1rem;
  }
`;

export const Span = styled.span`
  margin-left: 10px;
`;
