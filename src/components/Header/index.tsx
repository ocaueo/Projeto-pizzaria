import { ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { styled } from "styled-components";

const Header = () => {

const [cartVisible, setCartVisible] = useState<boolean>(false);


    return(
        <>
            <HeaderContainer>
                <HeaderActions>
                <HeaderLogo>LOGO</HeaderLogo>
                <HeaderMenu>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/cardapio">Cardápio</a>
                    </li>
                    <li>
                        <a href="/promocoes">Promoções</a>
                    </li>
                </HeaderMenu>
                </HeaderActions>
                
                
                <HeaderActions>
                    <HeaderBTN href="/login">Login</HeaderBTN>
                    <ShoppingCart className="icon" size={24} 
                    onClick={() => setCartVisible(!cartVisible)}
                    />
                    <HeaderCart className={cartVisible ? "active" : ""}>

                    </HeaderCart>
                </HeaderActions>

                </HeaderContainer>
        </>
    );
}

const HeaderContainer = styled.header`
    width: 100%;
    background-color: #bd0000;
    padding: 16px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .icon {
        width: 50px;
        height: 50px;
        cursor: pointer;
        border-radius: 25px;
        background-color: #fff;
        padding: 12px;
    }
`;

const HeaderLogo = styled.h1`
    font-size: 44px;
    font-weight: bold;
    color: #FFFFFF;
`;

const HeaderMenu = styled.ul`
    display: flex;
    gap: 16px;

    & li a {
        font-size: 16px;
        color: #ffffff;
        line-height: 40px;
        display: block;
    }
`;

const HeaderActions = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    position: relative;
`;

const HeaderBTN = styled.a`
    display: block;
    height: 46px;
    line-height: 46px;
    padding: 0 26px;
    background-color: #FFFFFF;
    color: #bd0000;
    border-radius: 5px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
`;

const HeaderCart = styled.div`
    width: 250px;
    height: 300px;
    background-color: #ffff00;
    position: absolute;
    top: calc(100% + 16px);
    right: 0;
    border-radius: 5px;
    visibility: hidden;
    transition: all 200ms;

    &.active {
        opacity: 1;
        visibility: visible;
    }

    &::before {
    content: "";
    border: 6px solid transparent;
    border-top: 0;
    border-bottom-color: #ffff00;
    position: absolute;
    bottom: 100%;
    right: 22px;
    }
`;

export default Header;
