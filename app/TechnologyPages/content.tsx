/**
 * TECH PAGE CONTENT
 *      Configuration for the product information pages
 *      Effectively a copy of Shopify
 *      title:          title of product
 *      price:          price of the product
 *      TechImage:      Image for the product
 *      ImageAlt:       Alt text
 *      description:    description of the product
 *      specifications: list of specs
 *      link:           link to product page
 *      impact :        sustainability impact of the product
 *      why:            why the product was created
 *      features:       listed features of the product
 *      recyclable:     Is it recyclable?
 *      upcyclable:     Is it upcyclable?
 *      biodegrable:    Is it biodegrable?
 */
export interface TechPageContent {
    title: string;
    price: number;
    TechImage?: string;
    ImageAlt?: string;
    description: string;
    specifications: string;
    link: string;
    impact : string;
    why: string;
    features: string;
    recyclable?: boolean;
    upcyclable?: boolean;
    biodegrable?: boolean;
}

/**
 * CONTENT DATA
 *      Record that stores the product pages of different products as a key-value pair. 
 *      Key is product name, value is the configuration for the page. 
 */
export const contentData: Record<string, TechPageContent> = {
    vegetable_glue: {
        title: "Vegetable Glue",
        price: 90,
        description: "Daylun's Vegetable Glue emerged from the need for an eco-friendly alternative to conventional adhesives. Originating from experiences in shoe factories and a commitment to sustainability, we aimed to address the environmental and health concerns associated with traditional glues. Through extensive research and development, our technology arm, 50ul Tech, formulated a two-part organic glue that not only rivals epoxy adhesives in strength and versatility but also offers a safer and greener solution for various applications. By creating a glue that is both effective and environmentally friendly, we aim to contribute to a more sustainable future while meeting the demands of modern construction needs.",
        TechImage: "/VegetableGlue.png",
        ImageAlt: "Vegetable Glue",
        specifications: "• 5 gallons or 18.9 Litres per pail",
        link: "https://daylun.myshopify.com/products/vegetable-glue",
        impact: `Strength and Durability: Bamboo has a high strength-to-weight ratio, comparable to or even surpassing that of some woods and steel, which makes it suitable for structural applications and long-lasting construction products. Bamboo is also 25% Harder then Oak.

                Energy Efficiency: Bamboo’s natural properties include excellent insulation, which helps reduce energy costs for heating and cooling in buildings, thereby contributing to more energy-efficient constructions

                Versatility: Bamboo can be processed into a variety of forms, including laminates, panels, and fibers, which offers flexibility in design and application in construction, such as in projects from flooring and walls to furniture and roofing.`,
        why: `Bamboo is a structurally sound material that can be a powerful alternative to wood-based materials, while 
                also being replenished at a much faster rate. Unlike trees, which takes decades to mature, Bamboo can 
                mature within 1 decade.`,
        features: `• Leeds Certified

                    • Tensile Strength

                    • Structural Strength

                    • Waterproof`,
        recyclable: true,
        upcyclable: true,
        biodegrable: true
    },
    evan_board: {
        title: "EVAN Board",
        price: 40,
        description: "The EVAN board acts as an Interior Drywall replacement. Daylun developed this product as an alternative to drywall or gypsum, addressing the challenges of their heaviness and messiness. Our EVA board is 80% lighter, more manageable, and boasts tensile strength, a feature lacking in traditional drywall. Daylun’s EVAN walls are built from a highly versatile polyolefin low smoke and halogen-free flame-retardant material. Created from ethyl vinyl acetate (EVA) – the same innovative material found in running shoes – this material is lightweight, low density, age-defying properties, and has superior sound insulation.",
        TechImage: "/fabric_foam.webp",
        ImageAlt: "EVAN Board",
        specifications: "• Boards arrive in 4x8 sheets \n• Each board has a thickness of 5⁄8” or 16mm. \n• Feels like a stiff foam • MPA strength 8",
        link: "https://daylun.myshopify.com/products/evan-board",
        impact: "Unlike traditional drywall, EVAN Walls are recyclable as well as biodegradable.",
        why: `The EVAN board is best-suited for drywall applications and surfaces that call for painting. Offering 
mold-establish a ground-free attributes and insulation, EVAN walls are well-suited for diverse climates.  
Daylun EVAN walls  breaking benchmark in fire safety products, attaining B1 level flame-retardant   
performance and are free of halogens. `,
        features:`• MPA strength 8

• B1 level flame-retardant performance and free of halogens

• Recyclable and Biodegradable`,
        recyclable: true,
        upcyclable: true,
        biodegrable: true
    },
    bamboo_osb: {
        title: "Bamboo OSB",
        price: 40,
        description: "Daylun Bamboo Oriented Strand Board (OSB) stands out from traditional OSB solutions with its exceptional blend of enduring strength, moisture resistance and robust nail-holding capabilities. Enhanced by the polyurethane bond of sub floor adhesive, the OSB assembly ensures that the panel-to-joist connection is so formidable that squeaks are virtually non-existent. Moreover, Daylun achieves sustainability excellence by leveraging bamboo as a building material, which is not only durable but also 100% sustainable.",
        TechImage: "/blue-bamboo-osb.webp",
        ImageAlt: "Bamboo OSB",
        specifications: "• Constructed from 100% sustainable bamboo \n• Total thickness is 2 in \n• 4’x8’ \n• Waterproofed and Insulated",
        link: "https://daylun.myshopify.com/products/spec-sheet",
        impact: `Strength and Durability: Bamboo has a high strength-to-weight ratio, comparable to or even surpassing that of some woods and steel, which makes it suitable for structural applications and long-lasting construction products. Bamboo is also 25% Harder then Oak.

                Energy Efficiency: Bamboo’s natural properties include excellent insulation, which helps reduce energy costs for heating and cooling in buildings, thereby contributing to more energy-efficient constructions

                Versatility: Bamboo can be processed into a variety of forms, including laminates, panels, and fibers, which offers flexibility in design and application in construction, such as in projects from flooring and walls to furniture and roofing.`,
        why: `Bamboo is a structurally sound material that can be a powerful alternative to wood-
based materials, while also being replenished at a much faster rate. Unlike trees, which takes decades 
to mature, Bamboo can mature within 1 decade.`,
        features:`• Leeds Certified

• Tensile Strength

• Structural Strength

• Waterproof`,
        recyclable: true,
        upcyclable: true,
        biodegrable: true
    }
}