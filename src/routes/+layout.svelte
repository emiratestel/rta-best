<svelte:head>
	<title>RTA BEST 💯</title>
</svelte:head>

<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	import Marquee from '$lib/components/Marquee.svelte';
	import AnimatedShinyText from '$lib/components/AnimatedShinyText.svelte';

	let currentYear = new Date().getFullYear();
	
	let copyrightText = $state("SRTA");
	let clicked = $state(false);
	const footerEaster = () => {
		if (clicked) return;
		copyrightText = "Stupid RTA";
		clicked = true;
	}
	
	let { children } = $props();
</script>

<header class="sticky top-0 z-50 bg-white shadow-xl select-none">
	<div class="mx-auto flex flex-col lg:flex-row p-4 max-w-screen-xl items-center gap-2 lg:gap-8 px-6 lg:px-8 overflow-x-hidden">
		<div class="flex-none">
			<a class="block text-red-600" href="{base}/">
				<span class="sr-only">Home</span>
				<img class="w-80 h-auto" src="{base}/img/RTA_Dubai_logo.png" alt="RTA">
			</a>
		</div>
		
		<div class="grow w-full items-center justify-end md:justify-between text-right">
			<Marquee class="[--duration:10s]">
				{#each {length: 3} as _}
					<p class="slogan">We keep Dubai stuck&trade;</p>
				{/each}
			</Marquee>
		</div>
	</div>
</header>  

<div>
	{@render children()}
</div>

<footer class="flex justify-center items-center bg-red-600 text-white font-semibold text-base p-6">
	<p>Copyright &copy;</p>
	<AnimatedShinyText
		class={clicked ? "underline inline-flex items-center justify-center transition-all ease-in-out duration-200 cursor-text mx-1.5" : "underline decoration-dashed inline-flex items-center justify-center cursor-pointer mx-1.5"}>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<span onclick={footerEaster}>{copyrightText}</span>
	</AnimatedShinyText> 
	<p>{currentYear}</p>
</footer>