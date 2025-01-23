<svelte:head>
	<title>RTA BEST 💯</title>
</svelte:head>

<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	
	import data from '$lib/data';
	import { cn } from '$lib/utils';
	import * as Sheet from "$lib/components/ui/sheet";
	import { Button } from "$lib/components/ui/button";
	// import * as Dialog from "$lib/components/ui/dialog";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import Marquee from '$lib/components/Marquee.svelte';
	import TextAnimatedDecoration from '$lib/components/TextAnimatedDecoration.svelte';
	import { Motion } from 'svelte-motion';
	// import { localStore } from '$lib/localStore.svelte.ts';

	// let posterDialogViewed = localStore('posterDialogViewed', '0');
	// let dialogState = $state(posterDialogViewed.value == '1' ? false : true);

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

<style>
	/* Fade in - Bottom */
	@-webkit-keyframes -global-fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes -global-fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}
	/* Fade in - Left */
	@-webkit-keyframes -global-fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes -global-fade-in-left{0%{-webkit-transform:translateX(-50px);transform:translateX(-50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}
	/* Fade in - Right */
	@-webkit-keyframes -global-fade-in-right{0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}@keyframes -global-fade-in-right{0%{-webkit-transform:translateX(50px);transform:translateX(50px);opacity:0}100%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}}
</style>

<!-- <Dialog.Root bind:open={dialogState} onOpenChange={() => {posterDialogViewed.value = "1"}}>
	<Dialog.Content>
		<Dialog.Description>
			<img src="{base}/img/dialog-poster.webp" alt="RTA RTA RTA">
		</Dialog.Description>
	</Dialog.Content>
</Dialog.Root> -->

<header class="sticky top-0 z-50 bg-white/75 backdrop-blur select-none">
	<div class="mx-auto flex flex-col p-3 max-w-screen-xl">
		<div class="flex h-16 items-center gap-8">
			<div class="md:flex-none">
				<a class="block text-red-600" href="{base}/">
					<span class="sr-only">Home</span>
					<img class="w-80 h-auto" src="{base}/img/RTA_Dubai_logo.png" alt="RTA">
				</a>
			</div>
			
			<div class="flex flex-1 items-center justify-end">
				<nav class="hidden md:block">
					<ul class="flex items-center gap-6 text-base">
						<DropdownMenu.Root>
							<DropdownMenu.Trigger>
								<TextAnimatedDecoration>
									<span class="text-gray-500 transition hover:text-gray-500/75">
										Big brain content
										<svg class="inline-block size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
										</svg>
									</span>
								</TextAnimatedDecoration>
							</DropdownMenu.Trigger>
							<DropdownMenu.Content>
								<DropdownMenu.Group>
									{#each data['big-brain-content'] as content}
										<DropdownMenu.Item>
											<TextAnimatedDecoration>
												<a class="text-gray-500 transition hover:text-gray-500/75" href="{base}/big-brain-content/{content.slug}/">{content.title}</a>
											</TextAnimatedDecoration>
										</DropdownMenu.Item>
									{/each}
								</DropdownMenu.Group>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</ul>
				</nav>
				
				<div class="block text-gray-600 transition hover:text-gray-600/75 md:hidden">
					<Sheet.Root>
						<Sheet.Trigger asChild let:builder>
							<Button builders={[builder]} variant="outline" class="px-2 opacity-75">
								<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</Button>
						</Sheet.Trigger>
						<Sheet.Content side="left" class="text-left">
							<Sheet.Header>
								<Sheet.Title class="pb-2">
									<span class="text-2xl">Menu</span>
								</Sheet.Title>
								<Sheet.Description>
									<ul class="text-lg">
										{#each data['big-brain-content'] as content}
											<li>
												<TextAnimatedDecoration>
													<Sheet.Close>
														<a class="text-gray-500 transition hover:text-gray-500/75" href="{base}/big-brain-content/{content.slug}/">{content.title}</a>
													</Sheet.Close>
												</TextAnimatedDecoration>
											</li>
										{/each}
									</ul>
								</Sheet.Description>
							</Sheet.Header>
						</Sheet.Content>
					</Sheet.Root>
				</div>
			</div>
		</div>
		<div>
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
	<Motion let:motion initial={{ backgroundPosition: "200% 0" }} animate={{ backgroundPosition: "-200% 0" }} transition={{ repeat: Infinity, duration: 2, ease: "linear", }}>
		<p use:motion class={cn("underline transition-all ease-in-out duration-200 mx-1.5 bg-[linear-gradient(110deg,#969696,35%,#fff,50%,#969696,75%,#969696)] bg-[length:200%_100%] bg-clip-text text-transparent", clicked ? "cursor-text" : "decoration-dashed cursor-pointer")}>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<span onclick={footerEaster}>{copyrightText}</span>
		</p>
	</Motion>
	<p>{currentYear}</p>
</footer>
