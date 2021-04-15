import styled from "styled-components";
export const ContactContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media screen and (max-width: 678px) {
    width: 100%;
    min-height: 100%;
  }
`;
export const ContactContinerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(9, 28, 41);
  color: #fff;
  border-radius: 10px;
  @media screen and (max-width: 678px) {
    flex-direction: column-reverse;
    max-width: 100%;
    border-radius: 0;
    height: 100%;
    padding-top: 70px;
  }
  @media screen and (max-width: 380px) {
    height: 100%;
  }
  @media screen and (max-width: 330px) {
    height: 100%;
  }
`;
export const ContactDetail = styled.div`
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  @media screen and (max-width: 678px) {
    max-width: 100%;
  }
`;
export const ContactDetailHeader = styled.div`
  @media screen and (max-width: 678px) {
    max-width: 100%;
  }
`;
export const ContactDetailHeaderH1 = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 678px) {
    font-size: 30px;
  }
`;
export const ContactDetailHeaderp = styled.p`
  font-size: 22px;
  margin-bottom: 10px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 678px) {
    font-size: 20px;
  }
`;
export const ContactDetailFollow = styled.div`
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;
export const ContactPerson = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 678px) {
    max-width: 100%;
  }
`;
export const ContactPersonImage = styled.img`
  width: 300px;
  height: 415px;
  object-fit: contain;
  @media screen and (max-width: 678px) {
    width: 300px;
    height: 400px;
  }
  @media screen and (max-width: 300px) {
    width: 280px;
    height: 400px;
  }
`;
