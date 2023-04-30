import React from "react";
import styled from "styled-components";
import logo from "../assets/logo_hydra.svg";
import line from "../assets/line.svg";
import facebook from "../assets/facebook_icon.svg";
import twitter from "../assets/twitter_icon.svg";
import linkedin from "../assets/linkedin_icon.svg";
import youtube from "../assets/youtube_icon.svg";
import instagram from "../assets/instagram_icon.svg";
import pinterest from "../assets/pinterest_icon.svg";
import vector from "../assets/vector.svg";

export default function Footer() {
	const FooterLogo = styled.img`
  position:relative;
  width: 185px;
  height: 187px;
  left: 86px;
  top: 2800px;
  filter: drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.25));
  `;
	const FooterLine = styled.img`
  position:relative;
  height: 196px;
  left: 371px;
  top:2800px;
  `;
	const FooterCategory = styled.p`
  position:relative;
  width: 134px;
  height: 192px;
  left:660px;
  top:2620px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  `;
	const FooterLine2 = styled.img`
  position:relative;
  height: 196px;
  left:700px;
  top:2800px;
  `;
	const FooterCategory2 = styled.p`
  position:relative;
  width: 109px;
  height: 149px;
  left:950px;
  top:2412px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: #FFFFFF;
  `;
	const FooterLine3 = styled.img`
  position:relative;
  height: 196px;
  left:1170px;
  top:2210px;
  `;
	const SocialTitle = styled.h2`
  position:relative;
  width: 206px;
  height: 20px;
  left: 1246px;
  top:2030px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  `;
	const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  `;
	const Icon = styled.img`
  position:relative;
  width: 32px;
  height: 32px;
  left: 1235px;
  top:2030px;
  margin:10px;
  `;
	const BuildButon = styled.button`
  position:relative;
  width: 214px;
  height: 48px;
  left: 1245px;
  top:2050px;

  background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
  border-radius: 40px;
  border: none; 
  outline: none;
  `;
	const Vector = styled.img`
  position:relative;
  width: 1269px;
  top:2150px;
  display:block;
  margin:0 auto;
  `;
	const TitleFooter = styled.h2`
  position: relative;
  text-align: center;
  top: 2200px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.13em;
  color: #FFFFFF;
  `;
	return (
		<div>
			<FooterLogo src={logo}/>
			<FooterLine src={line}/>
			<FooterLine2 src={line}/>
			<FooterCategory>
        ABOUT
        SERVICES
        TECHNOLOGIES
        HOW TO
        JOIN HYDRA
			</FooterCategory>
			<FooterCategory2>
        F.A.Q
        SITEMAP
        CONDITIONS
        LICENSES
			</FooterCategory2>
			<FooterLine3 src={line}/>
			<SocialTitle>SOCIALIZE WITH HYDRA</SocialTitle>
			<CardWrapper>
				<Icon src={facebook}/>
				<Icon src={twitter}/>
				<Icon src={linkedin}/>
				<Icon src={youtube}/>
				<Icon src={instagram}/>
				<Icon src={pinterest}/>
			</CardWrapper>
			<BuildButon>BUILD YOUR WORLD</BuildButon>
			<Vector src={vector}/>
			<TitleFooter>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </TitleFooter>
		</div>
	);
}
