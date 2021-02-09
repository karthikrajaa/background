export default function Navbar() {

  return (
    <div>
        <nav>
            <div className="flex justify-between flex-wrap lg:container my-auto lg:mx-auto lg:h-16" style={{ maxWidth:"80%"}}>
                
                <div className="text pt-5">
                    <p className="text-3xl font-bold mt-4" style={{ color: "#2B1DBE"}}>Background Check</p>
                </div>

                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-red-400 hover:text-white hover:border-white mt-4 mr-4 lg:mt-0 lg:mr-0" type="button">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <div className="w-full block lg:flex lg:items-center lg:w-auto lg:h-16 ml-4 pt-10" 
                    >
                    <div className="text-sm mb-4 lg:mb-0">
                        <a href="#/" className="block mt-4 lg:inline-block lg:mt-0 mr-16 text-lg font-medium"  style={{ color: "#3A3A3A"}}>
                            Solution
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-16 text-lg font-medium"  style={{ color: "#3A3A3A"}}>
                            Product
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-16 text-lg font-medium"  style={{ color: "#3A3A3A"}}>
                            Resources
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-16 text-lg font-medium"  style={{ color: "#3A3A3A"}}>
                            Company
                        </a>
                        <button href="#responsive-header" className="block text-white text-lg lg:inline-block mr-16 py-3 px-5 w-48 rounded border" style={{ color:"#2B1DBE"}}>Request a Demo</button>
                        <button href="#responsive-header" className="block text-white lg:inline-block py-3 px-8 w-48 rounded" style={{ backgroundColor:"#2B1DBE"}}>Login</button>
                    </div>
                </div>
                </div>
            </nav>
    </div>
    )
  }
  