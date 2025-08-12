import { link } from "fs";

// This is handles the image with text lists
export interface image_list_item {
    src: string;
    alt: string;
    bold? : string;
    text?: string;
}

// Different parts of an article

// Text with list and image
export interface mix_list_image_text {
    id: number;
    type: "mix_list_image_text";
    title?: string;
    colored_title?: string;
    text?: string;
    list?: string[];
    side_text: string;
    img_src: string;
    alt: string;
    img_num: number;
    imgs?: image_list_item[];
}

// Basic Text Box
export interface text_box {
    id : number;
    type : "text_box";
    uppercase_first? : boolean;
    text : string;
}

// Text box with a link
export interface link_box {
    id : number;
    type : "link_box";
    uppercase_first? : boolean;
    text?: string;
    link_text: string;
    post_text?: string;
    link_to: string;
}

// Basic Image
export interface image_part {
    id : number;
    type : "img";
    src : string;
    alt : string;
}

// List with title
export interface list_part {
    id : number;
    type : "titled_list";
    title : string;
    title_colored? : string;
    text? : string;
    cols: number;
    items: string[];
}

// List of images with tags
export interface img_list {
    id : number;
    type : "img_list";
    title : string;
    title_colored? : string;
    text? : string;
    cols: number;
    items: image_list_item[];
}

export type Part = text_box | image_part | list_part | img_list | link_box | mix_list_image_text;

// Page Parts
export interface Hero_Temp {
    img: string;
    alt: string;
    subtitle?: string;
    author?: string;
    date: string;
    type: "hero";
}

export interface Article_Temp {
    content: Part[];
    type: "article";
    bg_img: string;
}

type content = Hero_Temp | Article_Temp ;

export interface SectionData {
    id: string; // Unique ID for the section
    title: string;
    content : content;
    // You can add more fields depending on your design
}

export interface Paragraph {
    id: string;
    first?: string;
    first_quality?: string;
    paragraph: string;
}

export interface ArticleContent {
    title:string;
    sections: SectionData[];
}

/*

COLOUR GUIDES

bg-[radial-gradient(circle_at_center,_#466b61,_#2e403b)] -> Gradient Green, see intro slide of Vegetable Glue
bg-[radial-gradient(circle_at_center,_#2e5d71,_#1c3945)] -> Gradient Blue, see story slide of Vegetable Glue
bg-[radial-gradient(circle_at_center,_#3c3c3c,_#1c2424)] -> Gradient Grey, see Irrigation slide of Vegetable Glue
bg-[radial-gradient(circle_at_center,_#8a7567,_#78655a)] -> Gradient Tan Brown, see Non-Premeable Structure slide 1

*/

