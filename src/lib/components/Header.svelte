<script>
    import { fade, fly, slide } from "svelte/transition";

    let visible = $state(false);

    function menuOpen() {
        visible = true;
    }

    function menuClose() {
        visible = false;
    }
</script>

<header>
    <h1><a href="/">Avantella</a></h1>
    <nav>
        <div
            class="portfolio-container"
            onmouseenter={menuOpen}
            onmouseleave={menuClose}
            role="button"
            tabindex="0"
        >
            <p>Portfolio</p>

            {#if visible}
                <!-- <div in:fly={{ y: -20, delay: 100, duration: 500 }} out:fade> -->

                <div in:fly={{ y: -10, delay: 100, duration: 500, }} out:fly={{y: -10, delay: 100, duration: 500}}>
                    <div class="portfolio-menu">
                        <div class="menu-items">
                            <button class="menu-click" onclick={menuClose}>
                                <a href="/portfolio/monochrome">Monochrome</a>
                            </button>

                            <button class="menu-click" onclick={menuClose}>
                                <a href="/portfolio/color">Color</a>
                            </button>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
        <button> <a href="/about">About me</a> </button>
        <button> <a href="/contact">Contact</a> </button>
    </nav>
</header>

<style>
    a {
        text-decoration: none;
        color: #000;
    }

    a:hover {
        text-decoration: none;
        color: #535353;
    }
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        top: 0;
        position: sticky;
        background-color: #fff;
        z-index: 2;
    }

    h1 {
        font: small-caps bold 6rem sans-serif;
        justify-content: center;
        margin: 0.5rem 0 0rem 0;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        list-style: none;
        font-size: 1.9rem;
        border-bottom: 0.2rem dotted black;
        height: 60px;
        padding-bottom: 1rem;
        width: 45rem;
    }

    button {
        background-color: #fff;
        color: #000;
        padding: 1rem;
        font: small-caps 1.9rem sans-serif;
        border: none;
    }

    button:hover {
        color: #535353;
    }

    p {
        background-color: #fff;
        color: #000;
        font: small-caps 1.9rem sans-serif;
        border: none;
        margin: 0;
    }

    p:hover {
        color: #535353;
    }

    /* Portfolio Menu */
    .menu-click {
        margin: 0;
        padding: 0;
    }

    .portfolio-menu {
        position: absolute;
        background-color: #fff;
        text-align: center;
        font: small-caps 1.2rem sans-serif;
        z-index: 1;
        margin-top: 5px;
    }

    .portfolio-container {
        height: 155px;
        top: 56px;
        color: #000;
        width: 152px;
        font: small-caps 1.9rem sans-serif;
        border: none;
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: center;
        border: 0.1rem solid transparent;
    }

    .menu-items a {
        color: black;
        padding: 12px 0px;
        width: 152px;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        border: 0.1rem solid black;
        font: small-caps 1.2rem sans-serif;
        text-align: center;
    }

    .menu-items a:hover {
        background-color: #c2c2c2;
    }

    /* ----MOBILE ---- */
    @media (max-width: 400px) {
        h1 {
            font: small-caps bold 3rem sans-serif;
            margin: 1rem 0 0 0;
        }

        nav {
            font-size: 1rem;
            border-bottom: 0.05rem dotted black;
            padding-bottom: 1.2rem;
            margin-top: 0;
        }

        button {
            font-size: 1rem;
            padding: 0.5rem;
        }

        /* .portfolio-container:hover .portfolioMenuOpen {
            display: block;
            color: black;
            padding: 5px 10px;
            margin-left: 5px;
            text-decoration: none;
            display: block;
            border: 0.1rem solid black;
            font: small-caps 0.6rem sans-serif;
            text-align: center;
        } */
    }
</style>
