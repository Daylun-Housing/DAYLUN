/*export interface SectionData {
    id: string; // Unique ID for the section
    type: string;
    title: string;
    content?: string;
    content_arr?: Paragraph[];
        
    /* All IMAGES REQUIRE URL FROM NEXT AND ALT to work 
    imageUrl?: string; 
    imagealt? : string;
    imageUrl2?: string;
    imagealt2? : string;
    imageUrl3?: string;
    imagealt3? : string;
    botimageUrl? : string;
    botimagealt? : string;
    img_num? : number;

    embed? : boolean;
    link? : string;

    bgcolor1?: string;
    bgcolor2?: string;
    logo?: boolean;
    textcolor1?: string;
    textcolor2?: string;
    textcolor3?: string;
    subheading1?: string;
    subheading2?: string;
    // You can add more fields depending on your design
}*/

/**
 * IMAGE ARR
 */
interface imgItem {
    img: string;
    alt: string;
}

/**
 * SECTION DATA
 *  Information stored for the template 
 */
interface intro {
    id: string;
    logo: boolean;
    type: "intro";
    bgColor: string;
    textColor: string;
    textColorSub: string;
    textColorSub2: string;
    title: string;
    subheading: string;
    subheading2: string;
    img: string;
    imgAlt: string;
}

/**
 * 
 */
interface story {
    id: string;
    type: "story";
    bgColor: string;
    textColorBasic: string;
    textColorEmph: string;
    textColorEmph2: string;
    title: string;
    content: string;
    imgs: imgItem[];
    cols: number;
    imgBgColor: string;
}

interface applications {
    id: string;
    type: "applications";
    title: string;
    bgColor: string;
    textColorBasic: string;
    textColorEmph: string;
    textColorEmph2: string;
    contentArr: Paragraph[];
    botImg?: string;
    botImgAlt?: string;
    cols: number;
    imgs: imgItem[];
}

interface imgShowcase {
    id: string;
    type: "img_showcase";
    bgColor: string;
    textColorBasic: string;
    textColorEmph: string;
    textColorEmph2: string;
    title: string;
    subheading: string;
    cols: number;
    imgs: imgItem[];
}

interface articleGen {
    id: string;
    type: "article_gen";
    bgColor: string;
    textColorBasic: string;
    textColorEmph: string;
    textColorEmph2: string;
    imgBgColor?: string;
    title: string;
    subheading: string;
    subheading2: string;
    contentArr: Paragraph[];
    botImg?: string;
    botImgAlt?: string;
    cols: number;
    imgs: imgItem[];
    
}

interface video {
    id: string;
    type: "video";
    bgColor: string;
    textColorBasic: string;
    textColorEmph: string;
    textColorEmph2: string;
    title: string;
    subheading: string;
    embed: boolean;
    link: string;
}

export type SectionData = intro | story | applications | imgShowcase | articleGen | video;

export interface Paragraph {
    id: string;
    first?: string;
    first_quality?: string;
    paragraph: string;
}

export interface InfoContent {
    title:string;
    sections: SectionData[];
}