import Header from "../components/Home/Header/Header";
import Stories from "../components/Home/Stories/Stories";
import Timeline from "../components/Home/Timeline/Timeline";
import Footer from "../components/Home/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100">
        <Header />
      <div className="flex flex-col max-w-2xl mx-auto">
        <Stories />
        <Timeline />
      </div>
      <Footer />
    </div>
  );
};

export default Home;