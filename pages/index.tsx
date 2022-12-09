import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { LandingPageMainHeader, LandingPageSubHeader, LandingPageButton } from 'styled/landingPage'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="We, the LTD softway company, hereby give you our business calculator for making your business protifable"/>
      </Head>
      <motion.div layout animate={{
        x: ["-100%", "0%"]
      }} 
      initial={{
        x: "-100%",
      }}
      transition={{
        duration: 0.4,
        delay: 0.1,
        repeat: 0
      }}>
        <LandingPageMainHeader className="block-center">
          Business Calculator
        </LandingPageMainHeader>
      </motion.div>
      
      <motion.div layout 
      initial={{
        x: "100%",
      }}
      animate={{
        x: ["100%", "0%"]
      }} transition={{
        duration: 0.4,
        delay: 0.1,
        repeat: 0
      }}>
        <LandingPageSubHeader className="block-center">
          Our gifts for your business
        </LandingPageSubHeader>
      </motion.div>
      <motion.div layout 
      initial={{
        scale: "0",
      }}
      animate={{
        scale: ["0", "1"]
      }} 
      transition={{
        duration: 0.4,
        delay: 0.2,
        repeat: 0
      }}>
        <Link href="/calculator">
          <LandingPageButton className="block-center" type="button">
            Launch the calculator
          </LandingPageButton>
        </Link>
      </motion.div>
    </>
  )
}

export default Home
