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
 *  img:    image location
 *  alt:    image description
 */
interface imgItem {
    img: string;
    alt: string;
}

/**
 * INTRO
 * 
 * intro 'slide', features title and image on the side. 
 * id:              id for section, unique
 * logo:            should logo be included
 * type:            section type, always intro
 * bgColor:         tailwind code for setting slide background color
 * textColor:       tailwind code for setting main text color
 * textColorSub:    tailwind code for setting subheading text color
 * textColorSub2:   tailwind code for setting secondary text color
 * title:           slide title
 * subheading:      subheading text
 * subheading2:     subheading 2 text
 * img:             source of image
 * imgAlt:          description of image
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
 * STORY
 * 
 * story 'slide', describes story behind a product
 * id:              id for section, unique
 * type:            section type, always story
 * bgColor:         tailwind code for setting slide background color
 * textColorBasic:  tailwind code for setting main text color
 * textColorEmph:   tailwind code for title
 * textColorSub2:   tailwind code for other title text
 * title:           slide title
 * content:         text on left side
 * subheading2:     subheading 2 text
 * imgs:            array for imgItems that store location and description of images
 * cols:            number of columns that the images in imgs should be displayed in. 
 * imgBgColor:      tailwind code for the color behind images.
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

/**
 * APPLICATIONS
 * 
 * application 'slide', describes how product could be applied. 
 * id:              id for section, unique
 * type:            section type, always story
 * bgColor:         tailwind code for setting slide background color
 * textColorBasic:  tailwind code for setting main text color
 * textColorEmph:   tailwind code for title
 * textColorSub2:   tailwind code for other title text
 * title:           slide title
 * contentArr:      text on left side. Stored in an array of Paragraphs (see above)
 * botImg:          image at the bottom of paragraphs, shown on larger screens only (optional)
 * botImgAlt:       description for botImg (optional)
 * imgs:            array for imgItems that store location and description of images
 * cols:            number of columns that the images in imgs should be displayed in. 
 */
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

/**
 * IMG SHOWCASE
 * 
 * img showcase 'slide', shows images
 * id:              id for section, unique
 * type:            section type, always img_showcase
 * bgColor:         tailwind code for setting slide background color
 * textColorBasic:  tailwind code for setting main text color
 * textColorEmph:   tailwind code for title
 * textColorSub2:   tailwind code for other title text
 * title:           slide title
 * subheading:      text for subtitle
 * imgs:            array for imgItems that store location and description of images
 * cols:            number of columns that the images in imgs should be displayed in. 
 */
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

/**
 * ARTICLE GENERAL
 * 
 * general article 'slide', standard template
 * id:              id for section, unique
 * type:            section type, always article_gen
 * bgColor:         tailwind code for setting slide background color
 * textColorBasic:  tailwind code for setting main text color
 * textColorEmph:   tailwind code for title
 * textColorSub2:   tailwind code for other title text
 * title:           slide title
 * subheading:      subtitle, leave "" if not needed
 * subheading2:     subtitle 2, leave "" if not needed
 * contentArr:      text on left side. Stored in an array of Paragraphs (see above)
 * botImg:          image at the bottom of paragraphs, shown on larger screens only (optional)
 * botImgAlt:       description for botImg (optional)
 * imgBgColor:      color behind the images in imgs,
 * imgs:            array for imgItems that store location and description of images
 * cols:            number of columns that the images in imgs should be displayed in. 
 */
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


/**
 * VIDEO SHOWCASE
 * 
 * video showcase 'slide'
 * id:              id for section, unique
 * type:            section type, always article_gen
 * bgColor:         tailwind code for setting slide background color
 * textColorBasic:  tailwind code for setting main text color
 * textColorEmph:   tailwind code for title
 * textColorSub2:   tailwind code for other title text
 * title:           slide title
 * subheading:      subtitle, leave "" if not needed
 * embed:           does this slide have an embed
 * link:            link to the video
 */
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

/**
 * SECTIONDATA
 * Options for the sections available. 
 */
export type SectionData = intro | story | applications | imgShowcase | articleGen | video;

/**
 * PARAGRAPH
 * used to configure text in sections.
 * id:              unique id for text
 * first:           text that is specially formatted (optional)
 * first_quality:   tailwind code for first text.
 * paragraph:       text of the string. 
 */
export interface Paragraph {
    id: string;
    first?: string;
    first_quality?: string;
    paragraph: string;
}

/**
 * InfoContent
 * Configuration to export
 */
export interface InfoContent {
    title:string;
    sections: SectionData[];
}