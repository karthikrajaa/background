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
      
      <div className ="container mx-auto mt-10 text-center" style={{ maxWidth:"80%"}}>
        <div className="flex justify-center align-center">
          <p className="border text-sm text-center px-2 py-1 rounded-2xl" style={{ color: "#335EEA", backgroundColor:"#F1F4FE"}}>FEATURES</p>
        </div>
        <div>
          <p className="text-4xl font-normal mt-5">Best way to screen your Nannies</p>
          <p className="text-lg font-normal mt-5" style={{ color: "#869AB8"}}>Streamlined process and accurate reports on the Nannies</p>
        </div>

        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

              <div className="col-span-1 xl:mx-10">
                <div className="flex justify-center align-center">
                <img className="w-16" src="/Clock.png" alt="..."></img>
                </div>
                <p className="text-xl font-medium mt-4">Simple Workflow</p>
                <p className="text-base text-gray-400 mt-2">No more data entry, paper forms, and emails.</p>
                <p className="text-base text-gray-400 mt-2">We automate collecting applicant's data, disclosures, checks, and send you alerts.</p>
              </div>
              
              <div className="col-span-1 xl:mx-10">
                <div className="flex justify-center align-center">
                  <img className="w-16" src="/Secure.png" alt="..."></img>
                </div>
                <p className="text-xl font-medium mt-4">Secure Data</p>
                <p className="text-base text-gray-400 mt-2">Stop collecting Social Security Numbers (SSN) & Personal Identifiable Information (PII) on paper, faxes, or email.</p>
                <p className="text-base text-gray-400 mt-2">We secure your data with bank-grade encryption.</p>
              </div>
              
              <div className="col-span-1 xl:mx-10">
                <div className="flex justify-center align-center">
                  <img className="w-16" src="/CreditCard.png" alt="..."></img>
                </div>
                <p className="text-xl font-medium mt-4">Transparent Pricing</p>
                <p className="text-base text-gray-400 mt-2">Stop collecting Social Security Numbers (SSN) & Personal Identifiable Information (PII) on paper, faxes, or email.</p>
              </div>
              
              <div className="col-span-1 xl:mx-10">
                <div className="flex justify-center align-center">
                  <img className="w-16" src="/ClipboardCheck.png" alt="..."></img>
                </div>
                <p className="text-xl font-medium mt-4">FCRA Compliance</p>
                <p className="text-base text-gray-400 mt-2">The FCRA law requires employers to follow certain procedures with consent, adverse event notices, and disputes. We've got you covered!</p>
              </div>

            </div>
        </div>
        
      </div>

      <div style={{ backgroundColor: "#F1F4F8"}}>
        <div className ="container mx-auto text-center" style={{ maxWidth:"70%", marginTop: "100px", padding: "100px 0px"}}>
          <div className="flex justify-center align-center">
            <p className="border text-sm text-center px-2 py-1 rounded-2xl" style={{ color: "#335EEA", backgroundColor:"#F1F4FE"}}>PRODUCTS</p>
          </div>
          <div>
            <p className="text-4xl font-normal mt-5">Background Checks & Drug Testing</p>
            <p className="text-lg font-normal mt-5" style={{ color: "#869AB8"}}>We offer various background checks with add-on reports to meet your requirements.</p>
          </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-10">

          <div className="col-span-1">
            
            <div className="card border shadow-lg bg-white p-10">
              <div className="grid lg:grid-cols-6 gap-4">
                <div className="col-span-1 md:flex md:justify-center md:items-center">
                <img className="w-12" src="/icon1.png" alt="..."></img>
                </div>
                <div className="col-span-5">
                <p className="text-xl font-medium mt-4">SSN Trace & Address History</p>
                <p className="text-base text-gray-400 mt-2">Verify Social Security Number with names, aliases, date of birth, and address history.</p>
                </div>
              </div>
            </div>

            <div className="card border shadow-lg bg-white mt-5 p-10">
              <div className="grid lg:grid-cols-6 gap-4">
                <div className="col-span-1 md:flex md:justify-center md:items-center">
                <img className="w-12" src="/icon2.png" alt="..."></img>
                </div>
                <div className="col-span-5">
                <p className="text-xl font-medium mt-4">Sexual Offender Registries</p>
                <p className="text-base text-gray-400 mt-2">Scan national and state sex-offender databases to ensure your employees are not registered offenders.</p>
                </div>
              </div>
            </div>

            <div className="card border shadow-lg bg-white mt-5 p-10">
              <div className="grid lg:grid-cols-6 gap-4">
                <div className="col-span-1 md:flex md:justify-center md:items-center">
                <img className="w-12" src="/icon3.png" alt="..."></img>
                </div>
                <div className="col-span-5">
                <p className="text-xl font-medium mt-4">Motor Vehicle & Driving Records</p>
                <p className="text-base text-gray-400 mt-2">Check drivers license and motor vehicle records including status, class type, points, and all violations.</p>
                </div>
              </div>
            </div>

            <div className="card border shadow-lg bg-white mt-5 p-10">
              <div className="grid lg:grid-cols-6 gap-4">
                <div className="col-span-1 md:flex md:justify-center md:items-center">
                <img className="w-12" src="/icon4.png" alt="..."></img>
                </div>
                <div className="col-span-5">
                <p className="text-xl font-medium mt-4">Criminal Monitoring</p>
                <p className="text-base text-gray-400 mt-2">Monitor any future criminal records or appearance on watch lists, with alerts, when an employee's background may have changed.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-span-1">
            
            <div className="card border shadow-lg bg-white p-10">
              <div className="grid lg:grid-cols-6 gap-4">
                <div className="col-span-1 md:flex md:justify-center md:items-center">
                <img className="w-12" src="/icon5.png" alt="..."></img>
                </div>
                <div className="col-span-5">
                <p className="text-xl font-medium mt-4">National Criminal Records</p>
                <p className="text-base text-gray-400 mt-2">National criminal multi-jurisdictional search across court and correctional records for inmates, probation, parolees, arrests, and warrants.</p>
                </div>
              </div>
            </div>

            <div className="card border shadow-lg bg-white mt-5 p-10">
              <div className="grid lg:grid-cols-6 gap-4">
                <div className="col-span-1 md:flex md:justify-center md:items-center">
                <img className="w-12" src="/icon6.png" alt="..."></img>
                </div>
                <div className="col-span-5">
                <p className="text-xl font-medium mt-4">County & Statewide Criminal Search</p>
                <p className="text-base text-gray-400 mt-2">The most accurate manual in-person search of criminal court records available for all counties in the United States</p>
                </div>
              </div>
            </div>

            <div className="card border shadow-lg bg-white mt-5 p-10">
              <div className="grid lg:grid-cols-6 gap-4">
                <div className="col-span-1 md:flex md:justify-center md:items-center">
                <img className="w-12" src="/icon7.png" alt="..."></img>
                </div>
                <div className="col-span-5">
                <p className="text-xl font-medium mt-4">Watch List & Compliance Screening</p>
                <p className="text-base text-gray-400 mt-2">Detect risky or sanctioned individuals from Federal and International agencies such as FBI, terrorist watch lists, OFAC, & INTERPOL.</p>
                </div>
              </div>
            </div>

            <div className="card border shadow-lg bg-white mt-5 p-10">
              <div className="grid lg:grid-cols-6 gap-4">
                <div className="col-span-1 md:flex md:justify-center md:items-center">
                <img className="w-12" src="/icon8.png" alt="..."></img>
                </div>
                <div className="col-span-5">
                <p className="text-xl font-medium mt-4">Drug Testing by LabCorp ™</p>
                <p className="text-base text-gray-400 mt-2">In partnership with LabCorp™, we have over 2000+ facilities nationwide to screen for drugs.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
      </div>

      <div className ="container mx-auto" style={{ maxWidth:"80%", marginTop: "100px"}}>
        <div className="flex justify-center align-center">
          <p className="border text-sm text-center px-2 py-1 rounded-2xl" style={{ color: "#335EEA", backgroundColor:"#F1F4FE"}}>HOW IT WORKS</p>
        </div>
        <div>
          <p className="text-4xl font-normal mt-5 text-center">Request a Background Check with One-Click</p>
          <p className="text-lg font-normal mt-5 text-center" style={{ color: "#869AB8"}}>All you need is an email address. We take care of the rest.</p>
        </div>

        <div className="container mx-auto mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

              <div className="col-span-1 xl:mx-10">
              <div className="w-16 h-16 flex justify-center items-center" style={{ color: "#fff", backgroundColor:"#335EEA"}}>1</div>
                <p className="text-xl font-medium mt-4">Choose a Report</p>
                <p className="text-base text-gray-400 mt-2">We offer multiple background checks and packages for different industries and needs.</p>
              </div>
              
              <div className="col-span-1 xl:mx-10">
              <div className="w-16 h-16 flex justify-center items-center" style={{ color: "#fff", backgroundColor:"#335EEA"}}>2</div>
                <p className="text-xl font-medium mt-4">Enter Email Addresses</p>
                <p className="text-base text-gray-400 mt-2">It's that's simple! We'll send them a link to complete the application and enter their personal information, safely and securely.</p>
              </div>
              
              <div className="col-span-1 xl:mx-10">
                <div className="w-16 h-16 flex justify-center items-center" style={{ color: "#fff", backgroundColor:"#335EEA"}}>3</div>
                <p className="text-xl font-medium mt-4">Create Your Account</p>
                <p className="text-base text-gray-400 mt-2">After you place an order, you'll set your password and login to your account and dashboard. You can order more reports and track the status of current orders.</p>
              </div>
              
              <div className="col-span-1 xl:mx-10">
              <div className="w-16 h-16 flex justify-center items-center" style={{ color: "#fff", backgroundColor:"#335EEA"}}>4</div>
                <p className="text-xl font-medium mt-4">View Reports</p>
                <p className="text-base text-gray-400 mt-2">All your applicants and reports are in your dashboard. Most are instant once the applicant fills out their information. If the report is delayed, you'll get an email alert when the report is ready.</p>
              </div>

            </div>
        </div>
        
      </div>

      <div>
        <div className="pricing mb-20" style={{ marginTop: "100px"}}>
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
