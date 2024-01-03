<script lang="ts">
    import FaStar from 'svelte-icons/fa/FaStar.svelte';
    import FaRegStar from 'svelte-icons/fa/FaRegStar.svelte';
    export let imgAlt: string;
    export let img: string;
    export let name: string;
    export let infos: string;
    export let ratings: number;
</script>
<div>
    <enhanced:img
      loading="lazy"
      alt={imgAlt}
      src={img}
      class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
    />

    <blockquote
      class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl"
    >
      <p class="text-lg font-bold text-gray-700">{name}</p>
      <p class="mt-1 text-xs font-medium text-gray-500">{infos}</p>
      <p class="mt-4 text-sm text-gray-500">
        <slot></slot>
      </p>

      <div class="mt-8 flex justify-center gap-0.5">
        {#each [...Array(5)] as _, i}
        <div class="icon">
            {#if ratings > i}
                <FaStar/>
            {:else}
                <FaRegStar/>
            {/if}
        </div>
        {/each}
      </div>
    </blockquote>
</div>