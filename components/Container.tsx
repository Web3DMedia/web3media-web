import styled from 'styled-components'

const ContainerContainer = styled.div`
    background: url(/images/background.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
    border: none;
  }
    @media (max-width: 550px) {
    border: none;
    background-size: cover;
  }
`
const Container = ({ children }) => {
    return (
        <ContainerContainer className='bg-b1' >
            <div className='max-w-1440 m-auto px-6 md:px-20 xl:px-36'>
                {children}
            </div>
        </ContainerContainer>
    )
}

export default Container


