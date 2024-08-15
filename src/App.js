import Header from './components/Header/Header';
import Footer from './components/Footer';
import Main from './components/Main/MainContent';
import HackathonInfo from './components/HackathonInfo/HackathonInfo';
import InfoSection from './components/InfoSection/InfoSection';
// import ThemeToggle from './ThemeToggle/ThemeToggle';
import './App.css';
import Schedule from './components/Schedule/Schedule';

function App() {
  return (
    <>
      <Header />
      {/* <ThemeToggle /> */}
      <Main />
      <HackathonInfo />
      <InfoSection />
      
      <Schedule/>
      <Footer />

    </>
  );
}

export default App;
