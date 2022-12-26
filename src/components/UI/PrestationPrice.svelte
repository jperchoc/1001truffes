<script lang="ts">
    export let name: String;
    export let price:String;
</script>
<div class="flex justify-between">
    <span>{name}</span>
    <span class="font-bold text-teal-600">{price}</span>
</div>