import Head from 'next/head'

interface IProps{
   tagName: string
}
const MetaTag = ({tagName}: IProps) => {
   return (
      <>
         <Head>
            <title>Web3Media {tagName}</title>
            <meta
            name="description"
            content="Creating, building and developing animations and creators resources for the new web."/>
            <link rel="icon" href="/images/logo.svg" />

            <meta name="title" content="Ambitious Creative Web3 Studio."></meta>
            <meta name="description" content="Creating, building and developing animations and creators resources for the new web."></meta>

            <meta property="og:type" content="website"></meta>
            <meta property="og:url" content="https://web3d.media/"></meta>
            <meta property="og:title" content="Ambitious Creative Web3 Studio."></meta>
            <meta property="og:description" content="Creating, building and developing animations and creators resources for the new web."></meta>
            <meta property="og:image" content="https://web3d.media/images/meta-image.jpg"></meta>


            <meta property="twitter:card" content="summary_large_image"></meta>
            <meta property="twitter:url" content="https://web3d.media/"></meta>
            <meta property="twitter:title" content="Ambitious Creative Web3 Studio."></meta>
            <meta property="twitter:description" content="Creating, building and developing animations and creators resources for the new web."></meta>
            <meta property="twitter:image" content="https://web3d.media/images/meta-image.jpg"></meta>
         </Head>
      </>
   )
}

export default MetaTag