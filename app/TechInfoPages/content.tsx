import { InfoContent } from "./types"
/*

COLOUR GUIDES

bg-[radial-gradient(circle_at_center,_#466b61,_#2e403b)] -> Gradient Green, see intro slide of Vegetable Glue
bg-[radial-gradient(circle_at_center,_#2e5d71,_#1c3945)] -> Gradient Blue, see story slide of Vegetable Glue
bg-[radial-gradient(circle_at_center,_#3c3c3c,_#1c2424)] -> Gradient Grey, see Irrigation slide of Vegetable Glue
bg-[radial-gradient(circle_at_center,_#8a7567,_#78655a)] -> Gradient Tan Brown, see Non-Premeable Structure slide 1

*/

/**
 * contentData
 *  contentData is the configuration for the articles accessible via TechInfoPages.
 */
export const contentData: Record<string, InfoContent> = {
    vegetable_glue: {
        title: "Vegetable Glue",
        sections: [
            {
                id: 'intro',
                type: 'intro',
                title: `VEGETABLE 
                GLUE`,
                img:"/VG_GLUE.png",
                imgAlt: "Vegetable Glue",
                bgColor: "bg-[radial-gradient(circle_at_center,_#466b61,_#2e403b)]", /* Left is inside, right is outside  BG for the left side*/
                logo: true,
                textColor: "text-[#edc337]", /*Main text colour, for title */
                textColorSub: "text-[#cbd4d1]", /* Text color for subtitles, e.g. descriptions */
                textColorSub2: "text-[#466b61]", /* Text color for the faint emphasis title */
                subheading:`SUSTAINABLE
                            HOUSING
                            CONSTRUCTION
                            SOLUTIONS`,
                subheading2: "VEGETABLE" /* For Emphasize Title */
            },
            {
                id: 'intro_video',
                type: 'video',
                title: `INTRODUCING the`,
                subheading: " VEGETABLE GLUE",
                bgColor: "bg-[radial-gradient(circle_at_center,_#3c3c3c,_#1c2424)]", /* Left is inside, right is outside  BG for the left side*/
                textColorBasic: "text-white", /*Main text colour, for title */
                textColorEmph: "text-[#edc337]", /*For the Titles */
                textColorEmph2: "text-[#168edb]", /* Emphasis on special words */
                embed: true,
                link: "https://www.youtube.com/embed/7tYkK2P40ho?si=UpcLlufCEKFd1ICP",
            }, 
            {
                id: 'story',
                type: 'story',
                title: 'VEGETABLE GLUE',
                content: `At Daylun, our journey towards developing our revolutionary vegetable glue began with a commitment to sustainability, led by our CEO, Arthur Zankowicz. With extensive experience in sustainable product development within the fashion industry, Arthur was committed to creating eco-friendly solutions. While overseeing the production of a sustainable sandal in Asia, he faced a significant challenge: the overwhelming odors from the conventional adhesives used, despite rigorous ventilation. This moment of discomfort sparked a realization that a truly earth-friendly product couldn’t rely on harsh, chemical-laden glues.

                            Determined to find a better solution, Arthur spearheaded the development of an organic adhesive. The result was a vegetable-based glue that not only matched the strength of traditional epoxy but also eliminated harmful fumes and chemicals. Embracing this innovation, Daylun has since expanded the application of our vegetable glue beyond fashion accessories to the housing construction industry, offering a sustainable alternative for builders aiming to reduce chemical use and enhance environmental friendliness in their projects`,
                bgColor: "bg-[radial-gradient(circle_at_center,_#2e5d71,_#1c3945)]", /* Left is inside, right is outside  BG for the left side*/
                textColorBasic: "text-white", /*Main text colour, for title */
                textColorEmph: "text-[#edc337]", /*For the Titles */
                textColorEmph2: "text-[#0474BC]", /* Emphasis on special words */
                imgBgColor: "bg-white",
                cols: 2,
                imgs: [
                    {
                        img: "/Shoe.png",
                        alt: "shoe"
                    },
                    {
                        img: "/Lab.png",
                        alt: "lab",
                    },
                    {
                        img: "/Factory.png",
                        alt: "Factory Interior"
                    }
                ]
            }, 
            {
                id: 'applications-1',
                type: 'applications',
                title: `PERMEABLE DRIVEWAY`,
                bgColor: "bg-[radial-gradient(circle_at_center,_#466b61,_#2e403b)]", /* Left is inside, right is outside  BG for the left side*/
                textColorBasic: "text-white", /*Main text colour, for title */
                textColorEmph: "text-[#edc337]", /*For the Titles */
                textColorEmph2: "text-[#168edb]", /* Emphasis on special words */
                contentArr: [
                    {
                        id: "pd-1",
                        paragraph: `Daylun brings innovative solutions right to your driveway, utilizing our unique vegetable glue 
                        to pave the way for a greener, more sustainable future. Our permeable driveway systems are 
                        designed not only to enhance your property but also to contribute to the ecological health of 
                        your community.`
                    },
                    {
                        id: "pd-2",
                        first: "Environmental Impact:",
                        first_quality: "font-bold",
                        paragraph: `By allowing water to penetrate through the surface, our driveways 
                        help reduce the load on city sewer systems and mitigate the risk of flooding. This makes the 
                        Daylun driveway an integral part of your home’s green infrastructure, helping to absorb 
                        rainwater where it falls.`
                    },
                    {
                        id: "pd-3",
                        first: "Space Efficiency and Utility:",
                        first_quality: "font-bold",
                        paragraph: `The need for more housing on existing lots creates a challenge 
                        in balancing hard and green spaces. Our permeable driveway allows for this balance, 
                        providing ample hard space that supports additional construction without sacrificing 
                        environmental benefits. This means more room to build and less water runoff, keeping your 
                        property neat and more functional.`
                    },
                    {
                        id: "pd-4",
                        first: "Superior Strength and Durability:",
                        first_quality: "font-bold",
                        paragraph: `With a compressive strength of 15 MPa, our vegetable 
                        glue-based system significantly outperforms traditional asphalt, which typically measures 
                        around 2 MPa. The elastic properties of our glue ensure that the driveway remains resilient 
                        against cracking and weathering, maintaining its integrity and appearance over time.`
                    },
                    {
                        id: "pd-5",
                        first: "Simple and Sustainable Application: ",
                        first_quality: "font-bold",
                        paragraph: `Installation of our permeable driveway is 
                        straightforward—mix pebbles with our vegetable glue, tamp down a layer of 100-150mm, and 
                        achieve a durable surface with a minimal carbon footprint. A small team of two to three people 
                        can efficiently handle the installation, making this an eco-friendly choice for residential 
                        projects`
                    },
                    {
                        id: "pd-6",
                        paragraph: `Choose the Daylun permeable driveway to make your home a model of sustainability and 
                        practicality, prepared for the future while caring for the planet today.`       
                    }
                ],
                cols: 0,
                imgs: [],
            }, 
            {
                id: 'image_showcase',
                type: 'img_showcase',
                title: `APPLICATIONS - `,
                subheading: "PERMEABLE DRIVEWAY",
                bgColor: "bg-[radial-gradient(circle_at_center,_#8a7567,_#78655a)]", /* Left is inside, right is outside  BG for the left side*/
                textColorBasic: "text-white", /*Main text colour, for title */
                textColorEmph: "text-[#edc337]", /*For the Titles */
                textColorEmph2: "text-[#168edb]", /* Emphasis on special words */
                cols: 3,
                imgs: [
                    {
                        img: "/CitySolutions.png",
                        alt: "CITY SOLUTIONS",
                    },
                    {
                        img: "/ParkingLot.png",
                        alt: "PARKING LOT",
                    },
                    {
                        img: "/Durability.png",
                        alt: "DURABILITY",
                    }
                ]
            }, 
            {
                id: 'applications-2',
                type: 'applications',
                title: 'IRRIGATION WATER HARVESTING',
                bgColor: "bg-[radial-gradient(circle_at_center,_#3c3c3c,_#1c2424)]", /* Left is inside, right is outside  BG for the left side*/
                textColorBasic: "text-white", /*Main text colour, for title */
                textColorEmph: "text-[#edc337]", /*For the Titles */
                textColorEmph2: "text-[#168edb]", /* Emphasis on special words */
                cols: 1,
                imgs: [
                    {
                        img: "/Irrigation.png",
                        alt: "Irrigation System",
                    }
                ],
                contentArr: [
                    {
                        id: "iwh-1",
                        paragraph: `In today’s environmentally conscious world, Daylun's permeable roadway system 
                        represents a breakthrough in sustainable infrastructure. Designed using our proprietary 
                        vegetable glue, this system not only supports durable and flexible road surfaces but 
                        also plays a crucial role in water conservation and management strategies.`
                    },
                    {
                        id: "iwh-2",
                        first: "Efficient Water Harvesting:",
                        first_quality: "font-bold",
                        paragraph: `Our permeable roads capture rainwater that would otherwise 
                        run off impervious surfaces, reducing water wastage. Strategically placed pipes beneath 
                        the road surface collect and channel this water, turning everyday rainfall into a valuable 
                        resource.`
                    },
                    {
                        id: "iwh-3",
                        first: "Enhanced Irrigation Capabilities:",
                        first_quality: "font-bold",
                        paragraph: `The harvested water can be directed to nearby fields, 
                        gardens, or urban green spaces, providing a reliable water source for irrigation. This 
                        system is particularly beneficial in areas facing water scarcity and restrictions, ensuring 
                        that natural resources are utilized efficiently.`
                    },
                    {
                        id: "iwh-4",
                        first: "Protection Against Water Damage:",
                        first_quality: "font-bold",
                        paragraph: `By managing where rainwater flows, our roadway 
                        system prevents erosion and protects infrastructural elements like house foundations 
                        from water damage. This proactive water management also mitigates the impact of 
                        heavy rainfall, enhancing the longevity of both the road surface and surrounding 
                        properties.`
                    },
                    {
                        id: "iwh-5",
                        first: "Sustainability and Future Readiness:",
                        first_quality: "font-bold",
                        paragraph: `With the increasing impact of climate change on
                        water resources, our permeable roadway system is more than just an infrastructure
                        solution; it is a step towards a sustainable future. This product reduces the ecological
                        footprint of road construction and maintenance, aligning with global sustainability goals.`
                    },
                    {
                        id: "iwh-6",
                        paragraph: `Choose Daylun’s permeable roadway system for your next project and invest in a 
                        solution that offers durability, ecological benefits, and a proactive approach to water 
                        management.`
                    }
                ]
            },
            {
                id: 'applications-3',
                type: 'applications',
                title: 'ARCHITECTURAL',
                bgColor: "bg-[radial-gradient(circle_at_center,_#2e5d71,_#1c3945)]", /* Left is inside, right is outside  BG for the left side*/
                textColorBasic: "text-white", /* Main text colour, for text */
                textColorEmph: "text-[#edc337]", /*For the Titles */
                textColorEmph2: "text-[#31a0e8]", /* Emphasis on special words */
                botImg: "/ColourPicker.png",
                botImgAlt: "Colour options",
                cols: 1,
                imgs: [
                    {
                        img: "/Garden.png",
                        alt: "Garden",
                    },
                ],
                contentArr: [
                    {
                        id: "a-1",
                        paragraph: ` Explore the creative possibilities in landscape design with Daylun’s 
                        innovative vegetable glue, the perfect companion for landscape architects aiming 
                        to craft stunning, functional outdoor spaces. Our vegetable glue is not only an 
                        essential component for constructing permeable driveways but also excels in 
                        creating beautiful feature walkways.`
                    },
                    {
                        id: "a-2",
                        first: "Versatile Application in Landscaping: ",
                        first_quality: "font-bold",
                        paragraph: `Ideal for securing river rock or pebbles 
                        around tiles or concrete pathways, Daylun vegetable glue keeps these
                        elements stay in place, preventing them from scattering into lawns or other areas. 
                        This is particularly beneficial in preserving the landscape 
                        design integrity while preventing damage to lawn mowers and other maintenance 
                        equipment.`
                    },
                    {
                        id: "a-3",
                        first: "Enhanced Permeability:",
                        first_quality: "font-bold",
                        paragraph: `Even when securing stones, our glue maintains the 
                        permeability of the area. This allows for effective water drainage and 
                        contributes to sustainable landscaping by reducing runoff and promoting natural 
                        water absorption into the soil.`
                    },
                    {
                        id: "a-4",
                        first: "Aesthetic Appeal and Durability:",
                        first_quality: "font-bold",
                        paragraph: `With Daylun vegetable glue, create 
                        walkways that not only enhance the beauty of your outdoor areas but are also 
                        built to last. The glue binds the stones firmly yet subtly, ensuring that the natural 
                        aesthetics are not compromised while offering a durable, stable surface that 
                        withstands both weather and foot traffic.`
                    },
                    {
                        id: "a-5",
                        first: "Eco-Friendly Choice: ",
                        first_quality: "font-bold",
                        paragraph: `Committed to environmental stewardship, Daylun ensures 
                        that even your landscape projects contribute to a greener planet. Our vegetable 
                        glue is formulated from natural, sustainable materials, 
                        reducing the environmental footprint of your landscaping efforts.`
                    },
                    {
                        id: "a-6",
                        paragraph: `Elevate your landscape architecture with Daylun vegetable glue and transform 
                        simple pathways into beautiful and practical features.`
                    }
                ]
            },
            {
                id: 'applications-4',
                type: 'applications',
                title: 'NON-PERMEABLE STRUCTURES',
                bgColor: "bg-[radial-gradient(circle_at_center,_#8a7567,_#78655a)]", /* Left is inside, right is outside  BG for the left side*/
                textColorBasic: "text-white", /* Main text colour, for text */
                textColorEmph: "text-[#edc337]", /*For the Titles */
                textColorEmph2: "text-[#168edb]", /* Emphasis on special words */
                botImg: "/Specs.png",
                botImgAlt: "Bonding Performance",
                cols: 1,
                imgs: [
                    {
                        img: "/garden-house.jpg",
                        alt: "garden house",
                    },
                    {
                        img: "/LakeHouse.png",
                        alt: "Lake House",
                    }
                ],
                contentArr: [
                    {
                        id: "NPS-1",
                        first: `Revolutionizing Construction with Eco-Friendly Vegetable Glue`,
                        first_quality: "font-bold",
                        paragraph: " "
                    },
                    {
                        id: "NPS-2",
                        paragraph: `Building on the success of our Vegetable Glue in creating durable walkways and 
                        driveways, we've taken a groundbreaking step forward with our latest innovation. 
                        Our new formulation of Vegetable Glue is specifically designed for use in rammed 
                        earth foundation walls, marking a significant advancement in sustainable 
                        construction practices.`
                    },
                    {
                        id: "NPS-3",
                        paragraph: `The construction industry often faces criticism for its environmental impact, 
                        primarily due to the extensive use of concrete, which is known for its substantial 
                        carbon footprint. By integrating our eco-friendly Vegetable Glue into the formation 
                        of foundation walls, we effectively address and mitigate this concern. Our special-
                        ly formulated glue transforms the soil into a nonpermeable, robust material, 
                        enhancing the structural integrity of foundation walls with an impressive strength 
                        of 20 MPa, and we are on the cusp of increasing this to 25 MPa.`
                    },
                    {
                        id: "NPS-4",
                        paragraph: `This innovation not only significantly reduces the carbon footprint associated with 
                        traditional construction methods but also leverages the versatility and 
                        environmental benefits of our Vegetable Glue. Join us as we continue to pioneer 
                        new ways to build more sustainable and resilient homes, one foundation at a time.`
                    }
                ]
            },
            {
                id: 'applications-5',
                type: 'applications',
                title: 'NON PERMEABLE STRUCTURES',
                bgColor: "bg-[radial-gradient(circle_at_center,_#466b61,_#2e403b)]", /* Left is inside, right is outside  BG for the left side*/
                textColorBasic: "text-white", /* Main text colour, for text */
                textColorEmph: "text-[#edc337]", /*For the Titles */
                textColorEmph2: "text-[#168edb]", /* Emphasis on special words */
                cols: 1,
                imgs: [
                    {
                        img: "/how-we-do-it.jpg",
                        alt: "Our Blocks",
                    }
                ],
                contentArr: [
                    {
                        id: "NPS-01",
                        paragraph: `At Daylun, we are committed to pioneering sustainable solutions in the 
                        construction industry. Our latest innovation harnesses the potential of recycled plastics, 
                        transforming them into durable building materials with the help 
                        of our environmentally friendly vegetable glue.`
                    },
                    {
                        id: "NPS-02",
                        first: "Recycling Challenges and Solutions:",
                        first_quality: "font-bold",
                        paragraph: `The traditional recycling process for 
                        plastics involves collection, shredding into pellets, and heating—steps that 
                        require significant energy and can release harmful gases. At Daylun, we're 
                        turning this process on its head. Instead of re-melting, we compress various 
                        types of plastic waste directly into molds.`
                    },
                    {
                        id: "NPS-03",
                        first: "Innovative Building Material:",
                        first_quality: "font-bold",
                        paragraph: `Utilizing a unique Lego block mold, we com
                        bine compressed plastic waste with our specially formulated vegetable glue to 
                        create robust house blocks. This method eliminates the emission of harmful 
                        off-gases and drastically reduces energy consumption compared to traditional 
                        plastic recycling methods.`
                    },
                    {
                        id: "NPS-04",
                        first: "Lasting Impact:",
                        first_quality: "font-bold",
                        paragraph: `Our blocks are designed to be as durable as the plastics 
                        they incorporate, ensuring that they last for decades without degrading or 
                        emitting gases. This makes them an ideal material for sustainable construc-
                        tion, particularly in areas heavily impacted by plastic waste.`
                    },
                    {
                        id: "NPS-05",
                        first: "Cost-Effective and Accessible: ",
                        first_quality: "font-bold",
                        paragraph: `By utilizing readily available waste materi-
                        als, we keep the production costs low, making this innovative solution accessible
                        for large-scale implementation in regions needing affordable housing solutions.`
                    },
                    {
                        id: "NPS-06",
                        paragraph: `Choose Daylun for your construction needs and be part of building a sustainable
                         future. Our new house blocks offer an eco-friendly, practical solution to 
                        housing construction that leverages the untapped potential of 
                        recycled plastics.`
                    }
                ]
            },
            {
                id: 'applications-6',
                type: 'applications',
                title: 'WATERPROOFING',
                bgColor: "bg-[radial-gradient(circle_at_center,_#0874bc,_#0474BC)]", /* Left is inside, right is outside  BG for the left side*/
                textColorBasic: "text-white", /* Main text colour, for text */
                textColorEmph: "text-[#edc337]", /*For the Titles */
                textColorEmph2: "text-[#04012A]", /* Emphasis on special words */
                cols: 1,
                imgs: [
                    {
                        img: "/Waterproofing.png",
                        alt: "Waterproof",
                    }
                ],
                contentArr: [
                    {
                        id: "W-1",
                        paragraph: `Daylun, innovation and sustainability are at the core of our mission. Building 
                        on the success of our vegetable glue in the construction industry, we are 
                        excited to introduce its latest application as an eco-friendly exterior water-
                        proofing product.`
                    },
                    {
                        id: "W-2",
                        first: "Eco-Friendly Waterproofing:",
                        first_quality: "font-bold",
                        paragraph: `Traditional waterproofing materials are often 
                        laden with harsh chemicals that can be harmful to both the environment and 
                        your health. Daylun’s vegetable glue is formulated from organic, non-toxic 
                        components, making it a safe and sustainable choice for protecting your 
                        home against water damage.`
                    },
                    {
                        id: "W-3",
                        first: "Superior Protection: ",
                        first_quality: "font-bold",
                        paragraph: `Engineered to provide a robust barrier against mois-
                        ture, our vegetable glue waterproofing solution ensures that your home 
                        remains dry and well-protected from the elements. Its organic composition 
                        does not compromise on performance, offering superior adhesion and 
                        durability comparable to traditional methods.`
                    },
                    {
                        id: "W-4",
                        first: "Health and Safety: ",
                        first_quality: "font-bold",
                        paragraph: `With Daylun's vegetable glue, safeguard your living 
                        space from the risks associated with chemical toxicity found in conventional 
                        waterproofing products. Our solution contributes to a healthier indoor air 
                        quality, making your home safer for families, especially those with children 
                        and pets.`
                    }
                ]
            },
            {
                id: 'delivery',
                type: 'article_gen',
                title: 'DELIVERY',
                bgColor: "bg-[radial-gradient(circle_at_center,_#3c3c3c,_#1c2424)]", /* Left is inside, right is outside  BG for the left side*/
                textColorBasic: "text-white", /* Main text colour, for text */
                textColorEmph: "text-[#edc337]", /*For the Titles */
                textColorEmph2: "text-[#0474BC]", /* Emphasis on special words */
                imgBgColor: "bg-white",
                cols: 2,
                imgs: [
                    {
                        img: "/GlueMethod1.png",
                        alt: "Direct Application Tool",
                    },
                    {
                        img: "/GlueMethod2.png",
                        alt: "Direct Application Tool",
                    }, 
                    {
                        img: "/GlueMethod3.png",
                        alt: "Mixer"
                    }
                ],
                subheading: "OF THE",
                subheading2: "GLUE",
                contentArr: [
                    {
                        id: "D-1",
                        paragraph: `Daylun's  innovative vegetable glue is designed with sustainability and 
                        versatility in mind, tailored for a variety of industrial applications. Our unique 
                        two-component system ensures high-performance bonding with the following 
                        tailored delivery methods:`
                    },
                    {
                        id: "D-2",
                        first: "Direct Application Tool:",
                        first_quality: "font-bold",
                        paragraph: `Ideal for precise, small-scale applications, this tool 
                        features dual channels that simultaneously dispense both components of the 
                        glue, ensuring a perfect mix and consistent application every time.`
                    },
                    {
                        id: "D-3",
                        first: "Mixer for Large Applications: ",
                        first_quality: "font-bold",
                        paragraph: `When your project demands a greater 
                        volume, our robust mixer comes into play. Simply add the 'B' component to 
                        the mixer to achieve a homogeneous blend suited for extensive adhesive 
                        tasks.`
                    },
                    {
                        id: "D-4",
                        first: "Robotic Arm for Automated Assembly:  ",
                        first_quality: "font-bold",
                        paragraph: `For industrial-scale production 
                        requiring the utmost accuracy, our robotic arm system offers programmable 
                        precision. This method facilitates the automated application of exact glue 
                        amounts, optimizing both product usage and labor costs.`
                    }, 
                    {
                        id: "D-5",
                        paragraph: `Each option is supported by our supply logistics, delivering the product in 
                        20-liter buckets, arranged on skids of 36 units each, to accommodate both 
                        large and small scale projects efficiently.`
                    }
                ]
            }
        ]
    }
}