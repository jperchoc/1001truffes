<script lang="ts">
    import MdClose from 'svelte-icons/md/MdClose.svelte'
    import { fly, fade } from 'svelte/transition';
    import img1 from '../../assets/gallery/albumB&A-231.jpg';
    import img2 from '../../assets/gallery/albumB&A-235.jpg';
    import img3 from '../../assets/gallery/albumB&A-225.jpg';
    import img4 from '../../assets/gallery/albumB&A-263.jpg';
    import img5 from '../../assets/gallery/albumB&A-213.jpg';
    import img6 from '../../assets/gallery/albumB&A-212.jpg';
	import ZoomableImage from '../UI/ZoomableImage.svelte';

    const images = [
        img1,img2,img3,img4,img5,img6
    ]

    let fullscreenImage:string = '';
    function showImageFullscreen(img:string) {
        window.document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        fullscreenImage = img;
    }
    function close() {
        window.document.getElementsByTagName('body')[0].style.overflow = 'auto';
        fullscreenImage = '';
    }
    function getPreviousImage() {
        const imgIdx = images.indexOf(fullscreenImage);
        fullscreenImage = imgIdx === images.length - 1 ? images[0] : images[imgIdx + 1];
    }
    function getNextImage() {
        const imgIdx = images.indexOf(fullscreenImage);
        fullscreenImage = imgIdx === 0 ? images[images.length - 1] : images[imgIdx - 1];
    }

    function handleKey(e:any) {
        if (fullscreenImage.length > 0) {
            switch (e.keyCode) {
                case 37: //arrow left
                case 38: //arrow up
                    getNextImage();
                    break;
                case 39: //arrow right
                case 40: //arrow down
                    getPreviousImage();
                    break;
                case 27: //escape
                    close();
                    break;
            }
            console.log(e);
        }
    }
</script>
<section class="bg-gray-900 text-white" id="gallery">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
            <h2 id="prestations" class="text-3xl font-bold sm:text-4xl">Galerie photo</h2>
        </div>
        <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap md:w-1/2">
                    <div class="w-1/2 p-1 md:p-2">
                        <ZoomableImage alt="" src={img1} on:click={() => showImageFullscreen(img1)}/>
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                        <ZoomableImage alt="" src={img2} on:click={() => showImageFullscreen(img2)}/>
                    </div>
                    <div class="w-full p-1 md:p-2">
                        <ZoomableImage alt="" src={img3} on:click={() => showImageFullscreen(img3)}/>
                    </div>
                </div>
                <div class="flex flex-wrap md:w-1/2">
                    <div class="w-full p-1 md:p-2">
                        <ZoomableImage alt="" src={img4} on:click={() => showImageFullscreen(img4)}/>
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                        <ZoomableImage alt="" src={img5} on:click={() => showImageFullscreen(img5)}/>
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                        <ZoomableImage alt="" src={img6} on:click={() => showImageFullscreen(img6)}/>
                    </div>
                </div>
            </div>
	    </div>
    </div>
</section>


{#if fullscreenImage.length > 0}
<div transition:fade id="overlay" class="overscroll-none fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60" on:click={() => close()} on:keydown|preventDefault={e => handleKey(e)}></div>
<div id="fullscreenImage"
on:click={() => close()}
on:keydown|preventDefault={e => handleKey(e)}
    transition:fly="{{ y: -200, duration: 300 }}" 
    class="overscroll-none w-screen fixed z-50 bg-blackdrop-shadow-lg top-0 left-0 flex justify-center h-screen items-center">
    <div class="relative">
        <img src={fullscreenImage} class="object-contain max-h-[80vh]" alt="Photographie plein écran"/>
        <button class="absolute top-[-25px] right-0 text-white icon" title="Fermer"><MdClose /></button>
    </div>
</div>
{/if}
<svelte:window on:keydown|preventDefault={e => handleKey(e)} />