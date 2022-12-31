<script lang="ts">
    export let src: string;
    export let alt: string;
</script>

<div class="overflow-hidden cursor-pointer rounded-xl relative group" on:click on:keydown>
    <img
        {alt}
        class="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
        {src}
    />
</div>