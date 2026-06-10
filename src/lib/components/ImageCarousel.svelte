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
    /* overflow: hidden; */

    position: fixed;
    z-index: 999;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: rgba(0, 0, 0, 0.7);
    flex-direction: row;
    gap: 100px;
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
    height: 90vh;
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
    color: #d5d5d5;
    font-size: 300px;
    height: 45vh;
    width: 30vw;
    display: flex;
    justify-content: center;
    margin: 2px;
    padding: 10px;
    /* background-color: pink; */
    z-index: 20;
    /* border: 1px solid grey; */
  }
  .navBtns:hover {
    color: rgb(160, 160, 160);
  }

  .bigImg {
    max-height: 90vh;
    /* min-height: 70vh; */
    max-width: 80vw;
    border: 11px solid black;
    position: absolute;
  }

  @media (max-width: 400px) {
    .bigImgBg {
      height: 100vh;
      width: 100%;
      top: 0px;
      /* overflow: hidden; */

      /* position: fixed; */
      z-index: 999;
      /* justify-content: center;
      align-items: center; */
      display: flex;
      background-color: rgba(0, 0, 0, 0.7);
      flex-direction: row;
      /* background-color: red; */
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      /* align-items: center; */
      height: 110vh;
      /* background-color: blue; */
      gap: 170px;
      overflow: hidden;
    }
    .closeBtn {
      padding: 5px 10px;
      border-style: none;
      cursor: pointer;
      background-color: #000;
      color: #fff;
      position: absolute;
      top: 10px;
      right: 6%;
      font: small-caps 1.2rem sans-serif;
    }
    .imgCont {
      background-color: rgb(142, 38, 38);
      height: fit-content;
      width: 100vw;
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }

    .bigImg {
      max-height: 80vh;
      /* min-height: 70vh; */
      max-width: 90vw;
      border: 5px solid black;
      position: absolute;
    }
    .navBtns {
      background-color: transparent;
      border-style: none;
      color: #d5d5d5;
      font-size: 60px;
      height: fit-content;
      width: fit-content;
      display: flex;
      justify-content: center;
      /* background-color: pink; */
      padding: 10px;
      margin: 0;
      z-index: 20;
      line-height: 0%;
      /* border: 1px solid grey; */
    }
  }
</style>
