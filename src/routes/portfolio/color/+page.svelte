<script>
    import ImageGallery from "$lib/components/ImageGallery.svelte";
    import { colorImages } from "$lib/data/color-img";
</script>

<div class="page-style">
    <ImageGallery images={colorImages}/>
</div>

<style>
 .page-style{
    width: 100dvw; 
    justify-content: center;
    min-height: 61dvh;
    z-index: 5;
 }
</style>
