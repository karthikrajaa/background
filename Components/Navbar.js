import React from "react";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div>
        <nav style={{ backgroundColor:"#FAFAFA" }}>
        <div className="container mx-auto pt-4" style={{ maxWidth:"90%"}}>
            <div className="flex justify-between flex-wrap  my-auto lg:mx-auto lg:h-16">
                
                <div className="text pt-5">
                    <p className="text-2xl lg:text-3xl font-bold lg:mt-2" style={{ color: "#2B1DBE"}}>Background Check</p>
                </div>

                <div class="block lg:hidden pt-2">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-dark hover:border-dark mt-4 mr-4 lg:mt-0 lg:mr-0" 
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}>
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <div className={"w-full block lg:flex lg:items-center lg:w-auto lg:h-16 ml-4 pt-5" +
                    (navbarOpen ? " flex" : " hidden")
                    }>
                    <div className="text-sm mb-4 lg:mb-0">
                        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-10 xl:mr-16 text-base font-medium"  style={{ color: "#3A3A3A"}}>
                            Home
                        </a>
                        <a href="/Form" className="block mt-4 lg:inline-block lg:mt-0 mr-10 xl:mr-16 text-base font-medium"  style={{ color: "#3A3A3A"}}>
                            Product
                        </a>
                        <a href="/Stripe_payment" className="block mt-4 lg:inline-block lg:mt-0 mr-10 xl:mr-16 text-base font-medium"  style={{ color: "#3A3A3A"}}>
                            Resources
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-10 xl:mr-16 text-base font-medium"  style={{ color: "#3A3A3A"}}>
                            Company
                        </a>
                        <button href="#responsive-header" className="block text-white mt-4 lg:mt-0 text-base lg:inline-block mr-10 xl:mr-16 py-3 px-5 w-48 rounded border" style={{ color:"#2B1DBE"}}>Request a Demo</button>
                        <button href="#responsive-header" className="block text-white mt-4 lg:mt-0 text-base lg:inline-block py-3 px-8 w-48 rounded" style={{ backgroundColor:"#2B1DBE"}}>Login</button>
                    </div>
                </div>
                </div>
                </div>
            </nav>
    </div>
    )
  }
  