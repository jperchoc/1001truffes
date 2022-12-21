<script lang="ts">
    export let title: string;
</script>
<div
    class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
    >
    <div class='flex justify-center'>
        <slot name="illustration"></slot>
    </div>
    <h2 class="mt-4 text-xl font-bold text-white">{title}</h2>
    <slot name="content"></slot>
</div>