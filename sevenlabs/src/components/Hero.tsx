import Image from "next/image";

import { Montserrat } from "next/font/google";
import Trial from "./trial";

export default function Hero() {
  return (
    <Trial heading={" We turn ideas to "} tail={" great Solana products"} />
  );
}
