<script lang="ts">
	import emblaCarouselSvelte, {
		type EmblaCarouselType,
		type EmblaOptionsType
	} from 'embla-carousel-svelte';
    const images =  import.meta.glob(
	'./../../assets/gallery/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', { 
        eager: true, 
        query: {
            enhanced: true
        }
    }) as Record<string, { default: string}>;
	const options = {};
	const slides = Array.from(Array(Object.keys(images).length).keys());

	let selectedIndex = 0;
	let emblaMainApi: EmblaCarouselType;
	let emblaThumbsApi: EmblaCarouselType;

	const thumbOptions: EmblaOptionsType = {
		containScroll: 'keepSnaps',
		dragFree: true
	};

	const imageByIndex = (index: number): string => {
        const name = Object.keys(images)[index % slides.length];
        return images[name].default
    };
	const onInit = (event: CustomEvent<EmblaCarouselType>) => {
		emblaMainApi = event.detail;
		onSelect();
		emblaMainApi.on('select', onSelect);
		emblaMainApi.on('reInit', onSelect);
	};
	const onInitThumbs = (event: CustomEvent<EmblaCarouselType>) => {
		emblaThumbsApi = event.detail;
	};
	const onThumbClick = (index: number) => {
		if (!emblaMainApi || !emblaThumbsApi) return;
		emblaMainApi.scrollTo(index);
	};
	const onSelect = () => {
		if (!emblaMainApi || !emblaThumbsApi) return;
		selectedIndex = emblaMainApi.selectedScrollSnap();
		emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
	};

	function handleKey(e: any) {
		switch (e.keyCode) {
			case 37: //arrow left
			case 38: //arrow up
				onThumbClick(Math.max(0, selectedIndex - 1));
				break;
			case 39: //arrow right
			case 40: //arrow down
				onThumbClick(Math.min(slides.length, selectedIndex + 1));
				break;
		}
	}
</script>

<section class="bg-gray-900 text-white" id="gallery">
	<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-lg text-center">
			<h2 id="gallery" class="text-3xl font-bold sm:text-4xl">Galerie photo</h2>
		</div>
		<div class="py-2">
			<div
				class="overflow-hidden bg-gray-950/30 rounded-md"
				use:emblaCarouselSvelte={{ options, plugins: [] }}
				on:emblaInit={onInit}
			>
				<div class="flex">
					{#each slides as slide}
						<div class="grow-0 shrink-0 basis-full">
							<enhanced:img
								class="block w-full object-contain h-96 md:h-[650px] bg-gray-800"
								alt=""
								src={imageByIndex(slide)}
							/>
						</div>
					{/each}
				</div>
			</div>
			<div class="mt-4">
				<div
					class="overflow-hidden bg-gray-950/30"
					use:emblaCarouselSvelte={{ options: thumbOptions, plugins: [] }}
					on:emblaInit={onInitThumbs}
				>
					<div class="flex mx-2">
						{#each slides as index}
                            <div class="{index == selectedIndex ? 'border border-teal-700' : ''} 
                                p-2 flex flex-grow-0 flex-shrink-0 basis-1/5 md:basis-1/12">
                            <button name="thumbnail-{index}" aria-label="thumbnail {index}" on:click={() => onThumbClick(index)} class="block w-full h-12 md:h-24 relative overflow-hidden" type="button">
                                <enhanced:img loading="lazy" class="block w-full h-full object-cover bg-gray-600" src={imageByIndex(index)} alt="" />
                            </button>
                            </div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<svelte:window on:keydown={(e) => handleKey(e)} />
