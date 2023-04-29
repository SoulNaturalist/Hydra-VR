import React from "react";
import styled from "styled-components";
import hydra from "../assets/hydra.svg";
import logoHydra from "../assets/logo_hydra.svg";


export default function NavBar() {
	const List = styled.ul`
    display: flex;
    list-style:none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 15px;
    color:white;
    `;
	const Link = styled.li`
    margin:15px;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    position: relative;
    left:20%;
    top:20px;
    font-size:17px;
    `;
	const HydraSvg = styled.img`
    width:80px;
    position: relative;
    left:50px;
    top:20px;
    `;
	const HydraLogoSvg = styled.img`
    position: relative;
    left:40px;
    top:20px;
    width: 102px;
    height:103px;
    `;
	const ButtonContact = styled.li`
    margin:15px;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left:30%;
    top:25px;
    font-size:17px;
    border: 3px solid #fff;
    border-radius:40px;
    width:180px;
    height:50px;
    `;
	const ButtonJoin = styled.li`
    color: #000;
    margin:15px;
    text-transform: uppercase;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left:30%;
    top:25px;
    font-size:17px;
    border-radius:40px;
    width:180px;
    height:50px;
    background: linear-gradient(90deg, #8176AF 0%, #C0B7E8 100%);
    border-radius: 40px;
    `;
	return (
		<div>
			<nav>
				<List>
					<HydraLogoSvg src={logoHydra}/>
					<HydraSvg src={hydra}/>
					<Link>about</Link>
					<Link>services</Link>
					<Link>technologies</Link>
					<Link>how to</Link>
					<ButtonContact>contact us</ButtonContact>
					<ButtonJoin>join hydra</ButtonJoin>
				</List>
			</nav>
		</div>
	);
}
