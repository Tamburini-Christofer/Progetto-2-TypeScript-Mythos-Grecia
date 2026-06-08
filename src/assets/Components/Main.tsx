import Card from './Card';
import { divinitaOlimpiche } from '../Data/DeiOlimpo';

function Main(): React.JSX.Element {
  return (
    <>
      <div className="cardsContainer">
        {' '}
        <div>
          {' '}
          <div>
            {' '}
            <span>Pantheon</span>
          </div>
          <h3>La collezione degli Olimpi</h3>
        </div>
        <div>
          Ogni scheda riporta il nome greco originale, l'epiteto italiano, il dominio sacro e il corrispettivo romano. Le voci sono ordinate
          per significato simbolico.
        </div>
      </div>

      <div className="grigliaCards">
        {divinitaOlimpiche.map((d) => (
          <Card key={d.id} divinita={d} />
        ))}
      </div>
    </>
  );
}

export default Main;
