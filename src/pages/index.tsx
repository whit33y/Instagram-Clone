import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <div className="flex">
        <Navigation />
        <div className="flex flex-col">
          <Footer />
        </div>
      </div>
    </>
  );
}
