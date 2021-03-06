import styled from "styled-components";
import image from "../img/background-1.svg";

const Beranda = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <TextMain>Hi there,</TextMain>
        <TextSub>Welcome to my Card Generator!</TextSub>
      </TextWrapper>
      <ImageWrapper>
        <Image src={image}></Image>
      </ImageWrapper>
    </Wrapper>
  );
};

export default Beranda;

const Wrapper = styled.div`
  background-color: #3346FF;
  background-image: linear-gradient(62deg, #3346FF 0%, #e0c3fc 100%);
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  ${"" /* margin-top: 5rem; */}
  ${"" /* padding: 1rem; */}
  align-items: center;
  ${"" /* margin-top: 10rem; */}
`;

const TextWrapper = styled.div`
  color: #fff;
  font-size: 6rem;
  width: 50%;
  ${"" /* //background-color: #fff; */}

  padding: 2rem;
`;

const TextMain = styled.h2`
  font-size: 6rem;
`;

const TextSub = styled.p`
  font-size: 3rem;
`;

const ImageWrapper = styled.div`
  width: 50%;
  ${"" /* //background-color: #fff; */}
`;
const Image = styled.img`
  width: 100%;
`;
