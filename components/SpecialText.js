import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

const shine = keyframes`
    0% {
        background-position: 100%;
    }
    100% {
        background-position: -100%;
    }
`

const StyledSpecialText = styled.div(({ speed }) => css`
    color: #b5b5b5a4;
    background: linear-gradient(
        120deg,
        rgba(176, 32, 16, 1) 40%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(176, 32, 16, 1) 60%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    display: inline-block;
    animation: ${shine} ${speed}s linear infinite;
`)

const SpecialText = ({ children, speed }) => {
    return (
        <StyledSpecialText speed={speed}>
            {children}
        </StyledSpecialText>
    )
}

export default SpecialText