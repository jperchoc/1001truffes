<script lang="ts">
    import logo from '../../assets/logo.png?enhanced'
    import MdMail from 'svelte-icons/md/MdMail.svelte'
    import MdLocalPhone from 'svelte-icons/md/MdLocalPhone.svelte'
    let showMenu: boolean = false;
    const setMenu = (value: boolean) => {
        showMenu = value;
    }
</script>

<header aria-label="Site Header" class="bg-white" id="top">
    <div
        class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
        >
        <a class="block text-teal-600" href="/">
            <span class="sr-only">1001 Truffes</span>
            <enhanced:img src={logo} class="h-16 w-16" alt="Logo de 1001 truffes."/>
        </a>

        <div class="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Site Nav" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
                <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/#about">
                    A propos
                </a>
                </li>

                <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/#prestations">
                    Prestations
                </a>
                </li>

                <li>
                    <a class="text-gray-500 transition hover:text-gray-500/75" href="/#gallery">
                        Galerie
                    </a>
                </li>

                <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/#testimonials">
                    Avis
                </a>
                </li>

                <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/#contact">
                    Contacter
                </a>
                </li>

            </ul>
            </nav>

            <div class="flex items-center gap-4">
            <div class="flex gap-2 sm:gap-4">
        
                <a
                aria-label="contacter par email"
                href="mailto:1001truffes.toilettage@gmail.com"
                class="block rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75"
                >
                    <div class="icon">
                        <MdMail/>
                    </div>   
                    
                </a>

                <a
                aria-label="contacter par téléphone"
                href="tel:+33764889923"
                class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                >
                    <div class="icon">
                        <MdLocalPhone/>
                    </div> 
                </a>
            </div>

            <button
                class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                on:click={e => setMenu(true)}
            >
                <span class="sr-only">Toggle menu</span>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                </svg>
            </button>
            </div>
        </div>
    </div>
</header>
{#if showMenu}
<section class="fixed inset-y-0 right-0 z-50 flex">
    <div class="w-screen max-w-sm">
        <div class="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
            <div>
                <header class="flex h-16 items-center justify-between pl-6">
                <span class="text-sm font-medium uppercase tracking-widest">
                    Menu
                </span>

                <button
                    aria-label="Close menu"
                    class="h-16 w-16 border-l border-gray-200"
                    type="button"
                    on:click={e => setMenu(false)}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mx-auto h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
                </header>

                <nav
                class="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500"
                >
                <a 
                    on:click={e => setMenu(false)} href="/#about" class="px-6 py-3"> A propos </a>
                <a 
                    on:click={e => setMenu(false)} href="/#prestations" class="px-6 py-3"> Prestations </a>
                <a 
                    on:click={e => setMenu(false)} href="/#gallery" class="px-6 py-3"> Galerie </a>
                <a 
                    on:click={e => setMenu(false)}  href="/#testimonials" class="px-6 py-3"> Avis </a>
                <a 
                    on:click={e => setMenu(false)}  href="/#contact" class="px-6 py-3"> Contacter </a>
            
                </nav>
            </div>
        </div>
    </div>
    </section>
{/if}