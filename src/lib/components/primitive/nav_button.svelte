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

        background-color: rgba(39, 48, 67, 1);
        color: #EFF6EE;
        border-bottom: 4px solid #EFF6EE;
    }

    a:hover {
        background-color: rgba(239, 246, 238, 0.2)
    }

    a:active {
        background-color: rgba(239, 246, 238, 1);
        color: rgba(39, 48, 67, 1);
    }
</style>
