import MetaTag from '../components/MetaTag'
import AccessSection from "../components/AccessSection"
import Container from '../components/Container'
import DesktopNavbar from '../components/DesktopNavbar'
import Footer from '../components/Footer'

const earlyaccess = () => {
   return (
      <div className="font-body">
         <MetaTag tagName='Early Access'/>
         <DesktopNavbar></DesktopNavbar>
         <Container>
            <div className="md:h-full pt-40 relative flex items-center flex-col">
               <AccessSection/>
            </div>
            <Footer></Footer>
         </Container>
      </div>
   )
}

export default earlyaccess