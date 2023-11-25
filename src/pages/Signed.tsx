import { signOut } from "firebase/auth/cordova";
import { auth } from "@/firebase";
import { useRouter } from "next/router";
import { Map } from "./map";

export default function Signed() {
  const router = useRouter();

  const handleClick = () => {
    signOut(auth).then((val) => {
      console.log(val, "val");
      router.push("/");
    });
  };

  return (
    <>
      <div className="splash min-h-screen justify-center items-center flex custom-background ">
        <div
          className="container min-h-[600px]  lg:w-[1290px] bg-[rgba(255,255,255,0.8)] flex flex-col rounded-xl
        lg:flex-row lg:justify-around items-center p-6 md:p-20 m-4 relative"
        >
          <Map />
          {/* <div >
            <form className="flex flex-col " action="#">
              <input
                type="text"
                placeholder="Enter your location"
                className="px-4 py-2 rounded-md mb-1 border"
              />
              <input
                type="text"
                placeholder="Enter your destination"
                className="px-4 py-2 rounded-md mb-1 border"
              />
              <button
                type="submit"
                className="bg-green-600 py-2 px-2 rounded-md font-semibold text-white"
              >
                Search
              </button>
            </form>
          </div> */}
          <button
            onClick={handleClick}
            className="border-2 border-black hover:bg-neutral-600 hover:text-white text-center font-semibold py-2 px-4 rounded-full absolute top-5 right-5"
          >
            Sign out
          </button>
        </div>
        <p className="text-white text-xs absolute bottom-0 tracking-widest">
          Copyright &copy; 2023 | Preetham Ananthu | All Rights Reserved
        </p>
      </div>
    </>
  );
}
