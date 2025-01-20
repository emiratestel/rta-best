<script>
    import { page } from "$app/state";
</script>

<div class="h-svh container flex justify-center items-center">
    <h1 class="text-4xl">{page.status} {page.error?.message}</h1>
</div>