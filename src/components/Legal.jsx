import {AiOutlineClose} from 'react-icons/ai'
function Legal({visible, onClose}) {
    if (!visible) return;
    return (
        <> 
        <div id="overlay" class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60" onClick={() => onClose()}></div>
        <div id="dialog"
            class="w-full md:max-w-screen-xl fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md px-8 py-6 space-y-5 drop-shadow-lg">
            <h1 class="text-2xl font-extrabold text-gray-900">Mentions légales</h1>
            <div class="py-5 border-t border-b border-gray-300 text-gray-500">
                <h2 className='mb-2 font-bold text-xl text-gray-800'>Editeur</h2>
                <ul>
                    <li><strong>Éditeur du Site : </strong>Jonathan Perchoc</li>
                    <li><strong>Directeur de la publication : </strong>Mathilde Bleunven</li>
                    <li><strong>Adresse : </strong>5 rue des camélias, 29810 Ploumoguer</li>
                    <li><strong>Tél : </strong>07 64 88 99 23</li>
                    <li><strong>Mail : </strong>1001truffes.toilettage@gmail.com</li>
                    <li><strong>Siren : </strong>921940573</li>
                    <li><strong>Site web : </strong><a className="text-teal-700" href="https://1001-truffes.fr/" target="_blank">1001-truffes.fr</a></li>
                </ul>

                <h2 className='mt-4 mb-2 font-bold text-xl text-gray-800'>Hébergement</h2>
                <ul>
                    <li><a className="text-teal-700" href="http://ovhcloud.com" target="_blank">OvhCloud</a></li>
                    <li>2 rue Kellermann - 59100 Roubaix - France</li>
                </ul>

                <h2 className='mt-4 mb-2 font-bold text-xl text-gray-800'>Crédits</h2>
                <p className='mt-4'>
                    <ul>
                        <li>
                            Photos: <a className="text-teal-700" href="https://www.facebook.com/BubbleLifePhoto" target="_blank">Studio Bubble Life</a> & <a className="text-teal-700" href="https://www.facebook.com/celineartstudio" target="_blank">Céline Art Studio</a>
                        </li>
                        <li>Logo : <a className="text-teal-700" href="https://www.instagram.com/tattooby_mai" target="_blank">Mai Tattoo Artist</a></li>
                        <li>Assets : <a className="text-teal-700" href="https://stock.adobe.com/" target="_blank">stock.adobe.com</a></li>
                    </ul>
                </p>

            </div>
            <div class="flex justify-end">
                <button id="close" class="px-5 py-2 bg-teal-500 hover:bg-teal-700 text-white cursor-pointer rounded-md" onClick={() => onClose()} >
                    Fermer</button>
            </div>
        </div>
        </>
    )
}
export default Legal;