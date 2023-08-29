import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { styled } from "styled-components";

const Pesquisa = () =>{

    const [pesquisaFocus, setPesquisaFocus] = useState<boolean>(false);
    return(
        <>
            <PesquisaContainer className={pesquisaFocus ? "active" : ""}>
                <PesquisaInput 
                placeholder="Quero uma pizza..."
                onFocus={() =>{ setPesquisaFocus(true) }}
                onBlur={() =>{setPesquisaFocus(false) }}
                />
                <PesquisaBTN>
                    <MagnifyingGlass size={22} color="white" />
                </PesquisaBTN>
            </PesquisaContainer>
        </>
    );
}

const PesquisaContainer = styled.div`
    width: 600px;
    height: 60px;
    border-radius: 35px;
    border: 4px solid #f4796b;
    display: flex;
    align-items: center;
    margin: 80px auto;
    overflow: hidden;
    transition: all ease 200ms;

    &.active {
        border-color: #6b0504;
    }
`;

const PesquisaInput = styled.input`
    flex: 1;
    height: 50px;
    /* text-align: center; */
    padding-left: 30px;
`;

const PesquisaBTN = styled.button`
    width: 44px;
    height: 45px;
    border-radius: 25px;
    background-color: #001514;
    margin-right: 6px;
`;

export default Pesquisa;