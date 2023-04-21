import { BsClock, BsFillPersonFill } from 'react-icons/all'
import { RiGlobalFill } from 'react-icons/ri'
import { AiOutlineWifi } from 'react-icons/ai'

const FeaturesSection = () => {
  return (
    <section className="md:h-screen h-full flex flex-col items-center space-y-4 text-center">
        <h2 className="text-4xl font-bold font-poppins">Features</h2>
        <p>Check out the features of using <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-600" > Dexchange GiftCards  </span>to put a smile on your loved ones.</p>
        <div className="grid justify-items-center w-full mx-auto grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-2 flex flex-col items-center justify-center px-4 rounded-xl shadow-md  text-center w-[300px] h-[300px] ">
            <RiGlobalFill className="w-16 h-16 text-red-500"/>
            <h2 className="font-bold text-2xl">Globally Available</h2>
            <p>Our giftcards can be purchased from our website from anywhere around the world.</p>
          </div>
          <div className="space-y-2 flex flex-col items-center justify-center px-4 rounded-xl shadow-md text-center w-[300px] h-[300px] ">
            <AiOutlineWifi className="w-16 h-16 text-red-500"/>
            <h2 className="font-bold text-2xl">24/7 Available</h2>
            <p>After purchase, it can be redeemed for cash immediately or at aanytime of the person choice.</p>
          </div>
          <div className="space-y-2 flex flex-col items-center justify-center px-4 rounded-xl shadow-md text-center w-[300px] h-[300px]">
            <BsClock className="w-16 h-16 text-red-500"/>
            <h2 className="font-bold text-2xl">No Expiration Date</h2>
            <p>Our giftcards does not expire, meaning can be redeemed at any time.</p>
          </div>
          <div className="space-y-2 flex flex-col items-center justify-center px-4 rounded-xl shadow-md text-center w-[300px] h-[300px]">
            <BsFillPersonFill className="w-16 h-16 text-red-500 "/>
            <h2 className="font-bold text-2xl">Customizable</h2>
            <p>We have designs that can be easily customized to your preference</p>
          </div>
        </div>
      </section>
      
  )
}

export default FeaturesSection