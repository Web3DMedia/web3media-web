import Link from 'next/link'
import styled from 'styled-components'

const CookieBannerContainer = styled.div`
background: var(--W);
border-radius: 4px;
width: 654px;
padding: 25px 40px;
position: fixed;
bottom: 20px;
left:20px;
z-index:6;
@media (max-width: 750px) {
border-radius: 0px;
width: 348px;
height: 201px;
padding: 35px 24px 0;
}`
const Button = styled.button`
margin-bottom:35px;
border-bottom:2px solid var(--Main);
@media (max-width: 750px) {
width:100%;
background: var(--Main);
margin-top: 34px;
margin-bottom:0px;
border-bottom: none;
padding: 15px 0;
border-radius: 16px;
}
`
const CookieBanner = ({ closecookies }) => {
    return (
        <CookieBannerContainer className='font-body'>
            <div className="text-w md:flex justify-between align-middle">
                <h1 className='text-black text-lg md:w-4/6'>This website uses cookies to ensure you get the best experience on our website.
                <Link href='/cookies-policies'>
                    <a>
                        <h1 className='text-main underline font-semibold pt-4 md:pt-0'>Learn more</h1>
                    </a>
                </Link>

                </h1>
                <Button className='text-w md:text-base md:text-main font-semibold text-lg' onClick={() => closecookies(false)}>Accept</Button>
            </div>
        </CookieBannerContainer>
    )
}

export default CookieBanner