import axios from "axios";
import { useEffect, useState } from "react";
import { loadUser } from "./actions/auth";
import ThemeContext, { themes } from "./context/ThemeContext";
import UserContext from "./context/UserContext";
import Layout from "./Layout";


const App = () => {

  const [ theme, setTheme ] = useState(themes.light)
  const [ user, setUser ] = useState(null)
  const [ loadingUser, setLoadingUser ] = useState(false)


  useEffect(() => {


    (async () => {

      const res = await loadUser()

      if (typeof res === 'string') {
        
        setUser(null)
        return console.log(res)
      }

      console.log(res)
      setUser(res)


    })()

  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <UserContext.Provider value={{ user, setUser, loadingUser, setLoadingUser }}>
      
      <Layout />

    </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
