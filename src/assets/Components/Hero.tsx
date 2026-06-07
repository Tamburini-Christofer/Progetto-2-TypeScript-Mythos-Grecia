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
            <span>Πάν</span>
            <span>θεον</span>
          </h1>
          <h4>
            <em>Il Pantheon dell'Antica Grecia</em>
          </h4>
        </div>

        <div className="columnDx">
          <p>
            Dodici figure fondative del pensiero greco: <br />
            <br /> i loro nomi, i loro simboli, i loro domini sacri. <br />
            <br />
            Una raccolta tipografica concepita come un museo di carta: lenta, precisa, devozionale.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
