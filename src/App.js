import Header from './components/Header/Header';
import Footer from './components/Footer';
import Main from './components/Main/MainContent';
import HackathonInfo from './components/HackathonInfo/HackathonInfo';
import InfoSection from './components/InfoSection/InfoSection';
// import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import './App.css';

function App() {
  return (
    <>
      <Header />
      {/* <ThemeToggle /> */}
      <Main />
      <HackathonInfo />
      <InfoSection />
      <Footer />
    </>
  );
}

export default App;
