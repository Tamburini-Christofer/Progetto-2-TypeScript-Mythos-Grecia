function Card(): React.JSX.Element {
  return (
    <>
      <div className="cardContainer">
        <div className="title">
          <div>N° 01</div>
          <div>Nome in greco</div>
        </div>

        <div className="mainCards">
          <h4>Ζεύς</h4>
          <h2>ZEUS</h2>

          <hr />

          <h3>DOMINIO</h3>
          <div>Re degli dèi, cielo e fulmine</div>

          <p>Sovrano dell'Olimpo, custode dell'ordine cosmico e padre di dèi e uomini.</p>
        </div>

        <div className="footerCards">
          <div>Versione Romana</div>
          <div>Giove</div>
        </div>
      </div>
    </>
  );
}

export default Card;
