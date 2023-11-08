import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #3a3937;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 5px;

    animation: blink 1s infinite;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`

const Error = ({children}) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error
