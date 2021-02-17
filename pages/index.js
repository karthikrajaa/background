import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Background Check</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <div style={{backgroundColor:"#FAFAFA"}}>
        <div className="container mx-auto pt-20" style={{ maxWidth:"80%", paddingBottom:"150px"}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mx-5 md:mt-0 md:mx-0">
            <div class="col-span-1 flex flex-col justify-center h-full">
              <p className="text-4xl font-normal">Nanny Care Background Check</p>
              <button className="text-white text-base py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>PLANS</button>
            </div>
            <div class="col-span-1">
              <img className="w-full" src="/background-1.png" alt="..."></img>
            </div>
          </div>
        </div>
      </div>
      
      <div className ="container mx-auto p-10 text-center border shadow-lg" style={{ maxWidth:"80%", backgroundColor:"#fff", marginTop:"-120px"}}>
        <p className="text-xl" style={{ color: "#676975"}}>Trusted by the best in care</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-10">
          <div class="col-span-1 flex flex-col justify-center items-center">
            <img className="p-2" src="/company1.png" alt="..."></img>
          </div>
          <div class="col-span-1 flex flex-col justify-center items-center">
            <img className="p-2" src="/company2.png" alt="..."></img>
          </div>
          <div class="col-span-1 flex flex-col justify-center items-center">
            <img className="p-2" src="/company3.png" alt="..."></img>
          </div>
          <div class="col-span-1 flex flex-col justify-center items-center">
            <img className="p-2" src="/company4.png" alt="..."></img>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto pt-20 pb-20 mb-20" style={{ maxWidth:"80%"}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mx-5 md:mt-0 md:mx-0">
          <div class="col-span-1 flex flex-col justify-center h-full">
            <p className="text-4xl font-normal">Reduce no-shows.</p>
            <p className="text-4xl font-normal">Increase access to care.</p>
            <p className="text-lg font-light pt-2" style={{ color: "#676975"}}>Our healthcare partners report patient no-show rates lower than 4% compared to industry averages of over 20%.</p>
            <button className="text-white text-base py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>Here's How</button>
          </div>
          <div class="col-span-1">
            <img className="w-full" src="/background-2.png" alt="..."></img>
          </div>
        </div>
      </div>

      <div style={{backgroundColor:"#FAFAFA"}}>
        <div className="container mx-auto pt-20 pb-20 mb-20" style={{ maxWidth:"80%"}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mx-5 md:mt-0 md:mx-0">
            
            <div class="col-span-1">
              <img className="w-full" src="/background-3.png" alt="..."></img>
            </div>

            <div class="col-span-1 flex flex-col justify-center h-full lg:ml-20">
              <p className="text-4xl font-normal">Save time and money.</p>
              <p className="text-lg pt-2" style={{ color: "#676975"}}>Less time spent booking rides means more freedom for care coordinators to operate at the top of their licenses.</p>
              <button className="text-white text-base py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>Time Is Money</button>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-20 pb-20 mb-20" style={{ maxWidth:"80%"}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mx-5 md:mt-0 md:mx-0">
          <div class="col-span-1 flex flex-col justify-center h-full">
            <p className="text-4xl font-normal">Book all vehicles,</p>
            <p className="text-4xl font-normal">all in one place.</p>
            <p className="pt-2 text-lg" style={{ color: "#676975"}}>Rideshare, medical sedans, wheelchair vans, stretcher vans,<br/> and ALS/BLS -- one workflow.</p>
            <button className="text-white py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>Here's How</button>
          </div>
          <div class="col-span-1">
            <img className="w-full" src="/background-4.png" alt="..."></img>
          </div>
        </div>
      </div>


      <div>
        <div className="pricing mb-20">
          <p className="text-4xl text-center">Pricing</p>
          <p className="text-xl text-center mt-10" style={{ color: "#676975"}}>Select the best packaging for your needs</p>

          <div className="container mx-auto mt-10" style={{ maxWidth:"70%"}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 mx-5 md:mt-0 md:mx-0">
              
              <div className="col-span-1">
                <div className="border-gray-300 shadow-lg py-10">
                  <div className="flex justify-center align-center">
                    <p className="border text-sm text-center px-2 py-1 rounded-2xl" style={{ color: "#506690", backgroundColor:"#EEF0F4"}}>BASIC</p>
                  </div>
                  
                  <div className="mt-10 lg:px-10 2xl:px-20 px-5" style={{ color: "#161C2D" }}>
                    <p className="text-lg font-medium">Social Security Number (SSN) trace</p>
                    <p className="text-lg font-medium mt-5">Addresses, Names, & DOB verification</p>
                    <p className="text-lg font-medium mt-5">National database criminal records search*</p>
                    <p className="text-lg font-medium mt-5">National sex offender search</p>
                    <p className="text-lg font-medium mt-5" style={{ color: "#506690" }}>Global, US, & state watchlists</p>
                    <p className="text-lg font-medium mt-5" style={{ color: "#506690" }}>County-level criminal search**</p>
                    <p className="text-center text-6xl font-semibold mt-10" style={{ color: "#384C74"}}><span className="text-3xl">$</span>19.99</p>
                    <p className="text-center text-lg font-medium mt-2" style={{ color: "#869AB8"}}>per applicant</p>
                  </div>
                  
                  <div className="flex justify-center align-center mt-10">
                    <button className="border-none shadow text-2xl h-16 bg-gray-200 rounded-xl md:px-20 px-5" style={{ color: "#506690" }}>Standard</button>
                  </div>

                </div>
              </div>

              <div className="col-span-1">
                <div className="border-gray-300 shadow-lg py-10">
                  <div className="flex justify-center align-center">
                    <p className="border text-sm font-medium text-center px-2 py-1 rounded-2xl" style={{ color: "#335EEA", backgroundColor:"#DEE2EF"}}>RECOMMENDED</p>
                  </div>
                  
                  <div className="mt-10 lg:px-10 2xl:px-20 px-5" style={{ color: "#161C2D" }}>
                    <p className="text-lg font-medium">Social Security Number (SSN) trace</p>
                    <p className="text-lg font-medium mt-5">Addresses, Names, & DOB verification</p>
                    <p className="text-lg font-medium mt-5">National database criminal records search*</p>
                    <p className="text-lg font-medium mt-5">National sex offender search</p>
                    <p className="text-lg font-medium mt-5" style={{ color: "#506690" }}>Global, US, & state watchlists</p>
                    <p className="text-lg font-medium mt-5" style={{ color: "#335EEA" }}>Unlimited county criminal record search based on 7-year address history**</p>
                    <p className="text-center text-6xl font-semibold mt-10" style={{ color: "#161C2D"}}><span className="text-3xl">$</span>39.99</p>
                    <p className="text-center text-lg font-medium mt-2" style={{ color: "#869AB8"}}>per applicant</p>
                  </div>
                  
                  <div className="flex justify-center align-center mt-10">
                    <button className="border-none shadow text-2xl h-16 rounded-xl md:px-20 px-5" style={{ color: "#ffffff", backgroundColor:"#335EEA" }}>Economy</button>
                  </div>

                </div>
              </div>

              <div className="col-span-1">
                <div className="border-gray-300 shadow-lg py-10">
                  <div className="flex justify-center align-center">
                    <p className="border text-sm text-center px-2 py-1 rounded-2xl" style={{ color: "#506690", backgroundColor:"#EEF0F4"}}>DETAILED</p>
                  </div>
                  
                  <div className="mt-10 lg:px-10 2xl:px-20 px-5" style={{ color: "#161C2D" }}>
                    <p className="text-lg font-medium">Social Security Number (SSN) trace</p>
                    <p className="text-lg font-medium mt-5">Addresses, Names, & DOB verification</p>
                    <p className="text-lg font-medium mt-5">National database criminal records search*</p>
                    <p className="text-lg font-medium mt-5">National sex offender search</p>
                    <p className="text-lg font-medium mt-5" style={{ color: "#506690" }}>Global, US, & state watchlists</p>
                    <p className="text-lg font-medium mt-5" style={{ color: "#506690" }}>1 Single County-level search included**</p>
                    <p className="text-center text-6xl font-semibold mt-10" style={{ color: "#384C74"}}><span className="text-3xl">$</span>29.99</p>
                    <p className="text-center text-lg font-medium mt-2" style={{ color: "#869AB8"}}>per applicant</p>
                  </div>
                  
                  <div className="flex justify-center align-center mt-10">
                    <button className="border-none shadow text-2xl h-16 bg-gray-200 rounded-xl md:px-20 px-5" style={{ color: "#335EEA" }}>Premium</button>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div style={{backgroundColor:"#FAFAFA"}}>
        <div className="container mx-auto pt-20 pb-20 mb-20" style={{ maxWidth:"80%"}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mx-5 md:mt-0 md:mx-0">
            
            <div class="col-span-1">
              <img className="w-full" src="/background-5.png" alt="..."></img>
            </div>

            <div class="col-span-1 flex flex-col justify-center h-full lg:ml-20">
              <p className="text-4xl font-normal">Get better insights.</p>
              <p className="text-4xl font-normal">Deliver better outcomes.</p>
              <p className="text-lg font-light pt-2">Leverage data on all patient rides for additional insights and improved planning.</p>
              <button className="text-white py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>Learn More</button>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-20 pb-20 mb-20" style={{ maxWidth:"80%"}}>
        <div className="text-4xl text-center">What people are saying about Roundtrip:</div>
      </div>


      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5 mx-5 md:mt-0 md:mx-0">
        
          <div class="col-span-1">
            
          </div>
        
          <div class="col-span-1">

          </div>
          
          <div class="col-span-1">

          </div>
          
          <div class="col-span-1">

          </div>

        </div>
      </div>

      <Footer/>
      
    </div>
  )
}
