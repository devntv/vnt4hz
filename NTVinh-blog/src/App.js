import React from 'react';
import './App.css';
import { Container, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Resume from './pages/Rsm/Resume';
import PortFLO from './pages/Portfolio/PortFLO';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Usedarkmode } from './styles/Usedarkmode';
//dark theme and light theme
import  { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
// import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/ScrollTop/ScrollToTop';
import Notfound from './pages/Notfound/Notfound';
import Blog from './pages/Blog/Blog';
//chat mess
import MessengerCustomerChat from 'react-messenger-customer-chat';
import RouterScrollToTop from './help/RouterScrollToTop'

function App() {
  const [theme, toggleTheme] = Usedarkmode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  // const [loading, setLoading] = useState(true)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },700)
  // },[])
  // loading ? <Loader className="loading" type="Circles" color="#f359a5" height={300} width={100} timeout={0} /> :
  return (<>
    <ThemeProvider theme={themeMode}>
      {/* <FmotionScroll /> */}
      <Router >
      <Container className={'ctn_top'}>
        <Grid container spacing={7}>
          <ScrollToTop showBelow={280} />
          <Grid item lg={3} md={4} xs={12} sm={12}  >   
            <Profile theme={theme} />
            <GlobalStyles />
          </Grid>
          <Grid item xs >
              <RouterScrollToTop />
              <Header theme={theme} toggleTheme={toggleTheme} />
              <div className="main-content container_shadow">
                <Switch>
                  <Route exact path="/"> <Resume theme={theme} /> </Route>
                  <Route path="/pflio" > <PortFLO /> </Route>
                  <Route path="/blog"><Blog /></Route>
                  <Route path="/contact" > <Contact /> </Route>  
                  <Route ><Notfound /></Route>
                </Switch>
              </div>         
            <Footer />
          </Grid>
        </Grid>    
        <MessengerCustomerChat pageId="108949620688467" appId="1121879694996668"/>
      </Container>
      </Router>
    </ThemeProvider>
  </>)


}

export default App;
