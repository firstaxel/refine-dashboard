"use client";

import {AiOutlineCheckCircle} from 'react-icons/ai'

import CountUp from "react-countup";

const AboutSection = () => {
  return (
    <section className="py-[100px] w-5/6 mx-auto h-full lg:h-screen flex flex-col items-center justify-center space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center">
        About Dexchange GiftCards
      </h2>
      <p className='text-center'>
        Let us explain everything about Dexchange GiftCards so you can get to
        know us.
      </p>
      <div className="flex flex-col items-center space-y-4 py-6">
        <h3 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-rose-500 to-orange-600 text-transparent">
          Who are we?
        </h3>
        <p className="text-center w-[350px] md:w-[600px] text-sm md:text-base">
          Dexchange GiftCards is a trusted giftcard provider that aims to offer
          its services to all the major market in the world with the aim of
          making major market currencies avaliable to individuals and companies
          alike. With instant redeeming to instant purchase, the giftcard is
          available immediately after purchase.
        </p>
      </div>

      <div className="text-center flex flex-col items-center space-y-2">
        <h2 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-rose-500 to-orange-600 text-transparent">
          Our Stats
        </h2>
        <p>Check our our stats since the launch of Dexchange GiftCards. </p>
        <div className="grid grid-col-1 gap-5 lg:grid-cols-3 justify-items-center w-full">
          <div className="space-y-2 flex flex-col items-center justify-center px-4 rounded-xl text-center w-[200px] h-[200px] ">
            <AiOutlineCheckCircle className="w-14 h-14" />
            <div>
              <span className="text-2xl font-bold font-poppins">
                <CountUp end={100} />{" "}
              </span>
              <p className="font-open-sans">Giftcard Purchased</p>
            </div>
          </div>
          <div className="space-y-2 flex flex-col items-center justify-center px-4 rounded-xl text-center w-[200px] h-[200px] ">
            <AiOutlineCheckCircle className="w-14 h-14" />
            <div>
              <span className="text-2xl font-bold font-poppins">
                <CountUp end={100} />{" "}
              </span>
              <p className="font-open-sans">Giftcard Purchased</p>
            </div>
          </div>
          <div className="space-y-2 flex flex-col items-center justify-center px-4 rounded-xl text-center w-[200px] h-[200px] ">
            <AiOutlineCheckCircle className="w-14 h-14 text-red-500  " />
            <div>
              <span className="text-2xl font-bold font-poppins">
                <CountUp end={100} />{" "}
              </span>
              <p className="font-open-sans">Giftcard Purchased</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
