/*
    ARTICLE BUTTON CONFIGURATION
        defintion for the configuration for an article button. 
        Way for users to access articles. 

        title:  title for the button. 
        src:    image source
        alt:    alt text
        text:   blurb about the article
        goto:   the button will ALWAYS route to ArticlePages. To go to an article, 
                the route needs to have the same value as the key in the Article Record. 
                e.g. to go to product_launch page, goto = "product_launch"
*/

export interface store_button {
    title: string;
    src: string;
    alt: string;
    types: string[];
    goto: string;
    price: number;
}

export const contentData = [
    {
        title: "VEGETABLE GLUE",
        src: "/VegetableGlue.png",
        alt: "Vegetable Glue",
        types: [
            "all",
            "other",
            "adhesive"
        ],
        goto: "vegetable_glue",
        price: 90
    },
    {
        title: "EVAN BOARD",
        src: "/fabric_foam.webp",
        alt: "EVAN BOARD",
        types: [
            "all",
            "other",
            "drywall"
        ],
        goto: "evan_board",
        price: 40
    },
    {
        title: "BAMBOO OSB SHEATHING WITH INSULATION AND WATERPROOFING",
        src: "/blue-bamboo-osb.webp",
        alt: "INSULATED AND WATERPROOF BAMBOO OSB",
        types: [
            "all",
            "lumber",
            "waterproofing"
        ],
        goto: "bamboo_osb_double",
        price: 90.00
    },
    {
        title: "BAMBOO OSB SHEATHING WITH WATERPROOFING",
        src: "/blue-bamboo-osb.webp",
        alt: "WATERPROOF BAMBOO OSB",
        types: [
            "all",
            "lumber",
            "waterproofing"
        ],
        goto: "bamboo_osb_waterproof",
        price: 65.00
    },
    {
        title: "BAMBOO OSB SUBFLOOR",
        src: "/blue-bamboo-barrier-tech-basic.webp",
        alt: "BAMBOO OSB SUBFLOOR",
        types: [
            "all",
            "lumber"
        ],
        goto: "bamboo_osb_basic",
        price: 55.00
    },
    {
        title: "FIBREGLASS (FPR) CLIPS",
        src: "/fibreglass_clips.webp",
        alt: "fibreglass clips",
        types: [
            "all",
            "hardware"
        ],
        goto: "fibreglass_clips",
        price: 9.99
    },
    {
        title: "DAYLUN BLUE SHELL",
        src: "/blue-shell.webp",
        alt: "DAYLUN BLUE SHELL",
        types: [
            "all",
            "house kits"
        ],
        goto: "blue_shell",
        price: 60
    },
    {
        title: "JAW BREAKER",
        src: "/jaw_breaker.webp",
        alt: "JAW BREAKER",
        types: [
            "all",
            "tools"
        ],
        goto: "jaw_breaker",
        price: 8900
    },
    {
        title: "SIPS WALLS",
        src: "/sips.jpg",
        alt: "SIPS WALLS",
        types: [
            "all",
            "lumber"
        ],
        goto: "sips_walls",
        price: 200
    },
    {
        title: "ROOF HANGERS",
        src: "/roof_hanger.webp",
        alt: "Roof Hangers",
        types: [
            "all",
            "hardware"
        ],
        goto: "roof_hangers",
        price: 3.95
    },
    {
        title: "WATERPROOF MEMBRANE",
        src: "/WaterproofMembrane.webp",
        alt: "Waterproof Membrane",
        types: [
            "all",
            "waterproofing"
        ],
        goto: "waterproof_membrane",
        price: 90
    },
]