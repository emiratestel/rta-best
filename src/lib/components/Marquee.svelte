<script lang="ts">
    import { cn } from "$lib/utils";
    
    let {
        pauseOnHover = false,
        vertical = false,
        repeat = 4,
        reverse = false,
        class: className,
        children
    } = $props();
</script>

<div
class={cn(
    "group flex overflow-hidden p-2 [--duration:2s] [--gap:1rem] [gap:var(--gap)]",
    {
        "flex-row": !vertical,
        "flex-col": vertical,
    },
    className
    )}
    >
    {#each { length: repeat } as _, i (i)}
    <div
    class={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
        "animate-marquee flex-row": !vertical,
        "animate-marquee-vertical flex-col": vertical,
        "group-hover:[animation-play-state:paused]": pauseOnHover,
        "[animation-direction:reverse]": reverse,
    })}
    >
    {@render children?.()}
</div>
{/each}
</div>
