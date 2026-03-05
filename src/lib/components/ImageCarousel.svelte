<script>
    let { src, alt, id, onnext, onprev, onclose, handleoverlay } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="bigImgBg" onclick={handleoverlay}>
    <div class="container" onclick={handleoverlay}>
        <button class="navBtns" onclick={onprev}>{"<"}</button>

        <div class="imgCont">
            <img {id} {src} {alt} class="bigImg" />
        </div>

        <button class="navBtns" onclick={onnext}>{">"}</button>
    </div>

    <button onclick={onclose} class="closeBtn">Close</button>
</div>

<style>
    .bigImgBg {
        height: 100%;
        width: 120%;
        top: 0px;
        overflow: hidden;

        position: fixed;
        z-index: 20;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: rgba(0, 0, 0, 0.7);
        flex-direction: row;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* background-color: red; */
    }

    .imgCont {
        /* background-color: red; */
        width: 47vw;
        align-items: center;
        justify-content: center;
        display: flex;
    }
    .closeBtn {
        padding: 10px 30px;
        border-style: none;
        cursor: pointer;
        background-color: #000;
        color: #fff;
        font-size: 40px;
        position: absolute;
        top: 22px;
        right: 16%;
        font: small-caps 1.7rem sans-serif;
    }

    .closeBtn:hover {
        background-color: #3a3a3a;
    }

    .navBtns {
        background-color: transparent;
        border-style: none;
        color: #fff;
        font-size: 300px;
        height: 45vh;
        width: 300px;
        display: flex;
        justify-content: center;
        /* background-color: pink; */
    }
    .navBtns:hover {
        color: rgb(160, 160, 160);
    }

    .bigImg {
        max-height: 95vh;
        min-height: 95vh;
        border: 11px solid black;
    }
</style>
