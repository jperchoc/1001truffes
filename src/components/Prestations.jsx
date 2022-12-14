import {ReactComponent as DogSmall} from '../assets/SVG/silhouette_small.svg';
import {ReactComponent as DogMedium} from '../assets/SVG/silhouette_medium.svg';
import {ReactComponent as DogBig} from '../assets/SVG/silhouette_big.svg';
import {ReactComponent as Puppy} from '../assets/SVG/silhouette_puppy.svg';
import {ReactComponent as Cat} from '../assets/SVG/silhouette_cat.svg';

function Prestations() {
    return (
        <section id="prestations" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 id="prestations" className="text-3xl font-bold sm:text-4xl">Prestations</h2>

          <p className="mt-4 text-gray-300">Offrez à votre animal un moment bien être sans devoir vous déplacer. </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Petits chiens" illustration={<DogSmall className="invert max-h-[150px]"/>}>
              <span className="text-gray-400">Moins de 10kg : York, Cavalier King Charles, Spitz...</span>
              <PriceBox>
                  <Price name="Tonte" price="40€" />
                  <Price name="Coupe ciseaux" price="45€" />
                  <Price name="Réduction de mue" price="30€/heure" />
                  <Price name="Epilation" price="35€/heure" />
              </PriceBox>
          </Card>
          <Card title="Chiens moyens" illustration={<DogMedium className="invert max-h-[150px]"/>}>
              <span className="text-gray-400">De 10kg à 25kg : Cocker, Finnois de Laponie, Berger Australien ...</span>
              <PriceBox>
                  <Price name="Tonte" price="50€" />
                  <Price name="Coupe ciseaux" price="55€" />
                  <Price name="Réduction de mue" price="40€/heure" />
                  <Price name="Epilation" price="35€/heure" />
              </PriceBox>
          </Card>
          <Card title="Grands chiens" illustration={<DogBig className="invert max-h-[150px]"/>}>
              <span className="text-gray-400">Plus de 25kg : Patou des Pyrénées, Bouvier Bernois, Labrador...</span>
              <PriceBox>
                  <Price name="Toilettage classique" price="50€/heure" />
              </PriceBox>
            </Card>
          <Card title="Chiots" illustration={<Puppy className="invert max-h-[150px]"/>}>
              <span className="text-gray-400">Désensibilisation aux bruits et matériels de toilettage.</span>
              <PriceBox>
                  <Price name="Initiation au toilettage" price="30€" />
              </PriceBox>
            </Card>
          <Card title="Chats" illustration={<Cat className="invert max-h-[150px]"/>}>
              <span className="text-gray-400">Idéal pour tout type de chats, à poils longs comme à poils courts. Un bain peut être effectué si nécessaire.</span>
              <PriceBox>
                  <Price name="Toilettage" price="35€/heure" />
              </PriceBox>
            </Card>
        </div>
        <p className='mt-2 text-gray-500'>Tarifs pour un animal bien entretenu. Des frais supplémentaires pourront être appliqués en fonction de l’état de votre animal
( difficulté du démélage, présence de parasites… ). Les prix peuvent également varier selon la sociabilité de l’animal ( morsures,
griffures … ).</p>
      </div>
    </section>

    );
}

function PriceBox({children}) {
  return (
    <div className="mt-4 border-y-2 py-4 border-gray-800 bg-gray-800 px-4 rounded-xl">
      {children}
  </div>
  ) 
}

function Price({name, price}) {
  return (
    <div className="flex justify-between">
          <span>{name}</span>
          <span className="font-bold text-teal-600">{price}</span>
      </div>
  )
}

function Card({title, illustration, children}) {
  return (
    <div
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
      >
        <div className='flex justify-center'>
          {illustration}
        </div>
        <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
        {children}
      </div>
  )
}
export default Prestations;