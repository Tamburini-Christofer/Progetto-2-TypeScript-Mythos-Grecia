function Hero(): React.JSX.Element {
  return (
    <>
      <div id="heroContainer">
        <div>
          {' '}
          <h5>
            <span>Μουσεῖον</span> · <span>collezione</span> · <span>Vol. I</span>
          </h5>
          <h1>
            <span>Pan</span>
            <span>theos</span>
          </h1>
          <h4>
            <em>Il Pantheon dell'Antica Grecia</em>
          </h4>
        </div>

        <div className="columnDx">
          <p>
            Dodici figure fondative del pensiero greco: <br />
            <br /> Il loro nome originale | il corrispettivo Romano | il proprio dominio! <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
