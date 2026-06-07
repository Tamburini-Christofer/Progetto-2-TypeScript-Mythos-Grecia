import './App.css';
import './assets/Components/NavBar.css';
import './assets/Components/Hero.css';
import './assets/Components/Main.css';
import './assets/Components/Card.css';
import './assets/Components/Footer.css';

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

      <main>
        <div id="principalContainer">
          <Main />
        </div>

        <div className="protagoraContainer">
          <cite>«Πάντων χρημάτων μέτρον ἄνθρωπος»</cite>
          <p>L'uomo è misura di tutte le cose.</p>
          <span>— Protagora · V sec. a.C.</span>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
