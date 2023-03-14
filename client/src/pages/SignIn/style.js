import styled from 'styled-components'

export const Container = styled.div`

    h1 {
        margin-top: 2rem;
        text-align: center;
    }

    form {
        max-width: 26rem;
        padding-top: 5rem;
        margin: 0 auto;
        display: grid;
        gap: 2.4rem;
        align-items: center;
    }

    .error {
        color: red;
        display: block;
        position: absolute;
    }

    input {
        width: 100%;
        padding: .8rem;
        border-radius: .8rem;
    }

    button {
        width: 100%;
        padding: .8rem;
        border-radius: .8rem;
        border: 0;
        cursor: pointer;
        color: white;
        background: ${({theme}) => theme.colors.greenLight};
    }
`