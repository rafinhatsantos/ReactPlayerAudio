import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import styled from 'styled-components';
//Component imports


const menuNavItems = [
    {
        "title": "Agora na TV",
        "link":"http://www.camarasjc.sp.gov.br/tv-camara/"
    },
    {
        "title": "Sobre",
        "link":"https://www.camarasjc.sp.gov.br/a-camara/conheca-a-camara.php"
    }
];

export const MenuBar = (props) => {
    
    return (
        <Header>
            <Link to={"/openit/"}>
                <Logo>
                    <img src="/openit/images/pictures/tvsjc-logo.png" alt="" />
                </Logo>
            </Link>
            <NavBar>
                {!!menuNavItems &&
                    menuNavItems.map((item, idx) => {
                        return (
                            <a key={"menu-nav-item" + idx} href={item.link}>
                                <NavBarItem >
                                    {item.title}
                                </NavBarItem>
                            </a>
                        )
                    })
                }  
            </NavBar>
           
               
        
        </Header>
    );
}

export default MenuBar;

const Header = styled.div `
    width: auto;
    height: 60px;
    background-color: #224358;
    display: flex;
    justify-content: space-between;
    border-top: 4px solid #34A1DA;

    .a {
        text-decoration: none;
    }
`;
const Logo = styled.div `
    display: flex;
    margin: 7px 15px;
    img {
        width: 55px;
        height: 45px;
    }
`;
const NavBar = styled.div `
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    a {
        height: 100%;
        display: flex;
        align-items: right;
        text-decoration: none;
    }

    a:hover {
        background-color: #193140;
    }
`;

const NavBarItem = styled.div `
    margin: 0px 25px;
    font-size: medium;
    color: white;
`;