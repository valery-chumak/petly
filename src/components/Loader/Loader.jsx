import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots height="100" width="100" radius="9" color={'#599cfa'} />
    </LoaderContainer>
  );
};

export default Loader;
