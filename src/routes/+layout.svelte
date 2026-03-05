<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import avantella from "$lib/assets/avantella5.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={avantella} />
</svelte:head>

	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		min-height: 100dvh;
		max-height: fit-content;
		margin: 0;
		max-width: 100vw;
		overflow-x: hidden;

		/* background-color: pink; */
	}

	:global(main) {
		/* flex-grow: 1; */
		display: flex;
		flex: 1;
	}


</style>
