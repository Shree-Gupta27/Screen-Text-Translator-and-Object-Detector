import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import ColorSchemesExample from "./components/ColorSchemesExample.jsx";
import FeatureContainer from "./components/FeatureContainer.jsx";
import Heading from "./components/Heading";
import WorkingContainer from "./components/WorkingContainer.jsx";
import Footer from "./components/Footer.jsx";
import ChatBox from "./components/ChatBox.jsx";
import ContactForm from "./components/ContactForm.jsx";
import ResponsiveAppBar from "./components/ResponsiveAppBar.tsx";
import FeatureCarousel from "./components/FeatureCarousal.tsx";
import DownloadButton from "./components/DownloadButton.jsx";
import Watermark from "./assets/FlowChart.png";
const App = () => {
  return (
    <>
      <ColorSchemesExample />
      <div className="font-nunito w-[80%] mx-auto">
        {/* <ResponsiveAppBar /> */}
        {/* <img src={Watermark} className="w-full  bg-no-repeat -z-10" alt="" /> */}
        <Heading />
        <FeatureCarousel />
        <WorkingContainer />
        <ContactForm />
        <DownloadButton />
      </div>
      <Footer />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="font-[Nunito] flex w-full">
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default App;
