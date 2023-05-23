import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  position: relative;
  background: ${props => props.theme.colors.white};
  border-radius: 0px 0px 20px 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  @media screen and (min-width: 768px) {
    width: 336px;

    border-radius: 0px 0px 40px 40px;
  }
  @media screen and (min-width: 1300px) {
    width: 288px;
  }
`;

export const LearnMoreBtn = styled.button`
  color: ${p => p.theme.colors.home.secTitle};
  background: ${props => props.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.home.secTitle};
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-align: center;
  display: block;
  padding: 8px;
  width: 248px;
  margin-bottom: 12px;
  margin-right: auto;
  margin-left: auto;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 288px;
  }

  @media screen and (min-width: 1280px) {
    width: 248px;
  }

  &:last-child {
    margin-bottom: 20px;
    margin-top: 50px;
  }

  &:first-child:not(:last-child) {
    margin-top: 20px;
  }

  &:hover {
    background: ${p => p.theme.colors.home.secTitle};
    color: ${props => props.theme.colors.white};
  }
`;

export const DeleteBtn = styled.button`
  border: 2px solid rgba(255, 154, 154, 1);
  color: ${p => p.theme.colors.primary};
  background: ${props => props.theme.colors.white};
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  width: 248px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 288px;
  }

  @media screen and (min-width: 1280px) {
    width: 248px;
  }

  &:hover {
    background: ${p => p.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
  &:hover > svg {
    fill: ${props => props.theme.colors.white};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

export const InfoWrapper = styled.div`
  flex: 1 0 0;
  padding: 20px;
  padding-bottom: 0;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 20px;
  word-wrap: break-word;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.37;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CategoryTitle = styled.span`
  position: absolute;
  left: 0;
  top: 20px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  width: 150px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  display: block;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const Span = styled.span`
  display: inline-block;
  margin-right: 37px;
  width: 50px;
`;

export const AddToFavoriteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  backdrop-filter: blur(2px);
  background-color: hsla(0, 0%, 100%, 0.6);
  border: none;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
  border-radius: 50%;
  color: white;
  &.active,
  :hover {
    background: ${p => p.theme.colors.primary};
  }
  &:hover > svg {
    background: ${p => p.theme.colors.primary};
    fill: ${props => props.theme.colors.white};
  }
`;
export const FavoriteIcon = styled(AiFillHeart)`
  width: 28px;
  height: 28px;
  fill: ${p => p.theme.colors.primary};
`;

export const AddIcon = styled(AiOutlineHeart)`
  width: 28px;
  height: 28px;
  color: ${p => p.theme.colors.primary};
  :hover {
    background: ${p => p.theme.colors.primary};
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  height: 288px;
  width: 100%;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 336px;
  }
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 40px 40px;
  object-fit: cover;
`;

export const DelIcon = styled(RiDeleteBin5Fill)`
  color: ${p => p.theme.colors.primary};
  width: 24px;
`;
