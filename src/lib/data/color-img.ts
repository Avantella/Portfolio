// WEBP/Small
import Ariel1 from "$lib/images/color/webp/Ariel.webp"
import Fishbride1 from "$lib/images/color/webp/Fishbride.webp"
import Mushroom1_1 from "$lib/images/color/webp/Mush1.webp"
import Mushroom2_1 from "$lib/images/color/webp/Mush2.webp"
import Mushroom3_1 from "$lib/images/color/webp/Mush3.webp"
import Narwhal1 from "$lib/images/color/webp/Narwhal.webp"
import Octofly1 from "$lib/images/color/webp/Octofly.webp"
import TiredBunny1 from "$lib/images/color/webp/Tired-bun.webp"

// JPEG/PNG/Large
import Ariel2 from "$lib/images/color/Ariel.jpg"
import Fishbride2 from "$lib/images/color/Fishbride.jpg"
import Mushroom1_2 from "$lib/images/color/Mush1.jpg"
import Mushroom2_2 from "$lib/images/color/Mush2.jpg"
import Mushroom3_2 from "$lib/images/color/Mush3.jpg"
import Narwhal2 from "$lib/images/color/Narwhal.png"
import Octofly2 from "$lib/images/color/Octofly.jpg"
import TiredBunny2 from "$lib/images/color/Tired-bun.png"

export const colorImages = [
    {
        uid: crypto.randomUUID(),
        src: Ariel1,
        large: Ariel2,
        alt: "Ariel the little mermaid as Bucky Barnes"
    },
    {
        uid: crypto.randomUUID(),
        src: Fishbride1,
        large: Fishbride2,
        alt: "A fish standing tall wearing a wedding dress"
    },
    {
        uid: crypto.randomUUID(),
        src: Mushroom1_1,
        large: Mushroom1_2,
        alt: "A mushroom with a face sitting and holding it's round tummy"
    },
    {
        uid: crypto.randomUUID(),
        src: Mushroom2_1,
        large: Mushroom2_2,
        alt: "A mushroom with arms and legs, standing looking over it's shoulder, showing off it's bum"
    },
    {
        uid: crypto.randomUUID(),
        src: Mushroom3_1,
        large: Mushroom3_2,
        alt: "A mushroom with arms and legs sitting looking into the camera"
    }, {
        uid: crypto.randomUUID(),
        src: Narwhal1,
        large: Narwhal2,
        alt: "A young narwhal mermaid swimming through the water with a mischevious expression"
    },
    {
        uid: crypto.randomUUID(),
        src: Octofly1,
        large: Octofly2,
        alt: "A blue octopus holding a red balloon, flying upwards "
    },
    {
        uid: crypto.randomUUID(),
        src: TiredBunny1,
        large: TiredBunny2,
        alt: "A tired bunny with steam rising from it's head"
    },
];