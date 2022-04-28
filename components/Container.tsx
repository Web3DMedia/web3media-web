import styled from 'styled-components'

const ContainerContainer = styled.div`
    background: url(/images/background.png);
    background-size: 500px;
    background-position: center;
    background-repeat: none;
    @media (max-width: 1024px) {
        border: none;
        background-size: 500px;
    }
    @media (max-width: 550px) {
        border: none;
        background-size: 300px;
    }
`
const Container = ({ children }) => {
    return (
        <ContainerContainer className='bg-b1 relative ' >
            <div className='w-full px-6 max-w-[900px] lg:px-7 xl:max-w-[1240px] 2xl:max-w-[1440px] mx-auto 3xl:max-w-[1920px] 4xl:max-w-[2000px]'>
                {children}
            </div>
        </ContainerContainer>
    )
}

export default Container


