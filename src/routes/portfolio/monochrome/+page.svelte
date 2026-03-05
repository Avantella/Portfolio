<script>
    import ImageGallery from "$lib/components/ImageGallery.svelte";
    import { monochromeImages } from "$lib/data/monochrome-img";
</script>

<div class="page-style">
    <ImageGallery images={monochromeImages}/>
</div>

<style>
 .page-style{
    width: 100dvw; 
    justify-content: center;
    min-height: 61dvh;
    z-index: 5;
 }
</style>
