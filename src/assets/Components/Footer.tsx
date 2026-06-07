function Footer(): React.JSX.Element {
  return (
    <>
      <div id="footerContainer">
        <hr />

        <div className="containerValuesFooter">
          <div>
            <h4>COLOPHON</h4>
            <h2>
              Ἑλληνικὸν <br />
              Πάνθεον
            </h2>
          </div>

          <div>
            <h4>Tipografia</h4>
            <p>
              Cormorant Garamond, disegnato per la lettura prolungata. <br />
              Inter, per le note di catalogo.
            </p>
          </div>

          <div>
            <h4>Edizione</h4>
            <p>Volumen I · Anno MMXXVI</p>
            <div>Pubblicato in Italia</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
