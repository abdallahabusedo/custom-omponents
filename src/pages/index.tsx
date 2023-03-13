import Ribbons1 from "@/Components/Ribbons1";
import Ribbons2 from "@/Components/Ribbons2";
import SwapBtn from "@/Components/SwapBtn";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Custom Components made by Abdallah Zaher using Tailwind</h1>
      <h1 className="font-bold">Ribbon 1</h1>
      <Ribbons1 />
      <h1 className="font-bold">Ribbon 2</h1>
      <Ribbons2 />
      <h1 className="font-bold">Animated Swap Button</h1>
      <SwapBtn />
    </div>
  );
}
