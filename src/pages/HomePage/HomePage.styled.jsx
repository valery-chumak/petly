import styled from 'styled-components';
export const MainContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 20px;
  height: -webkit-fill-available;
  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1300px) {
    width: 1300px;
    padding: 0 16px;
  }
`;
export const HomeSection = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;

  width: -webkit-fill-available;
  height: calc(100% - 56px);

  @media screen and (min-width: 768px) {
    padding-top: 90px;
    width: -webkit-fill-available;
    height: calc(100% - 56px);
  }

  @media screen and (min-width: 1300px) {
    width: -webkit-fill-available;
    height: calc(100% - 69px);
    padding-top: 60px;
  }
`;
export const HomeTitle = styled.h1`
  color: #265cb5;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.h};
  line-height: 1.38;
  margin-bottom: 58px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 620px;
    height: 200px;
    font-size: 68px;
    line-height: 1.47;
    padding-left: 32px;
    margin-bottom: 118px;
    text-align: left;
  }
  @media screen and (min-width: 1300px) {
    width: 658px;
    height: 200px;
    padding-left: 16px;
    text-align: left;
    margin-top: 30px;
  }
`;
export const Image = styled.img`
  min-width: 320px;
  min-height: 337px;

  @media screen and (min-width: 768px) {
    max-width: 645px;
    max-height: 715px;
    margin-left: 61px;
    margin-right: 62px;
  }
  @media screen and (min-width: 1300px) {
    max-width: 790px;
    max-height: 740px;
  }
`;

export const HomeWrapp = styled.div`
  height: -webkit-fill-available;
  @media screen and (min-width: 1300px) {
    display: flex;
  }
`;

export const ImagesWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 5%;
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 10%;
  }

  @media screen and (min-width: 1300px) {
    position: static;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: auto;
    margin-left: 0px;
    margin-right: 10px;
  }
`;
