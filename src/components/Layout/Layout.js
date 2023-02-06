import Sidebar from "./Sidebar/Sidebar";
import NavBar from "./Navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="w-100">{children}</div>
        
      </div>
    </div>
  );
};

export default Layout;
