import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-5">
      <section className="h-full flex items-center justify-center flex-col relative">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-2xl  md:text-4xl text-center pt-[100px] ">
            Put a Smile on Loved One or <br /> Friends and Family today.
          </h1>
          <p className="text-center md:text-base text-sm md:w-[500px]">
            Create giftcard today and put a smile on your loved ones, family or
            friends, even co-workers. <br />
            Our giftcards are designed for them in mind.
          </p>
          <button
            className="p-4 rounded-xl text-white shadow-md
      bg-gradient-to-r from-rose-500 to-orange-600 ripple-bg-gray-300 flex space-x-2
      "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <Link href="/create">Create GiftCard</Link>
          </button>
        </div>

        <div className="pt-[150px]">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 animate-bounce pb-2 text-rose-500   "
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </section>
      <section className="h-screen">Features</section>
    </main>
  );
}
