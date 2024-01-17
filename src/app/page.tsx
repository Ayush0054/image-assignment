import Image from "next/image";
import Navbar from "./component/navbar";
import Searchbar from "./component/searchbar";
import Trending from "./component/trending";

export default function Home() {
  return (
    <main className=" flex flex-col justify-center m-5 items-center ">
      <Navbar />
      <div className=" font-extrabold text-7xl text-white text-center mt-16">
        <h1>Discover over 2,000,000</h1>
        <h1>free Stock Images</h1>
      </div>
      <Searchbar />
      <Trending />
    </main>
  );
}
