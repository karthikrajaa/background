import React from "react";

export default function Footer() {
  return (
    <div>
        <div style={{backgroundColor:"#FAFAFA"}}>
        <div className="container mx-auto pt-20 pb-10" style={{ maxWidth:"80%"}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-5 mx-5">
            
            <div class="md:col-span-2 mb-10 lg:mb-0">
              <p className="text-3xl font-bold" style={{ color: "#2B1DBE"}}>Background Check</p>
            </div>

            <div class="col-span-1 mb-5 md:mb-0" style={{ color: "#7A838E"}}>
              <p className="text-base font-medium mb-2" style={{ color: "#30435C"}}>About</p>
              <p className="text-sm">Product</p>
              <p className="text-sm">Company</p>
              <p className="text-sm">Jobs</p>
              <p className="text-sm">Press</p>
            </div>

            <div class="col-span-1 mb-5 md:mb-0" style={{ color: "#7A838E"}}>
              <p className="text-base font-medium mb-2" style={{ color: "#30435C"}}>Solutions</p>
              <p className="text-sm">Healthcare Organizations</p>
              <p className="text-sm">Transport Companies</p>
              <p className="text-sm">Strategic Partnerships</p>
            </div>

            <div class="col-span-1 mb-5 md:mb-0" style={{ color: "#7A838E"}}>
              <p className="text-base font-medium mb-2" style={{ color: "#30435C"}}>Resources</p>
              <p className="text-sm">Resource Center</p>
              <p className="text-sm">Customer Stories</p>
              <p className="text-sm">Blog</p>
              <p className="text-sm">FAQs</p>
              <p className="text-sm">Legal</p>
            </div>

            <div class="col-span-1 mb-5 md:mb-0" style={{ color: "#7A838E"}}>
              <button className="text-white text-base py-3 px-4 w-48 rounded" style={{ backgroundColor:"#2B1DBE"}}>REQUEST A DEMO</button>
              <p className="text-sm mt-10">hello@roundtriphealth.com</p>
              <p className="text-sm mt-10">Our homes:</p>
              <p className="text-sm mt-10">441 N. 5th Street, Suite 301, Philadelphia, PA 19123</p>
              <p className="text-sm mt-10">1717 E Cary Street, Richmond, VA 23223</p>
            </div>
            
          </div>

          <div className="mt-10">© 2021 Background Check</div>
        </div>
      </div>
    </div>
    )
  }
  