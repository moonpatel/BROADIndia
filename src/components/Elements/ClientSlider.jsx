import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/logo01.svg"
import ClientLogo02 from "../../assets/img/clients/logo02.svg";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";
import ClientLogo06 from "../../assets/img/clients/logo06.svg";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h1 style={{textAlign: "center", fontSize: "45px"}}>Our Trusted Clients</h1>
      <p style={{textAlign: "center"}}>When the trust account is high, communication is easy, instant, and effective.</p>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src="https://broadusa.com/broad/wp-content/uploads/2020/02/columbia_university_logo.png" alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src="https://broadusa.com/broad/wp-content/uploads/2020/02/marriott_logo.png" alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src="https://broadusa.com/broad/wp-content/uploads/2020/02/metro-vancover-logo.png" alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src="https://broadusa.com/broad/wp-content/uploads/2020/02/princeton-university-logo2.png" alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src="https://broadusa.com/broad/wp-content/uploads/2020/02/qualcomm-logo.png" alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src="https://broadusa.com/broad/wp-content/uploads/2020/02/metro-vancover-logo.png" alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: auto;
  padding: 10%;
`;