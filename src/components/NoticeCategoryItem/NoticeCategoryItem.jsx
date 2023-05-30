import { useState } from 'react';
import { toast } from 'react-toastify';
import noImage from '../../img/noImage.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {
  addNoticeToFavorite,
  removeNoticeWithFavorite,
} from 'redux/auth/authOperations';
import { removeNotice } from 'redux/notices/notices-operation';
import { selectUserData } from 'redux/auth/authSelectors';

import ModalNotice from 'components/ModalNotice/ModalNotice';

import {
  Item,
  LearnMoreBtn,
  Title,
  Text,
  InfoWrapper,
  CategoryTitle,
  AddToFavoriteBtn,
  Span,
  AddIcon,
  Image,
  DeleteBtn,
  DelIcon,
  FavoriteIcon,
  BtnWrapper,
  ImageWrapper,
} from './NoticeCategoryItem.styled';

function NoticeCategoryItem(notices) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const userId = user?._id || null;

  const {
    _id,
    title,
    birthdate,
    breed,
    location,
    avatar,
    price,
    favorite,
    owner,
    category,
  } = notices;
  const { url } = avatar;

  let isFavorite = favorite?.includes(_id) || false;
  let isDisplayed = false;

  if (owner === userId) {
    isDisplayed = true;
  }

  function getAge() {
    const today = new Date();
    const birthDate = new Date(birthdate);

    // Calculate the difference in years and months
    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    let ageInMonths = today.getMonth() - birthDate.getMonth();

    // Check if the birthdate hasn't occurred yet this year
    const hasNotHadBirthdayYet =
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate());

    // Adjust the age if the birthdate hasn't occurred yet this year
    if (hasNotHadBirthdayYet) {
      ageInYears--;
      ageInMonths = 12 - birthDate.getMonth() + today.getMonth();
    }

    // If the age is less than 1 year
    if (ageInYears < 1) {
      if (ageInMonths === 0) {
        return 'less than one month old';
      } else if (ageInMonths === 1) {
        return 'one month old';
      } else {
        return `${ageInMonths} months old`;
      }
    }

    // If the age is 1 year
    if (ageInYears === 1) {
      return 'one year old';
    }

    // For ages greater than 1 year
    return `${ageInYears} years old`;
  }

  function changeCategory() {
    if (category === 'ingoodhands') {
      return 'in good hands';
    }
    if (category === 'lostfound') {
      return 'lost/found';
    } else {
      return category;
    }
  }

  const onClickFavoriteButton = () => {
    if (!isLoggedIn) {
      return toast.error(
        'You need to authorize before adding notices to favorite.'
      );
    } else if (!isFavorite) {
      dispatch(addNoticeToFavorite(_id));
    } else {
      dispatch(removeNoticeWithFavorite(_id));
    }
  };

  const onClickDeleteButton = () => {
    dispatch(removeNotice(_id));
  };

  return (
    <>
      <Item key={_id}>
        <ImageWrapper>
          <Image src={url ?? noImage} alt="pet" />
        </ImageWrapper>

        <CategoryTitle>{changeCategory()}</CategoryTitle>
        <AddToFavoriteBtn onClick={onClickFavoriteButton}>
          {isFavorite ? <FavoriteIcon /> : <AddIcon />}
        </AddToFavoriteBtn>
        <InfoWrapper>
          <Title>{title}</Title>
          <Text>
            <Span>Breed:</Span>
            {breed}
          </Text>
          <Text>
            <Span>Place:</Span>
            {location}
          </Text>
          <Text>
            <Span>Age:</Span>
            {getAge()}
          </Text>
          {category === 'sell' && (
            <Text>
              <Span>Price:</Span>
              {price ? `${price} $` : '--------'}
            </Text>
          )}
        </InfoWrapper>
        <BtnWrapper>
          <LearnMoreBtn onClick={() => setIsModalOpen(true)}>
            Learn more
          </LearnMoreBtn>

          <DeleteBtn
            onClick={onClickDeleteButton}
            style={isDisplayed ? {} : { display: 'none' }}
          >
            Delete
            <DelIcon />
          </DeleteBtn>
        </BtnWrapper>
        {isModalOpen && (
          <ModalNotice
            id={_id}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onClickDelete={onClickDeleteButton}
            addToFavorite={onClickFavoriteButton}
            isFavorite={isFavorite}
          />
        )}
      </Item>
    </>
  );
}

export default NoticeCategoryItem;
