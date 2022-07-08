import { useContext } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ThemeContext from "./context/ThemeContext";

const Layout = () => {

  
  const { theme } = useContext(ThemeContext)

  return (
    <div className="layout" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>

        <Header />

        <MainContent />

    </div>
  );
}

export default Layout;
