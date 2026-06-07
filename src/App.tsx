import './App.css';
import './assets/Components/NavBar.css';
import './assets/Components/Hero.css';
import './assets/Components/Main.css';
import './assets/Components/Card.css';

import NavBar from './assets/Components/NavBar.tsx';
import Hero from './assets/Components/Hero.tsx';
import Main from './assets/Components/Main.tsx';
import Footer from './assets/Components/Footer.tsx';

function App() {
  return (
    <>
      <header id="headerContainer">
        <NavBar />
        <Hero />
      </header>

      <main id="principalContainer">
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
