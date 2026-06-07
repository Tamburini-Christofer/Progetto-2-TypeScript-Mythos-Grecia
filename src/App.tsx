import './App.css';
import './assets/Components/NavBar.css';

import NavBar from './assets/Components/NavBar.tsx';
import Main from './assets/Components/Main.tsx';
import Footer from './assets/Components/Footer.tsx';

function App() {
  return (
    <>
      <header id="headerContainer">
        <NavBar />
      </header>

      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
