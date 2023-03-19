<script lang="ts">
    export let anchor: string;
</script>

<a href={anchor}>
    <slot />
</a>

<style>
    a {
        display: flex;

        justify-content: center;
        align-items: center;

        width: var(--width);
        height: var(--height);

        font-size: 1.5rem;
        text-decoration: none;

        background-color: rgb(var(--prussian-blue));
        color: rgb(var(--mint-cream));
        border-bottom: 4px solid rgb(var(--mint-cream));
    }

    a:hover {
        background-color: rgba(var(--mint-cream), 0.2)
    }

    a:active {
        background-color: rgba(var(--mint-cream), 1);
        color: rgb(var(--prussian-blue));
    }
</style>
