<script>
    let { data } = $props();
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<div class="container py-8">
    {@html data.content}
</div>