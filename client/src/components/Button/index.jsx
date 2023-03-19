import { Navigate } from 'react-router-dom'
import { ButtonStyle } from './style'

export function Button({title, isToken}) {
    return (
        <ButtonStyle>{title}</ButtonStyle>
    )
}