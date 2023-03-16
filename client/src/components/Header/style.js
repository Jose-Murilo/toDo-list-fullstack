import styled from "styled-components";

export const Container = styled.div`
    height: 10rem;
    background: ${({theme}) => theme.colors.greenBlack};
    color: white;
    
    .navContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .containerToggle {
        display: flex;
        align-items: center;
    }

    a {
        color: white;
        text-decoration: none;
    }

    .toggleButton {
        background: none;
        border: none;
        color: white;
    }

    .menuIcon {
        font-size: 2.4rem;
        cursor: pointer;
    }
`