import { StrictMode } from 'react';  
import { createRoot } from 'react-dom/client';  
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';  
import { AnimatePresence, motion } from 'framer-motion';  
import App from './App';  
import Home from './Home';  
import EdBg from './EdBg';  
import Projects from './Projects';  
import Services from './Services';  
import 'bootstrap/dist/css/bootstrap.min.css';  

// Animation variants for the fade effect  
const variants = {  
  initial: { opacity: 0 },  
  animate: { opacity: 1 },  
  exit: { opacity: 0 },  
};  

function Main() {  
  const location = useLocation(); // Access the current location  

  return (  
    <AnimatePresence>  
      <Routes location={location} key={location.key}>  
        <Route   
          path="/"   
          element={  
            <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>  
              <App />  
            </motion.div>  
          }   
        />  
        <Route   
          path="/home"   
          element={  
            <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>  
              <Home />  
            </motion.div>  
          }   
        />  
        <Route   
          path="/background"   
          element={  
            <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>  
              <EdBg />  
            </motion.div>  
          }   
        />  
        <Route   
          path="/projects"   
          element={  
            <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>  
              <Projects />  
            </motion.div>  
          }   
        />  
        <Route   
          path="/services"   
          element={  
            <motion.div initial="initial" animate="animate" exit="exit" variants={variants}>  
              <Services />  
            </motion.div>  
          }   
        />  
      </Routes>   
    </AnimatePresence>  
  );  
}  

createRoot(document.getElementById('root')).render(  
  <StrictMode>  
    <Router>  
      <Main />  
    </Router>  
  </StrictMode>,  
);