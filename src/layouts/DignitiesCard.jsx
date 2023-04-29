/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export default function DignitiesCard(props) {
	const Card = styled.div`
  position: relative;
  top: 2150px;
  background: radial-gradient(50% 50% at 50% 50%, #433D60 0%, #211E2E 100%);
  border-radius: 40px;
  height: 511px;
  width: 380px;
  margin:15px;
  left:85px;
  `; 
	const Circle = styled.img`
  position: absolute;
  width: 190.92px;
  height: 190.92px;
  left: 100px;
  top:65px;
  `;
	const TitleCard = styled.h2`
  position: absolute;
  width: 160px;
  height: 29px;
  left: 120px;
  top: 280px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #FFFFFF;
  `;
	const DescriptionCard = styled.p`
  position: absolute;
  width: 250px;
  height: 57px;
  left: 70px;
  top: 350px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  color: #FFFFFF;
  `;
	const ButtonCard = styled.button`
  position: absolute;
  width: 154px;
  height: 48px;
  left: 118px;
  top: 440px;
  background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
  border-radius: 40px;
  border: none; 
  outline: none;
  `;
	return (
		<Card>
			<Circle src={props.circle}/>
			<TitleCard>{props.title}</TitleCard>
			<DescriptionCard>{props.description}</DescriptionCard>
			<ButtonCard>{props.btnText}</ButtonCard>
		</Card>
	);
}
