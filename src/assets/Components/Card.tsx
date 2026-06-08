import type { Divinita } from '../Data/DeiOlimpo';

type CardProps = {
  divinita: Divinita;
};

function Card({ divinita }: CardProps): React.JSX.Element {
  return (
    <div className="cardContainer">
      <div className="title">
        <div>N° {divinita.numeroCarta}</div>
        <div>{divinita.tipo}</div>
      </div>

      <div className="mainCards">
        <h4>{divinita.nomeGreco}</h4>
        <h2>{divinita.nomeItaliano.toUpperCase()}</h2>

        <hr />

        <h3>DOMINIO</h3>
        <div>{divinita.dominio}</div>

        <p>{divinita.descrizione}</p>
      </div>

      <div className="footerCards">
        <div>Versione Romana</div>
        <div>{divinita.nomeRomano}</div>
      </div>
    </div>
  );
}

export default Card;
