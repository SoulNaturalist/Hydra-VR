import React from "react";
import styled from "styled-components";

export default function Footer() {
	const TitleFooter = styled.h2`
    position: relative;
    text-align: center;
    top: 2400px;
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
			<TitleFooter>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </TitleFooter>
		</div>
	);
}
