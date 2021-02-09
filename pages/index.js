import Head from 'next/head'
import Navbar from '../Components/Navbar'

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
              <button className="text-white py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>PLANS</button>
            </div>
            <div class="col-span-1">
              <img className="w-full" src="/background-1.png" alt="..."></img>
            </div>
          </div>
        </div>
      </div>
      
      <div className ="container mx-auto p-10 text-center border shadow-lg" style={{ maxWidth:"80%", backgroundColor:"#fff", marginTop:"-120px"}}>
        <p className="text-xl">Trusted by the best in care</p>
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
            <p className="text-xl font-light pt-2">Our healthcare partners report patient no-show rates lower than 4% compared to industry averages of over 20%.</p>
            <button className="text-white py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>Here's How</button>
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
              <p className="text-xl font-light pt-2">Less time spent booking rides means more freedom for care coordinators to operate at the top of their licenses.</p>
              <button className="text-white py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>Time Is Money</button>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-20 pb-20 mb-20" style={{ maxWidth:"80%"}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mx-5 md:mt-0 md:mx-0">
          <div class="col-span-1 flex flex-col justify-center h-full">
            <p className="text-4xl font-normal">Book all vehicles,</p>
            <p className="text-4xl font-normal">all in one place.</p>
            <p className="text-xl font-light pt-2">Rideshare, medical sedans, wheelchair vans, stretcher vans,<br/> and ALS/BLS -- one workflow.</p>
            <button className="text-white py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>Here's How</button>
          </div>
          <div class="col-span-1">
            <img className="w-full" src="/background-4.png" alt="..."></img>
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
              <p className="text-xl font-light pt-2">Leverage data on all patient rides for additional insights and improved planning.</p>
              <button className="text-white py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>Learn More</button>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-20 pb-20 mb-20" style={{ maxWidth:"80%"}}>
        <div className="text-4xl text-center">What people are saying about Roundtrip:</div>
      </div>
      
      <div style={{backgroundColor:"#FAFAFA"}}>
        <div className="container mx-auto pt-20 pb-10" style={{ maxWidth:"80%"}}>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-5 mx-5 md:mt-0 md:mx-0">
            
            <div class="col-span-2">
              <p className="text-3xl font-bold" style={{ color: "#2B1DBE"}}>Background Check</p>
            </div>

            <div class="col-span-1" style={{ color: "#7A838E"}}>
              <p className="text-md font-medium mb-5" style={{ color: "#30435C"}}>About</p>
              <p className="text-md">Product</p>
              <p className="text-md">Company</p>
              <p className="text-md">Jobs</p>
              <p className="text-md">Press</p>
            </div>

            <div class="col-span-1" style={{ color: "#7A838E"}}>
              <p className="text-md font-medium mb-5" style={{ color: "#30435C"}}>Solutions</p>
              <p className="text-md">Healthcare Organizations</p>
              <p className="text-md">Transport Companies</p>
              <p className="text-md">Strategic Partnerships</p>
            </div>

            <div class="col-span-1" style={{ color: "#7A838E"}}>
              <p className="text-md font-medium mb-5" style={{ color: "#30435C"}}>Resources</p>
              <p className="text-md">Resource Center</p>
              <p className="text-md">Customer Stories</p>
              <p className="text-md">Blog</p>
              <p className="text-md">FAQs</p>
              <p className="text-md">Legal</p>
            </div>

            <div class="col-span-1">
              <button className="text-white py-3 px-4 w-48 rounded" style={{ backgroundColor:"#2B1DBE"}}>REQUEST A DEMO</button>
              <p className="text-md mt-10">hello@roundtriphealth.com</p>
              <p className="text-md mt-10">Our homes:</p>
              <p className="text-md mt-10">441 N. 5th Street, Suite 301, Philadelphia, PA 19123</p>
              <p className="text-md mt-10">1717 E Cary Street, Richmond, VA 23223</p>
            </div>
            

          </div>

          <div className="mt-10">© 2021 Background Check</div>
        </div>
      </div>
      
    </div>
  )
}
