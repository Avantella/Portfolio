<script>
    import SeeSnail from "$lib/images/monochrome/seesnail.jpg";
    import SeeSnail2 from "$lib/images/monochrome/seesnail2.jpg";

    let isRunning = true;
    let visible = false;
</script>

<main>
    <div class="container">
        <button class="snailBtn" onclick={() => (isRunning = !isRunning)}>
            <img
                src={SeeSnail}
                alt="snail"
                class="snail1"
                style="--play-state: {isRunning ? 'running' : 'paused'}"
            />
            <div class="showTxt">Click to stop me</div>
            <img
                src={SeeSnail2}
                alt="snail"
                class="snail2"
                style="--play-state: {isRunning ? 'running' : 'paused'}"
            />
        </button>
    </div>
</main>

<style>
    .container {
        width: 100dvw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .showTxt {
        display: none;
        border: 2px solid black;
        z-index: 3;
        position: absolute;
    }

    .snailBtn {
        border-style: none;
        background-color: transparent;
        height: 100%;
        width: 50dvw;
        justify-content: center;
        align-items: center;
        display: flex;
        box-shadow: none;
    }

    .snail1 {
        min-width: 40%;
        max-width: 70%;
        min-height: 60%;
        max-height: 70%;
        position: absolute;

        animation: slidetoright 40s infinite;

        animation-delay: 10s;
        z-index: 1;
        background-color: #fff;
        animation-play-state: var(--play-state, paused);
    }

    .snail2 {
        min-width: 40%;
        max-width: 70%;
        min-height: 60%;
        max-height: 70%;

        position: absolute;
        z-index: 1;
        animation: slidefromleft 40s infinite;
        animation-play-state: var(--play-state, paused);
        animation-delay: 10s;
    }

    @keyframes slidefromleft {
        0% {
            transform: translateX(-130vw);
        }
        100% {
            transform: translateX(-10);
        }
    }

    @keyframes slidetoright {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(130vw);
        }
    }
  
</style>
