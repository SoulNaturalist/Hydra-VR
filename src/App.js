/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import "./App.css";
import styled from "styled-components";
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";
import vr from "./assets/vr.svg";
import smallArrow from "./assets/small-arrow.svg";
import StepImg from "./assets/step.png";
import arrow from "./assets/arrow.svg";
import vr2 from "./assets/vr2.svg";
import DignitiesCard from "./layouts/DignitiesCard.jsx";
import circleCard1 from "./assets/circle-card1.png";
import circleCard2 from "./assets/circle-card2.png";
import circleCard3 from "./assets/circle-card3.png";
import circleCard4 from "./assets/circle-card4.png";
import technologies from "./assets/technologies.png";
import technoDown from "./assets/techno-down.svg";
import techlogo1 from "./assets/techologo.png";
import techlogo2 from "./assets/techologo2.png";
import techlogo3 from "./assets/techologo3.png";
import techlogo4 from "./assets/techologo4.png";
import elipseArrow from "./assets/elipse-arrow.svg";


function App() {
	const VrArtwork = styled.img`
    position: absolute;
    width: 490px;
    height: 426px;
    right:17%;
    top: 265px;
    `;
	const VrTitle = styled.h2`
    position: absolute;
    width: 456px;
    height: 56px;
    left: 84px;
    top: 299px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    line-height: 56px;
    background-clip: text;
    text-fill-color: transparent;
    color: #FFFFFF;
    white-space: nowrap;
    `;
	const VrTitle2 = styled.h2`
    position: absolute;
    width: 456px;
    height: 56px;
    left: 84px;
    top: 355px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    line-height: 56px;
    background-clip: text;
    text-fill-color: transparent;
    color: #FFFFFF;
    text-justify:auto;
    `;
	const SpanTitle = styled.span`
    color:#C0B7E8;
    `;
	const Paragraph = styled.p`
    position: absolute;
    width: 450px;
    height: 72px;
    left: 84px;
    top: 465px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #FFFFFF;
    `;
	const BuildButon = styled.button`
    position: absolute;
    width: 214px;
    height: 48px;
    left: 84px;
    top: 589px;

    background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
    border-radius: 40px;
    border: none; 
    outline: none;
    `;
	const SmallArrow = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    left: 309px;
    top: 563px;
    `;
	const StepImgBar = styled.img`
    position: relative;
    width: 1350px;
    height: 200px;
    top: 769px;
    display:block;
    margin:0 auto;
    `;
	const SubTitle = styled.h2`
    position: absolute;
    width: 298px;
    height: 44px;
    left: 84px;
    top: 1230px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
    `;
	const HydraVRTitle = styled.h4`
    position: absolute;
    width: 251px;
    height: 44px;
    left: 84px;
    top: 1290px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
    white-space: nowrap;
    `;
	const ImgArrow = styled.img`
    position: absolute;
    width: 228px;
    height: 100px;
    left: 365px;
    top: 1310px;
    `;
	const HydraSubPargraph = styled.p`
    position: absolute;
    width: 650px;
    height: 98px;
    left: 770px;
    top: 1260px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 20px;

    color: #FFFFFF;
    `;
	const VrArtwork2 = styled.img`
    position: absolute;
    width: 524px;
    height: 557px;
    left:84px;
    top: 1450px;
    `;
	const AboutTitle = styled.h2`
    position: absolute;
    width: 136px;
    height: 44px;
    left: 790px;
    top: 1500px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color:#fff;
    `;
	const SubTitleAbout = styled.h4`
    position: absolute;
    width: 192px;
    height: 44px;
    left: 788px;
    top: 1540px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: rgba(255, 255, 255, 0.95);
    `;
	const ParagraphAbout = styled.p`
    position: absolute;
    width: 630px;
    height: 228px;
    left: 790px;
    top: 1660px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 20px;
    color: #FFFFFF;
    `;
	const TouchButton = styled.button`
    position: absolute;
    width: 214px;
    height: 48px;
    left: 790px;
    top: 1920px;

    background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
    border-radius: 40px;
    border: none; 
    outline: none;
    `;
	const BuildTitle2 = styled.h2`
    position: absolute;
    width: 225px;
    height: 44px;
    left: 90px;
    top: 2088px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
    `;
	const SubTileBuild = styled.h4`
    position: absolute;
    width: 259px;
    height: 44px;
    left: 90px;
    top: 2140px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
    `;
	const ImgArrow2 = styled.img`
    position: absolute;
    width: 228px;
    height: 100px;
    left: 365px;
    top: 2160px;
    `;
	const DescriptionParagraphBuild = styled.p`
    position: absolute;
    width: 652px;
    height: 98px;
    left: 710px;
    top: 2140px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 20px;

    color: #FFFFFF;
    `;
	const CardWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    `;
	const TechnologiesImg = styled.img`
    position: relative;
    width: 1278px;
    height: 303px;
    top: 2300px;
    margin: 0 auto;
    display:block;
    `;
	const TechonologiesTitle = styled.h2`
    position:relative;
    text-align: center;
    top: 2080px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
    `;
	const TechonologiesSubTitle = styled.h4`
    position:relative;
    top: 2040px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
    text-align: center;
    `;
	const TechnoDown = styled.img`
    position: relative;
    width: 60px;
    height: 60px;
    top:5px;
    margin: 0 auto;
    display:block;
    `;
	const CircleTechno = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
    top:2050px;
    background: linear-gradient(267.61deg, #C0B7E8 -0.6%, #8176AF 98.31%);
    border-radius:40px;
    margin: 0 auto;
    display:block;
    `;
	const TechnoLogo = styled.img`
    position:relative;
    width: 174px;
    height: 174px;
    left: 153px;
    top: 2100px;
    opacity: 0.36;
    `;
	const TechnoLogo2 = styled.img`
    position:relative;
    width: 252px;
    height: 252px;
    left: 418px;
    top:2100px;
    opacity: 0.36;
    `;
	const TechnoLogo3 = styled.img`
    position:relative;
    width: 263px;
    height: 263px;
    left: 641px;
    top:2100px;
    opacity: 0.36;
    `;
	const TechnoLogo4 = styled.img`
    position:relative;
    width: 282px;
    height: 282px;
    left: 800px;
    top:2100px;
    opacity: 0.36;
    `;
	const BuildTitle = styled.h2`
    position:relative;
    top:2270px;
    left:330px;
    width: 306px;
    height: 44px;
    font-family: 'Montserrat';
    font-style: normal;
    font-size: 36px;
    color: #FFFFFF;
    `;
	const BuildSubTitle = styled.h4`
    position: relative;
    width: 321px;
    height: 44px;
    left:330px;
    top:2240px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 44px;
    color: #FFFFFF;
    `;
	const ArrowBuildImg = styled.img`
    position:relative;
    width: 228px;
    height: 100px;
    left:670px;
    top:2120px;
    `;
	const BuildDescription = styled.p`
    position:relative;
    width: 650px;
    height: 98px;
    left: 950px;
    top:1975px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #FFFFFF;
    `;
	const ElipseStep = styled.div`
    position:relative;
    width: 159px;
    height: 159px;
    left: 281px;
    top:2175px;
    background: linear-gradient(251.27deg, #C0B7E8 12.87%, #8176AF 89.33%);
    border-radius: 80px;
    text-align: center;
    margin-left:150px;
    `;
	const ElipseStepText = styled.p`
    position: relative;
    top:-20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    `;
	const ElipseTitle = styled.h2`
    position:relative;
    width: 187px;
    height: 64px;
    right:15px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;
    `;
	const ElipseArrow = styled.img`
    position:relative;
    width: 67px;
    height: 67px;
    right:72%;
    top:-86px;
    `;
	return <div>
		<NavBar/>
		<VrTitle><SpanTitle>Dive</SpanTitle> Into The Depths</VrTitle>
		<VrTitle2>Of <SpanTitle>Virtual Reality</SpanTitle></VrTitle2>
		<VrArtwork src={vr}/>
		<Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .</Paragraph>
		<BuildButon>BUILD YOUR WORLD</BuildButon>
		<SmallArrow src={smallArrow}/>
		<StepImgBar src={StepImg}/>
		<SubTitle>INTRODUCTION</SubTitle>
		<HydraVRTitle>TO HYDRA VR</HydraVRTitle>
		<ImgArrow src={arrow}/>
		<HydraSubPargraph>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
		</HydraSubPargraph>
		<VrArtwork2 src={vr2}/>
		<AboutTitle>ABOUT</AboutTitle>
		<SubTitleAbout>HYDRA VR</SubTitleAbout>
		<ParagraphAbout>
        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
        n tempor.
		</ParagraphAbout>
		<TouchButton>LET’S GET IN TOUCH</TouchButton>
		<BuildTitle2>WHY BUILD</BuildTitle2>
		<SubTileBuild>WITH HYDRA?</SubTileBuild>
		<ImgArrow2 src={arrow}/>
		<DescriptionParagraphBuild>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</DescriptionParagraphBuild>
		<CardWrapper>
			<DignitiesCard circle={circleCard1} title="SIMULATION" description="Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus 
          libero justo laoreet sit amet vitae." btnText="TRY IT NOW"/>
			<DignitiesCard circle={circleCard2} title="EDUCATION" description="Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus 
          libero justo laoreet sit amet vitae." btnText="TRY IT NOW"/>
			<DignitiesCard circle={circleCard3} title="SELF-CARE" description="Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus 
          libero justo laoreet sit amet vitae." btnText="TRY IT NOW"/>
			<DignitiesCard circle={circleCard4} title="OUTDOOR" description="Vitae sapien pellentesque habitant morbi
          nunc. Viverra aliquet  porttitor rhoncus 
          libero justo laoreet sit amet vitae." btnText="TRY IT NOW"/>
		</CardWrapper>
		<TechnologiesImg src={technologies}/>
		<TechonologiesTitle>TECHNOLOGIES & HARDWARE</TechonologiesTitle>
		<TechonologiesSubTitle>USED BY HYDRA VR.</TechonologiesSubTitle>
		<CircleTechno>
			<TechnoDown src={technoDown}/>
		</CircleTechno>
		<CardWrapper>
			<TechnoLogo src={techlogo1}/>
			<TechnoLogo2 src={techlogo2}/>
			<TechnoLogo3 src={techlogo3}/>
			<TechnoLogo4 src={techlogo4}/>
		</CardWrapper>
		<BuildTitle>
        HOW WE BUILD
		</BuildTitle>
		<BuildSubTitle>
        WITH HYDRA VR?
		</BuildSubTitle>
		<ArrowBuildImg src={arrow}/>
		<BuildDescription>
        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
		</BuildDescription>
		<CardWrapper>
			<ElipseStep>
				<ElipseStepText>
              01
				</ElipseStepText>
				<ElipseTitle>
              3D Conception & Design
				</ElipseTitle>
				<ElipseArrow src={elipseArrow}/>
			</ElipseStep>
			<ElipseStep>
				<ElipseStepText>
              02
				</ElipseStepText>
				<ElipseTitle>
              Interaction Design
				</ElipseTitle>
				<ElipseArrow src={elipseArrow}/>
			</ElipseStep>
			<ElipseStep>
				<ElipseStepText>
              03
				</ElipseStepText>
				<ElipseTitle>
             VR World User Testing
				</ElipseTitle>
				<ElipseArrow src={elipseArrow}/>
			</ElipseStep>
			<ElipseStep>
				<ElipseStepText>
              04
				</ElipseStepText>
				<ElipseTitle>
              Hydra VR Deploy
				</ElipseTitle>
				<ElipseArrow src={elipseArrow}/>
			</ElipseStep>
		</CardWrapper>
		<Footer/>
	</div>;
  
}

export default App;
