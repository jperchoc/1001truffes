  import './App.css'
import logo from './assets/logo.png';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';

function App() {
  return (
    <div className='bg-ivory h-screen'>
      <header className='relative'>
        <nav className='bg-brown h-16 text-white'>
          <div className='container'>

          </div>
        </nav>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path fill="#5B3D29" fill-opacity="1" d="M0,128L80,112C160,96,320,64,480,64C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <div className="absolute w-[250px] bottom-0 mx-auto left-0 right-0 rounded-full p-[10px] bg-ivory">
          <img src={logo}/>
        </div>
      </header>
      <main className='min-h-[33vh] container'>
        <section>
          <h2 className="text-brown text-2xl font-bold mb-2">Accueil</h2>
          
          <h3 className="text-brown text-xl font-bold mb-2">Pourquoi toiletter mon animal ?</h3>
          <div class="grid grid-cols-2 gap-4">
            <div className='flex justify-center items-center flex-col gap-4'>
              <p>Chaque toilettage est différent selon la race, les besoins, la vie que l’animal mène au quotidien. Le toilettage chez le chien et le chat ne se limite pas à un simple acte esthétique, comme on le pense trop souvent. C’est aussi un soin d’hygiène essentiel au cours de la vie de votre animal qui permet de détecter les éventuels problèmes de santé de vos fidèles compagnons. Le pelage du chien est un bon indicateur de son état de santé. En effet, un chien en bonne santé aura un beau poil brillant et uniforme.</p>
                <p>Un toilettage est donc l’occasion pour moi de vous faire part des problèmes que votre animal peut avoir pour réagir rapidement (parasites, dermatites, otites …) ou s'il a mal quelque part, car oui, si l’on analyse le comportement et la communication, on peut cibler le problème. L’important, c'est que votre animal se sente bien dans ses pattes.</p>
                <p>Les bienfaits du toilettage sont nombreux : l’animal se sent léger et libéré des poils morts, une coupe de griffes peut lui redonner l’envie de faire de longues balades, un bon bain pour enlever toutes salissures qui peuvent parfois les gêner, car certains d’entre eux détestent être sales.</p>
                <p>Le toilettage est également un moment de socialisation. Il est très important que votre chien soit habitué à être manipulé car cela facilitera les choses lorsque vous devrez lui administrer des soins ou lors des visites chez le vétérinaire. Le mieux par conséquent est d’amener votre animal chez le toiletteur dès son plus jeune âge, idéalement vers 3 ou 4 mois.</p>
            </div>
            <div className='flex justify-center items-center'>
              <img src={img1} className="w-full" />
            </div>
          </div>

          <h3 className="text-brown text-xl font-bold mb-2">Pourquoi choisir le toilettage à domicile ?</h3>
          <div class="grid grid-cols-2 gap-4">
            <div className='flex justify-center items-center'>
              <img src={img2} className="w-full" />
            </div>
            <div className='flex justify-center flex-col gap-4'>
                <p>Tant de choses à faire au quotidien et si peu de temps disponible.</p>
                <p>Plus besoin de perdre de précieuses heures en trajet et attente inutile : pendant que je bichonne votre animal vous pouvez poursuivre vos activités en toute quiétude sans sortir de chez vous.</p>
                <p>Grâce au toilettage à domicile, votre chien évite la voiture qu'il hait, votre chat, la cage qu'il déteste.</p>
                <p>À domicile, l’animal n’a pas à subir une attente plus ou moins longue et il n’interagit pas non plus avec d’autres animaux. Ces facteurs de stress sont donc évités.</p>
                <p>Sur son « territoire » et en compagnie de son maître, un chien ou un chat sera beaucoup plus enclin à se laisser manipuler par le toiletteur et appréciera d’autant plus de se faire chouchouter.</p>
            </div>
          </div>
      </section>
      </main>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#5B3D29" fill-opacity="1" d="M0,256L80,234.7C160,213,320,171,480,165.3C640,160,800,192,960,197.3C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <footer className='bg-brown h-16'></footer>
    </div>
  )
}

export default App
