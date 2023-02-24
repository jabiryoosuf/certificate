import Sidebar from "./Sidebar/Sidebar";
import NavBar from "./Navbar/NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="w-100">{children}</div>


        {/* toast */}

        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Layout;
