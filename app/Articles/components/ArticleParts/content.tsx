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

export interface art_button {
    title: string;
    src: string;
    alt: string;
    text: string;
    goto: string;
}

export const contentData = [
    {
        title: "PRODUCT LAUNCH",
        src: "/Bamboo.jpg",
        alt: "Bamboo OSB",
        text: `DAYLUN has launched its Bamboo OSB. A waterproof exterior protection
            layer made from easy-to-work-with materials.`,
        goto: "product_launch"
    },

    {
        title: "241 WATERLOO",
        src: "/flagship-house.jpg",
        alt: "241 Waterloo House",
        text: `241 Waterloo is a net-zero and modular home build incorporating 
              revolutionary materials and technologies.`,
        goto: "Waterloo_241"
    },

    {
        title: "YUKON FACTORY",
        src: "/how-we-do-it.jpg",
        alt: "How We Do It",
        text: `Our Yukon valley will be operation soon. This will be our first,
            automated factory that will produce our flagship products.`,
        goto: "Yukon_Factory"
    }
]