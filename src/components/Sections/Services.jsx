import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Specialists In Modern Absorption Chillers</h1>
            <p className="font13">
              A cost-effective cooling and heating solution that can better utilize existing thermal energy sources
            </p>
          </HeaderInfo>
          <br /><br /><br />
          <div style={{ display: "flex" }}>
            <p style={{ width: "50%", padding: "10px" }}>
              BROAD U.S.A. is a privately held company headquartered in New Jersey, with sales and service operations to support our customers throughout North America. BROAD Absorption Chillers are currently operating successfully in over 80 counties with over 35,000 systems deployed worldwide. Relying on our innovative and environmental-friendly technology, BROAD U.S.A commits itself to optimize energy efficiency for clients in Commercial, Civil and Industrial markets.
              <br />
              <br />
              Broad U.S.A. has service and support teams in our east and west coast locations, with service engineering and component inventory for rapid service to our customers.
            </p>
            <p style={{ width: "50%", padding: "10px" }}>
              Broad U.S.A. also encourages and supports the education of both operators and service contractors on your equipment by offering regional training courses on a semi-annual basis as well as yearly factory training in our headquarters.
              <br />
              <br />
              Broad U.S.A. is committed to the inherent value and flexible solutions that thermally driven absorption plays in our modern world. Absorption design is our core competency and primary focus. Unlike many current players in the absorption market, Broad designed and
            </p>
          </div>
          <h1 style={{ marginTop: "45px", fontSize: "40px" }}>Our Awesome Products</h1>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="https://broadusa.com/broad/wp-content/uploads/2020/04/home_DFA.jpg"
                title="NON-ELECTRIC CHILLER"
                subtitle="Building Central A/C System & Domestic Hot Water.Providing cooling with fuel saves 4-time energy conversions."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="https://broadusa.com/broad/wp-content/uploads/2020/05/WeChat-Image_20200513110329-400x276.jpg"
                title="ABSORPTION HEAT PUMPS"
                subtitle="Pumping Heat from lower Temperature to Medium Temperature using High Grade Energy. It is VARIATION of single stage absorption chiller"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="https://broadusa.com/broad/wp-content/uploads/2020/04/home_CCHP.jpg"
                title="BROAD CCHP SYSTEM"
                subtitle="Achieves Zero Emission with Exhaust Heat as Pwer Source - The CHP System powered by exhaust heat from generator."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="https://broadusa.com/broad/wp-content/uploads/2020/04/home_power-efficient-chillers.jpg"
                title="POWER EFFICIENT CHILLER"
                subtitle="Cooling capacity ranging from 150 ton to 2000 ton. High COP (6.5) and excellent IPLV(maximum 13.26)"
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold">FOR HUMANITY'S FUTURE</h2>
                <p className="font12">
                  We preserve the life of the present generation
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 25%;
  margin-right: 2%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;