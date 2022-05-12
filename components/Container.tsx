import styled from 'styled-components'

const ContainerContainer = styled.div`
`
const Container = ({ children }) => {
    return (
        <ContainerContainer className='relative' >
            <div className='w-full px-6 max-w-[900px] lg:px-7 xl:max-w-[1240px] 2xl:max-w-[1440px] mx-auto 3xl:max-w-[1920px] 4xl:max-w-[2000px]'>
                {children}
            </div>
        </ContainerContainer>
    )
}

export default Container


