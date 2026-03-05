<script lang="ts">
    import ImageCarousel from "./ImageCarousel.svelte";

    const { images } = $props<{
        images: { uid: string; src: string; large: string; alt: string }[];
    }>();


    let selectedImage = $state({ src: "", alt: "", index: -1 });
    let visible = $state(false);

    function openLargeImg(selectedUid: string) {
        const index = images.findIndex((i: { uid: string; src: string; large: string; alt: string}) => i.uid === selectedUid);
        if (index === -1) return;

        updateImage(index);
        visible = true;
    }

    function updateImage(index: number) {
        const img = images[index];
        selectedImage.src = img.large;
        selectedImage.alt = img.alt;
        selectedImage.index = index;
    }

    function nextImage() {
        if (selectedImage.index === -1) return;
        updateImage((selectedImage.index + 1) % images.length);
    }

    function prevImage() {
        if (selectedImage.index === -1) return;
        updateImage((selectedImage.index - 1 + images.length) % images.length);
    }

    function handleOverlayclick(e: MouseEvent) {
        if (e.target === e.currentTarget) {
            visible = false;
        }
    }
</script>

<div class="gallery">
    {#if visible}
        <ImageCarousel
            src={selectedImage.src}
            alt={selectedImage.alt}
            id="bigImage"
            onclose={() => (visible = false)}
            onnext={nextImage}
            onprev={prevImage}
            handleoverlay={handleOverlayclick}
        />
    {/if}
    {#each images as { uid, src, alt }, i}
        <button id="image-{i}" onclick={() => openLargeImg(uid)} class="imgBtn">
            <img {src} {alt} />
        </button>
    {/each}
</div>

<style>
    .gallery {
        display: flex;
        gap: 2vw;
        justify-content: center;
        flex-wrap: wrap;
        padding: 1rem 2rem;
        min-height: 63vh;
        margin-bottom: 10px;
    }
    img {
        height: 300px;
        object-fit: scale-down;
        object-position: center;
        border: 0.1rem black solid;
        filter: drop-shadow(2px 2px 0px rgb(215, 215, 215));
    }

    img:hover {
        filter: drop-shadow(2px 2px 0px rgb(177, 177, 177));
        height: 301px;
    }

    .imgBtn {
        padding: 0;
        border-style: none;
        box-shadow: none;
    }
</style>
