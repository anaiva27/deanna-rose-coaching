import React from "react";
import styled from "styled-components";
import img1 from "../Assets/image-1.png";
import img2 from "../Assets/image-2.png";
import img3 from "../Assets/image-3.png";
import img4 from "../Assets/image-4.png";
import img5 from "../Assets/image-5.png";

export const Homepage = () => {
  return (
    <Wrapper>
      <Container>
        <NavigationContainer></NavigationContainer>
        <ContentWrapper>
          <div className="a">
            <img src={img1} alt="" />
          </div>
          <div className="b">
            <img src={img5} alt="" />
          </div>
          <div className="c">
            <img src={img2} alt="" />
          </div>
          <div className="d">
            <img src={img3} alt="" />
          </div>
          <div className="e">
            <img src={img4} alt="" />
          </div>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
`;

const Container = styled.div`
  margin: 10px auto;
  display: flex;
  background-color: #fff;
  border-radius: 50px;
  width: 98%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: grid;
  border-radius: 50px;
  column-gap: 15px;
  row-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "a a a b"
    "c c d e";
  div {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const NavigationContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
`;
const GridRow = styled.div`
  width: 100%;
  display: flex;
`;