export const contentData: Record<string, ArticleContent> = {
    product_launch : {
        title: "Product Launch",
        sections: [
            {
                id: "Hero Image",
                title: "Product Launch - Bamboo OSB",
                content: {
                    img: "/Apartment.png",
                    alt: "Hi-Tech Apartment",
                    subtitle: "Showcasing our new product - Bamboo OSB",
                    date: "May 16th, 2025",
                    type: "hero",
                }
            },
            {
                id: "Article",
                title: "Main Article",
                content: {
                    bg_img: "/daylun_building_balconies.jpg",
                    type: "article",
                    content: [
                            {
                                id: 0,
                                text: `DAYLUN is proud to announce its latest product - Daylun's Exterior OSB Sheathing. Made 
                                    from sustainable materials, this OSB is both insulated and waterproof.`,
                                type: "text_box",
                                uppercase_first: true
                            },
                            {
                                id: 1,
                                type: "img",
                                src: "/blue-bamboo-osb.webp",
                                alt: "bamboo OSB"
                            },
                            {
                                id: 2,
                                type: "titled_list",
                                title: "Key",
                                title_colored: "Features",
                                cols: 2,
                                items: [
                                    "Insulation",
                                    "Quick Installation",
                                    "Improved Energy Performance",
                                    "Preventing Thermal Bridging"
                                ],

                            },
                            {
                                id: 3,
                                type : "img_list",
                                title : "",
                                title_colored: "Sustainability",
                                text : "Additionally, the Bamboo OSB is exceptionally sustainable. It is:",
                                cols: 1,
                                items: [
                                    {
                                        src: "/Recyclable.webp",
                                        alt: "Recyclable",
                                        bold: "Recyclable: ",
                                        text: "Bamboo from old OSB can be reused in new OSB."
                                    },
                                    {
                                        src: "/Upcyclable.webp",
                                        alt: "Upcyclable",
                                        bold: "Upcyclable: ",
                                        text: "Bamboo from old OSB can be reused in new products."
                                    },
                                    {
                                        src: "/Biodegradable.webp",
                                        alt: "Biodegrable",
                                        bold: "Biodegrable: ",
                                        text: "Bamboo from old OSB will degrade, reducing waste."
                                    },
                                ]

                            },
                            {
                                id: 4,
                                text: `Currently retailing for $95 per 4' x 8' sheet.`,
                                type: "text_box",
                                uppercase_first: false
                            },
                            {
                                id: 5,
                                type : "link_box",
                                text : "Learn more about it from our ",
                                link_text: "LinkedIN",
                                link_to: "https://www.linkedin.com/feed/update/urn:li:activity:7328084133274873857/"
                            },
                            {
                                id: 6,
                                type : "link_box",
                                text : "Our purchase our ",
                                link_text: "product",
                                post_text: "today!",
                                link_to: "https://www.linkedin.com/feed/update/urn:li:activity:7328084133274873857/"
                            },
                        ],
                },
                
            }
        ]
    },
    Waterloo_241 : {
        title: "241 Waterloo",
        sections: [
            {
                id: "Hero Image",
                title: "241 Waterloo",
                content: {
                    img: "/241-waterloo.jpg",
                    alt: "241 Waterloo House",
                    subtitle: "Read all about our sustainable house based at 241 Waterloo",
                    date: "May 16th, 2025",
                    type: "hero",
                }
            },
            {
                id: "Article",
                title: "Main Article",
                content: {
                    bg_img: "/toronto-town-home.jpg",
                    type: "article",
                    content: [
                            {
                                id: 0,
                                text: `241 Waterloo is DAYLUN's pilot project, where we experiment with our innovations in
                                 the construction of a house to completion. We've incorporated all of our top-of-the-line 
                                 sustainable technologies into this project. The house will exhibit the future of sustainable
                                  techniques while showcasing Daylun's industry pioneering technologies.`,
                                type: "text_box",
                                uppercase_first: false
                            },
                            {
                                id: 1,
                                type: "img",
                                src: "/toronto-town-home.jpg",
                                alt: "Toronto Town Home"
                            },
                            {
                                id: 2,
                                type: "titled_list",
                                title: "Key",
                                title_colored: "Features",
                                cols: 2,
                                items: [
                                    "R50 Walls and R70 Roof Insulation",
                                    "Green Roof",
                                    "Garage has ample storage due to 11-foot ceiling",
                                    "State of the art security system",
                                    "Heated Driveway and Garage",
                                    "Sprinkler system",
                                    "Heated Flooring throughout House",
                                    "Walkout basement level with backyard",
                                    "Ceiling Vented AC",
                                    "Full outdoor eating and cooking area with sink",
                                    "Engineered porcelain flooring for maximum Heat absorption",
                                    "East and west walls have vertical blinds that change with season to reflect sun or absorb it",
                                    "South facing windows with heated balconies",
                                    "On-demand electric water heaters",
                                    "In-ground water collection tanks",
                                    "Root cellar",
                                    "Smart house-lights, individual room heating control",
                                    "Front wall design detail acts as the “Brain” of the house that is accessible from outside for servicing",
                                    "Electric car outlets x2 in garage",
                                    "Sunk in heated sitting area pit ian backyard",
                                    "Lifi technology for internet",
                                    "Lap pool",
                                    "Biophelic designed staircase with vegetation running from basement to top floor",
                                    "Skylights that shine down on glass floor hallway 2nd floor and main floor",
                                    "Concrete polished cement floor"
                                ],

                            },
                            {
                                id: 3,
                                type: "mix_list_image_text",
                                title: "The",
                                colored_title: "Kitchen",
                                text: "Some of the highlights of the kitchen include: ",
                                side_text: "",
                                list: [
                                    "Quality fixtures and hardware",
                                    "Sufficient storage with a hidden pantry",
                                    "Energy efficient IoT-enabled appliances",
                                    "Energy efficient layered lighting",
                                    "High-end durable flooring",
                                    "Strong and stylish counters",
                                    "Attractive, easy-care Backsplash"
                                ],
                                img_src: "/241-waterloo-kitchen-1.jpg",
                                alt: "Kitchen",
                                img_num: 1,
                                imgs: [
                                        {
                                            src: "/241-waterloo-kitchen-2.jpg",
                                            alt: "Kitchen"
                                        }
                                    ]
                            },
                            {
                                id: 4,
                                type: "mix_list_image_text",
                                title: "The",
                                colored_title: "Bathroom",
                                text: "Some of the highlights of the bathroom include: ",
                                side_text: "",
                                list: [
                                    "GROHE's impeccable bathroom faucets",
                                    "Stylistic and Elegant design",
                                    "Space saving wall-hung water closet with elogated bowl",
                                    "Floor Heating"
                                ],
                                img_src: "/241-waterloo-bathroom.jpg",
                                alt: "Bathroom",
                                img_num: 3,
                                imgs: [
                                        {
                                            src: "/241-waterloo-bathtub.jpg",
                                            alt: "Bathtub"
                                        },
                                        {
                                            src: "/241-waterloo-bathtub-2.jpg",
                                            alt: "Bathtub 2"
                                        },
                                        {
                                            src: "/241-waterloo-toilet.jpg",
                                            alt: "Toilet"
                                        }
                                    ]
                            },
                            {
                                id: 5,
                                type: "mix_list_image_text",
                                title: "The",
                                colored_title: "Bedroom",
                                text: "Some of the highlights of the bedroom include: ",
                                side_text: "",
                                list: [
                                    "Large windows for a cozy sitting area",
                                    "Fusion of designs to create a comfortable vibe",
                                    "Hydro Fireplace",
                                    "Walk-in Closet",
                                    "Built-in Vanity",
                                    "Walk Out Deck With Curtain Wall Windows"
                                ],
                                img_src: "/241-waterloo-master-bedroom-closet.jpg",
                                alt: "Bedroom",
                                img_num: 2,
                                imgs: [
                                    
                                        {
                                            src: "/241-waterloo-master-bedroom-fireplace.jpg",
                                            alt: "fireplace"
                                        },
                                        {
                                            src: "/241-waterloo-master-bedroom-bed.jpg",
                                            alt: "bedroom"
                                        },
                                    ]
                            },
                            {
                                id: 6,
                                type: "text_box",
                                text: "Follow our Articles page to track the progress on our house!"
                            }
                        ],
                },
                
            }
        ]
    },
    Yukon_Factory : {
        title: "Yukon Factory",
        sections: [
            {
                id: "Hero Image",
                title: "Yukon Factory",
                content: {
                    img: "/factory.jpg",
                    alt: "Yukon Factory",
                    subtitle: "Read about our revolutionary factory based in Yukon",
                    date: "May 16th, 2025",
                    type: "hero",
                }
            },
            {
                id: "Article",
                title: "Main Article",
                content: {
                    bg_img: "/toronto-town-home.jpg",
                    type: "article",
                    content: [
                            {
                                id: 0,
                                text: `Having recieved the Factory Innovation and NGen grant, Daylun is currently 
                                constructing it's first micro-factory in Yukon. This factory will be revolutionary - by 
                                leveraging AI and automation, this factory is projected to reduce costs by 30-50%, and 
                                increase product speed by 30%!`,
                                type: "text_box",
                                uppercase_first: false
                            },
                            {
                                id: 1,
                                type: "mix_list_image_text",
                                title: "Why",
                                colored_title: "Yukon",
                                side_text: `The rising demand for more housing in Yukon provides a large market to whom we 
                                can immediately begin selling houses and construction materials to. Moreover, Yukon is rich 
                                in natural resources, which allows us to source materials from the province directly. 
                                Moreover, Yukon's climate will allow us to refine our homes to be maximally efficient; we 
                                can test our homes there to maximize the insulation and energy efficiency of our homes.`,
                                img_src: "/Canada.png",
                                alt: "Our Location",
                                img_num: 0
                            },
                            {
                                id: 2,
                                type: "mix_list_image_text",
                                title: "Unique ",
                                colored_title: "Features",
                                side_text: `By combining our automated technology and our strategic processes, our Yukon 
                                Factory will be highly efficient and require limited human labour. This will helps us reduce
                                 costs, thereby maintaining high profit margins while also ensuring that our product remains
                                  affordable.`,
                                img_src: "/Robot-Arm.jpg",
                                alt: "Robotic Arm",
                                img_num: 0
                            },
                            {
                                id: 3,
                                type: "mix_list_image_text",
                                title: "Looking for ",
                                colored_title: "Partners",
                                side_text: `Daylun is currently interested in partnering with forward-thinking construction 
                                industry experts and financial investors to work together in developing the Yukon Factory 
                                as well as in future projects. We are looking to collaborate to revolutionize the 
                                construction industry by ensuring that projects are both sustainable and affordable.`,
                                img_src: "/how-we-do-it-1.jpg",
                                alt: "Garden Blocks",
                                img_num: 0
                            },
                            {
                                id: 4,
                                type: "link_box",
                                link_text: "CONNECT",
                                text: "",
                                link_to: "mailto:info@daylun.ca",
                                post_text: "with us if you are interested."
                            },
                        ],
                },
                
            }
        ]
    }
}