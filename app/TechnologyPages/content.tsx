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
    bamboo_osb_double: {
        title: "Bamboo OSB Sheathing with Insulation and Waterproofing",
        price: 90,
        description: `Daylun Bamboo Oriented Strand Board (OSB) stands out from traditional OSB solutions with its 
exceptional blend of enduring strength, moisture resistance and robust nail-holding capabilities. Enhanced by the 
polyurethane bond of sub floor adhesive, the OSB assembly ensures that the panel-to-joist connection is so formidable 
that squeaks are virtually non-existent. Moreover, Daylun achieves sustainability excellence by leveraging bamboo as a 
building material, which is not only durable but also 100% sustainable.

Comes with Insulation and Waterproofing.`,
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

• Waterproof and Insulated`,
        recyclable: true,
        upcyclable: true,
        biodegrable: true
    },
    bamboo_osb_waterproof: {
        title: "Bamboo OSB Sheathing with Waterproof",
        price: 65,
        description: `Daylun Bamboo Oriented Strand Board (OSB) stands out from traditional OSB solutions with its 
exceptional blend of enduring strength, moisture resistance and robust nail-holding capabilities. Enhanced by the 
polyurethane bond of sub floor adhesive, the OSB assembly ensures that the panel-to-joist connection is so formidable 
that squeaks are virtually non-existent. Moreover, Daylun achieves sustainability excellence by leveraging bamboo as a 
building material, which is not only durable but also 100% sustainable. This version comes with waterproofing. but no 
insulation. `,
        TechImage: "/blue-bamboo-osb.webp",
        ImageAlt: "Bamboo OSB",
        specifications: "• Constructed from 100% sustainable bamboo \n• Total thickness is 2 in \n• 4’x8’ \n• Waterproofed",
        link: "https://daylun.myshopify.com/products/waterproofed-bamboo-barrier-tech",
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
    },
    bamboo_osb_basic: {
        title: "Bamboo OSB Subfloor",
        price: 55,
        description: `Daylun Bamboo Oriented Strand Board (OSB) stands out from traditional OSB solutions with its 
exceptional blend of enduring strength, moisture resistance and robust nail-holding capabilities. Enhanced by the 
polyurethane bond of sub floor adhesive, the OSB assembly ensures that the panel-to-joist connection is so formidable 
that squeaks are virtually non-existent. Moreover, Daylun achieves sustainability excellence by leveraging bamboo as a 
building material, which is not only durable but also 100% sustainable. 

This version comes without the insulation and without waterproofing. `,
        TechImage: "/blue-bamboo-barrier-tech-basic.webp",
        ImageAlt: "Bamboo OSB Subfloor",
        specifications: "• Constructed from 100% sustainable bamboo \n• Total thickness is 2 in \n• 4’x8’",
        link: "https://daylun.myshopify.com/products/bamboo-osb-board",
        impact: `Strength and Durability: Bamboo has a high strength-to-weight ratio, comparable to or even surpassing that of some woods and steel, which makes it suitable for structural applications and long-lasting construction products. Bamboo is also 25% Harder then Oak.

                Energy Efficiency: Bamboo’s natural properties include excellent insulation, which helps reduce energy costs for heating and cooling in buildings, thereby contributing to more energy-efficient constructions

                Versatility: Bamboo can be processed into a variety of forms, including laminates, panels, and fibers, which offers flexibility in design and application in construction, such as in projects from flooring and walls to furniture and roofing.`,
        why: `Bamboo is a structurally sound material that can be a powerful alternative to wood-
based materials, while also being replenished at a much faster rate. Unlike trees, which takes decades 
to mature, Bamboo can mature within 1 decade.`,
        features:`• Leeds Certified

• Tensile Strength

• Structural Strength`,
        recyclable: true,
        upcyclable: true,
        biodegrable: true
    },
    fibreglass_clips: {
        title: "Fibreglass (FPR) Clips",
        price: 9.99,
        description: "Daylun’s Fibreglass Clip reimagines exterior cladding assembly by harnessing the exceptional strength and corrosion resistance of fiberglass-reinforced polymer (FRP). Unlike steel, FRP never rusts, ensuring longevity in any weather condition. Its superior strength, surpassing that of even steel, makes it an ideal material for preventing thermal bridging in building envelopes. By acting as a thermal break between the structure and exterior cladding, our Fiberglass Clip enables architects and specifiers to create thinner, lighter, and more cost-effective cladding systems while significantly enhancing a building’s energy performance. Compatible with various construction materials, including steel frames, concrete, and wood, as well as insulation types such as mineral wool and rigid foam, our Fiberglass Clip offers versatility and efficiency in thermal management.",
        TechImage: "/fibreglass_clips.webp",
        ImageAlt: "Fibreglass Clips",
        specifications:"• Never rusts \n• Superior strength (surpassing steel) \n• Effective insulation for energy saving",
        link:"https://daylun.myshopify.com/products/fiberglass-clips",
        impact: `Improved energy efficiency reduces heating and air conditioning usage, contributing to sustainability.`,
        why: `Daylun's fibreglass clips were designed with the intention of being energy efficient while also being structurally strong. This ensures that our houses are more sustainable, reducing heating and air conditioning costs.`,
        features: "• Never rusts \n• Superior strength (surpassing steel) \n• Effective insulation for energy saving",
        recyclable: true,
        upcyclable: true,
        biodegrable: true
        
    },
    blue_shell : {
        title: "Daylun Blue Shell",
        price: 60,
        description: `Contact us for Blue Shell Orders. It is costed at approximately $60 per square foot. Daylun’s Blue 
Shell is a technical marvel, born from advanced Rivet file generation and crafted in our state-of-the-art AI-driven 
factory. The result is unmatched precision and performance, designed to get builders to the roughed-in stage within 24 
hours of delivery. Every Blue Shell is built to perfection — fast, efficient, and sustainable. 

The Blue Shell isn’t just a product — it’s a revolution in construction. By combining cutting-edge materials, automated 
precision, and sustainable design, Daylun empowers builders to complete projects faster, smarter, and greener.`,
        TechImage: "/blue-shell.webp",
        ImageAlt: "Daylun Blue Shell",
        specifications: `• Exterior Excellence
        ○  Butyl Waterproof Membrane: Protects the entire structure from air and water penetration.
        ○  Fiberglass Cladding Clip System: Makes exterior cladding installation fast and versatile, with space for additional insulation (e.g. Rockwool).
        ○  High-Performance Insulation: Each panel includes 6 inches of closed-cell spray foam, achieving an impressive R-39 wall rating.
        ○  Easy Assembly: Male dovetail inserts fit seamlessly into 8” x 8” structural posts, ensuring a secure and efficient build.
• Integrated Windows
        ○  Blue Shell panels arrive with pre-installed, high-performance windows, designed using the latest building science. Each unit includes:
        ○  Proper sill slopes
        ○  Advanced waterproofing systems
        ○  Factory-sealed installation
        ○  This saves builders from the cost and complexity of on-site window fitting.
• Interior Innovation
        ○  Floor Systems: Engineered floor trusses with 8-inch service openings for easy ductwork and electrical installation.
        ○  Subflooring: Durable ¾” OSB panels, pre-cut, numbered, and ready to install, ensuring quick assembly.
        ○  Lightweight Walls: Interior walls made from light-gauge steel, paired with Daylun’s patented EVA walls — a lightweight, mold-free, biodegradable alternative to drywall.
• Roofing System
        ○  Snap-Together Roof Trusses: Simple installation with Daylun roof hangers.
        ○  Structural Insulated Panels (SIPs): Provides R-32 thermal rating, with the option to add additional insulation for extreme climates.
        ○  Seamless Integration: Designed for strength, airtightness, and superior energy efficiency.`,
        link:"https://daylun.myshopify.com/products/daylun-blue-shell",
        impact: `The Blue Shell revolutionizes construction. Easily customizable, developers can send us their 
specifications and we can build a blue shell fitting those requirements. Between the energy-efficient design and 
fast assembly, developers can rapidly build houses that can meet the Sustainability building codes.`,
        why: `The Blue Shell is the pinnacle of Daylun's achievement - it is the entire package containing all of the 
company's innovative technology. Easy to assemble, the Blue Shell provides builders the framework of any house.`,
        features: `• Energy Efficient Exterior with Butyl Waterproof Membrane, Fiberglass Cladding System, and R-39 wall rating from 6in of closed-cell spray foam
• Integrated Waterproof Windows
• Innovative Interior using 8in service openings in floor trusses, pre-assembled 3/4 in OSB subfloors, and lightweight walls built from light-gauge steel with EVA walls
• Advanced roof system including Snap-together Roof Trusses and R-32 rating SIPs`,
        recyclable: true,
        upcyclable: true,
        biodegrable: true
    },
    jaw_breaker : {
        title: "Jaw Breaker",
        price: 8900,
        TechImage: "/jaw_breaker.webp",
        ImageAlt: "Jaw Breaker",
        description: `The Daylun jaw crusher excels with its adaptability, offering a wide range of discharge opening 
adjustments to meet various production needs. Its deep V crushing cavity design ensures a large crushing ratio and 
efficient material processing, while advanced digital processing enhances precision. Complying with strict environmental standards, the crusher operates
 quietly and minimizes dust pollution, making it a versatile and environmentally friendly choice. `,
        specifications: `•    Model: PE250x400
•    Power: 22HP
•    Feed Opening size: 250x400mm
•    Max Feeding Size: 210 mm
•    Rotational Speed of Eccentric Shaft: 250r/m
•    Adjust Range of Discharge Size: 20-60 mm
•    Capacity: 5-20t/h
•    Weight: 600 Pounds`,
        link: "https://daylun.myshopify.com/products/jaw-breaker",
        impact : `The Jaw Crusher ensures that concrete foundations are reused as gravel, improving the sustainability 
of concrete. Moreover, it saves costs by reducing the need to buy gravel.`,
        why: `Demonstrating our steadfast commitment to the environment, we designed the Daylun Jawbreaker, a compact 
solution for concrete disposal. The Jawbreaker efficiently processes demolished concrete, saving on disposal costs and
 eliminating the need for concrete bin rentals. It transforms concrete waste into usable gravel, reducing expenses on 
 ordering gravel and significantly impacting the carbon footprint by eliminating the need for trucking concrete away 
 or transporting gravel. This deconstruction approach significantly minimizes the waste and trucking that is involved
  in demolishing old houses.`,
        features: `• High Quality Spherical Bearings
• Long Working Life
• High Producitivity
• Easy Maintenance`,
        recyclable: true,
        upcyclable: true,
        biodegrable: true

    },
    roof_hangers : {
        title: "Roof Hangers",
        price: 3.95,
        TechImage: "/roof_hanger.webp",
        ImageAlt: "Roof Hanger",
        description: `Gone are the days of complex and time-consuming roof installations. Daylun offers an 
easy-to-install roof system with truss booty hangers and pre-drilled bolt holes. Simply lift the truss, place it on the 
hangers, and secure with 4 bolts into the base and 6 bolts into the hanger. This customizable steel roof hangers includes
 recycled EVA foam at the base and top for thermal bridging prevention and sound reduction. Designed for effortless 
 installation with printed numbers and product codes, it can be packed according to your shipping preferences—available
  pre-assembled or flat-packed.

Custom Sizing. Call for Pricing. `,
        specifications: `• Open truss is 12”/30cm in height
• 8”/203 opening between webs
• Total span is 24 feet
• Shipped flat to maximize shipping efficiency`,
        link: "https://daylun.myshopify.com/products/roof-trusses",
        impact : "The Roof Hangers make installing your roof a simple process. Additionally, the hanger uses recycled EVA foam for improved sustainability.",
        why: "To save time, we designed the Roof Hangers to be simple to install. With printed numbers and product codes, anyone can assemble the hangers.",
        features: `• Thermal Bridging Prevention
• Sound Reduction`,
        recyclable: true,
        upcyclable: true,
        biodegrable: true,

    },
    sips_walls : {
        title: "Sips Walls (Structural Insulated Panels)",
        price: 200,
        TechImage: "/sips.jpg",
        ImageAlt: "SIPS Wall",
        description: `Daylun’s Structural Insulated Panels (SIPs) feature an insulating foam core sandwiched between two
 structural facings, an oriented strand board (OSB). Fully engineered and fabricated off site, our SIPs offer unrivaled
 insulation and air-tightness, reducing energy costs by up to 50% compared to traditional timber framing. The airtight 
 building envelope minimizes thermal bridging, ensuring excellent indoor air quality and mitigating the risk of mold, 
 mildew, or rot. Our SIPs require less energy during manufacturing – helping your project meet LEED and net-zero 
 building standards. With quick onsite assembly and water tightness achieved in days, Daylun's SIPs Wall offers 
 cost-effectiveness, efficiency, and creative freedom for architects and owners in creating aesthetically pleasing, 
 sustainable spaces. We offer wooden sips and cement board sips for mold and water prevention in warmer climates.`,
        specifications: `• 50% more energy efficient than traditional timber framing
• Straight forward installation
• Graphit EPS
• Reduce Labor Needs by 55%
• One side with Daylun’s blue waterproof membrane
• R value of 30
• 6" wide`,
        link: "https://daylun.myshopify.com/products/sips-walls-structural-insulated-panels",
        impact : "Removes carbon by 20% as foundation is minimized.",
        why: "Insulated Panels (SIPs) feature an insulating foam core sandwiched between two structural facings, typically an oriented strand board (OSB).",
        features: `• 50% more energy efficient than traditional timber framing
• Straight forward installation
• Graphit EPS
• Reduce Labor Needs by 55%
• One side with Daylun’s blue waterproof membrane
• R value of 30`,
        recyclable: true,
        upcyclable: true,
        biodegrable: true

    },
    waterproof_membrane : {
        title: "Waterproof Membrane",
        price: 90,
        TechImage: "/WaterproofMembrane.webp",
        ImageAlt: "Waterproof Membrane",
        description: `As known as the “Blue fuzz”, we developed the Waterproof Membrane to address several key challenges
 in building waterproofing. The self-adhesive design features two layers: a durable butyl backing, resistant to cracking
 even in high temperatures, and an exterior fuzzy fabric that efficiently channels moisture, ensuring quicker drying and
 safer roof access. This membrane effectively seals the building envelope, preventing air and water penetration. 
Additionally, its blue fabric includes measuring marks for precise anchoring point placement, enhancing installation 
accuracy and efficiency.`,
        specifications: `• Peel and stick material

• Butyl- backed membrane

• Water repellant and durable

• 4’x 74’`,
        link: "https://daylun.myshopify.com/products/waterproof-membrane-1",
        impact : "Reduces carbon emissions by 20% as foundation is minimized.",
        why: `The Waterproof Membrane was developed to solve several problems with traditional waterproofing. Thus, the
 Blue Fuzz is resistant to cracking from high temperatures as well as being able to efficiently transfer moisture 
preventing leaks in buildings.`,
        features: `• Peel and stick material

• Butyl- backed membrane

• Water repellant and durable`,
        recyclable: true,
        upcyclable: true,
        biodegrable: true

    }
}