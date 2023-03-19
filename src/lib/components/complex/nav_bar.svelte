<script lang="ts">
    import NavButton from "$lib/components/primitive/nav_button.svelte";
</script>

<nav>
    <NavButton anchor="" --width="10%" --height="50%">Home</NavButton>
    <NavButton anchor="" --width="10%" --height="50%">Projects</NavButton>
    <NavButton anchor="" --width="10%" --height="50%">Blog</NavButton>
    <NavButton anchor="" --width="10%" --height="50%">About Me</NavButton>
</nav>

<style>
    nav {
        display: flex;

        justify-content: center;
        align-items: center;

        height: 100%;

        background-color: rgb(var(--prussian-blue));
        border-bottom: 10px solid rgb(var(--moonstone));
    }
</style>
