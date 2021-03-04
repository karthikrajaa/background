import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Form() {
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
              <p className="text-4xl font-normal">Form</p>
              <button className="text-white text-base py-3 px-8 w-48 rounded mt-10" style={{ backgroundColor:"#2B1DBE"}}>PLANS</button>
            </div>
            <div class="col-span-1">
              <img className="w-full" src="/background-3.png" alt="..."></img>
            </div>
          </div>
        </div>
      </div>
      
      


      <div className="my-20 flex justify-center">
        <div class="mt-10 sm:mt-0 md:w-2/4 w-2/3">
            <div class="mt-5 md:mt-0">
              <p className="text-4xl font-normal mt-5 mb-10 text-center">Application Form</p>
              <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-3">
                        <label for="first_name" class="block text-lg font-normal text-gray-700">First name</label>
                        <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-lg border border-gray-400 rounded-md"/>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label for="last_name" class="block text-lg font-normal text-gray-700">Last name</label>
                        <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border border-gray-400 rounded-md"/>
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label for="email_address" class="block text-lg font-normal text-gray-700">Email address</label>
                        <input type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border border-gray-400 rounded-md"/>
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <label for="country" class="block text-lg font-normal text-gray-700">Country / Region</label>
                        <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>

                      <div class="col-span-6">
                        <label for="street_address" class="block text-lg font-normal text-gray-700">Street address</label>
                        <input type="text" name="street_address" id="street_address" autocomplete="street-address" class="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border border-gray-400 rounded-md"/>
                      </div>

                      <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label for="city" class="block text-lg font-normal text-gray-700">City</label>
                        <input type="text" name="city" id="city" class="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border border-gray-400 rounded-md"/>
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label for="state" class="block text-lg font-normal text-gray-700">State / Province</label>
                        <input type="text" name="state" id="state" class="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border border-gray-400 rounded-md"/>
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label for="postal_code" class="block text-lg font-normal text-gray-700">ZIP / Postal</label>
                        <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border border-gray-400 rounded-md"/>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-normal rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>

      <Footer/>
      
    </div>
  )
}