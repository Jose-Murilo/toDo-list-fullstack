import styled from "styled-components"

export const ButtonStyle = styled.button`
    width: 100%;
    padding: .8rem;
    border-radius: .8rem;
    border: 0;
    cursor: pointer;
    color: white;
    background: ${({theme}) => theme.colors.greenLight};
`