import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import { BsFileArrowDownFill } from "react-icons/bs";


const Home: NextPage = () => {
    const address = useAddress();
    const router = useRouter();
  
return (
      
      <>
  <main>
  {/* Section 1 */}

    <section className={styles.section1}>
      <div 
      className="sm:w-full lg:w-2/3 flex flex-col justify-center items-center h-screen px-5">
        <h1 className="font-burgerFont text-6xl lg:text-8xl text-center">Join the most frenly Community of the web3 mfer!</h1>
        <div className="w-9/12 flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-4 lg:space-y-0 mt-5">
              
              <button 
                className="bg-blue-700 text-white hover:bg-blue-800 font-bold text-lg font-poppins py-4 px-8 rounded-lg cursor-pointer w-full"
                onClick={() => router.push(`/claim`)}
                >Grab your FrenCard
              </button> 
              
              <button 
                className="bg-white hover:bg-slate-300 text-black font-bold text-lg font-poppins py-4 px-8 rounded-lg w-full"
                /*onClick={() => router.push(`/claim`)}*/
                >Litepaper
              </button>
              
            </div> 
      </div>
    </section>

   

<Footer />

    </main>
    </>
);
};

export default Home;