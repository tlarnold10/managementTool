<script>
    import Manager from '../components/Manager.svelte';
    var name = '';
    var handleClick = () => {
        name = 'Trevor Arnold'
    }
</script>

<h1 class="text-3xl font-bold underline">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Button
</button>

<div>
    {name}
</div>

<Manager/>