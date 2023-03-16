import styled from "styled-components";

export const Container = styled.div`
    height: 10rem;
    background: ${({theme}) => theme.colors.greenBlack};
    color: white;
    
    .navContainer {
        display: flex;

    }

    a {
        color: white;
        text-decoration: none;
    }
`