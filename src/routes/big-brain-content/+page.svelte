<script lang="ts">
	import data from '$lib/data';
	import TextAnimatedDecoration from '$lib/components/TextAnimatedDecoration.svelte';
</script>

<h1 class="text-4xl">big brain content.</h1>
<ul class="text-lg">
    {#each data['big-brain-content'] as content}
        <li>
            <TextAnimatedDecoration>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/big-brain-content/{content.slug}/">{content.title}</a>
            </TextAnimatedDecoration>
        </li>
    {/each}
</ul>