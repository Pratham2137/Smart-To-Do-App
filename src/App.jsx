import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div
        className="flex flex-col min-h-screen transition-all bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      >
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
