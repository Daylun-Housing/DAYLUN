export interface SectionData {
    id: string; // Unique ID for the section
    type: string;
    title: string;
    content?: string;
    content_arr?: Paragraph[];
        
    /* All IMAGES REQUIRE URL FROM NEXT AND ALT to work */
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
}

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