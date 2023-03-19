<script lang="ts">
    export const prerender = true;

    import NavBar from "$lib/components/complex/nav_bar.svelte";
</script>

<main>
    <NavBar />

    <slot />
</main>

<style>
    main {
        display: grid;

        grid-template-rows: 1fr 9fr;

        width: 100vw;
        height: 100vh;
    }

</style>
