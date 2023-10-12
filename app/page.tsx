import Image from "next/image";
import {
  Feedback,
  Footer,
  Header,
  Information,
  Main,
  Tours,
  Travel,
  Work,
} from "./container";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Feedback />
      {/* <Information /> */}
      <Tours />
      <Travel />
      <Work />
      {/* <Footer /> */}
      {/* <iframe
        src="https://yandex.uz/maps/-/CDQVfI8c"
        width="648"
        height="462"
        frameBorder="0"
      ></iframe> */}
    </div>
  );
}
