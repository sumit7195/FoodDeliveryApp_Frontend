import LandingImage from "../assets/landing.png"
import appDowndImage from "../assets/appDownload.png"

const HomePage= ()=> {
  return (
    <div className='flex flex-col gap-12'>
          <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
              <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                 Tuck into a takeaway today
              </h1> 
              <span className="text-xl">Fodd is just click away!</span>
          </div>  
          <div className="grid md:grid-col-2 gap-5">
              <img src={LandingImage} alt="landingImage" />
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <span className="font-bold text-3xl tracking-tighter">
                   Order takeaway even faster!
                  </span>                     
                  <span>
                      Download the MernEats App for Faster ordering and personalised recommendation
                  </span>
                  <img src={appDowndImage} />
              </div>
          </div>
    </div>
  )
}

export default HomePage
