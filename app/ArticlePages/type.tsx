/*
 * ARTICLE PART TYPES
 *
 *  Different type of configurations for the article which are setup in /ArticlePages/content.tsx
 *  Modify templates.tsx to change how the configuration information gets displayed. 
 *
 *  An Article is a ArticleContent
 *
 *  To add new types of parts, create a new type of Part. Part require id and uniqye type. 
 *  Part should then be added to type Part. 
*/


/* 
 * IMAGE_LIST_ITEM
 *  In the Image List, this is each item in the list. 
 *  src: image for list icon. 
 *  alt: alt text
 *  bold: bolded text  (optional)
 *  text: normal text  (optional)
 *
 *  See Sustainability on Product Launch for example. 
*/
export interface image_list_item {
    src: string;
    alt: string;
    bold? : string;
    text?: string;
}

// Different parts of an article

/**
 * MIX LIST IMAGE TEXT
 *      General article section with title, text under, left section with text & list,  
 *      right section with image. Images underneath all. 
 *      id:             unique number for each part
 *      type:           type of part   
 *      img_src:        location for the image on the right side
 *      alt:            alt for image
 *      imgs:           list of images at the button. Leave empty if there are none. 
 *      title:          title of section (optional)
 *      colored_title:  colored part of the title (optional)
 *      text:           text underneath title   (optional)
 *      list:           text list for the left side (optional)
 *      side_text:      text for left side  (optional)
*/
export interface mix_list_image_text {
    id: number;
    type: "mix_list_image_text";
    img_src: string;
    alt: string;
    imgs: image_list_item[];
    title?: string;
    colored_title?: string;
    text?: string;
    list?: string[];
    side_text?: string;
}

/**
 *  TEXT BOX
 *      basic text box
 * 
 *      id: unique number for each part
 *      type: type of part
 *      uppercase_first: is first letter uppercased (optional)
 *      text: text
*/
export interface text_box {
    id : number;
    type : "text_box";
    uppercase_first? : boolean;
    text : string;
}

/**
 *  LINK BOX
 *      basic link box
 * 
 *      id:                 unique number for each part
 *      type:               type of part
 *      uppercase_first:    is first letter uppercased (optional)
 *      text:               text before link (optional)
 *      link_text:          text for the link
 *      post_text:          text after link (optional)
 *      link_to:            where does the link go to. 
*/
export interface link_box {
    id : number;
    type : "link_box";
    uppercase_first? : boolean;
    text?: string;
    link_text: string;
    post_text?: string;
    link_to: string;
}

/**
 *  IMAGE PART
 *      basic image
 * 
 *      id:     unique number for each part
 *      type:   type of part
 *      src:    location of image
 *      alt:    alt text
*/
export interface image_part {
    id : number;
    type : "img";
    src : string;
    alt : string;
}

/**
 * LIST PART
 *      basic list with title
 * 
 *      id:             unique number for each part
 *      type:           type of part
 *      title:          title of the part
 *      title_colored:  colored portion of title (optional)
 *      text:           accompanying text (optional)
 *      cols:           number of columns in the text
 *      items:          list of items 
*/
export interface list_part {
    id : number;
    type : "titled_list";
    title : string;
    title_colored? : string;
    text? : string;
    cols: number;
    items: string[];
}

/**
 * IMG LIST
 *  List using images for points instead of discs.
 *
 *      id:             unique number for each part
 *      type:           type of part
 *      title:          title of the part
 *      title_colored:  colored portion of title (optional)
 *      text:           accompanying text (optional)
 *      cols:           number of columns in the text   
 *      items:          list of items. 
*/
export interface img_list {
    id : number;
    type : "img_list";
    title : string;
    title_colored? : string;
    text? : string;
    cols: number;
    items: image_list_item[];
}


/**
 *  PART type
 *
 *      An Article PART must be one of the following interface types. (their configurations are above)
 *
 *      When adding a new PART, add it to this type. 
 */
export type Part = text_box | image_part | list_part | img_list | link_box | mix_list_image_text;

/**
 *  HERO TEMPLATE
 * Configuration for the hero image.
 *      id:         unique id for section
 *      title:      title show for this hero section
 *      img:        background
 *      alt:        alt text for background
 *      subtitle:   text below title (optional)
 *      author:     article author (optional)
 *      date:       publish date (optional)
 *      type:       section type
 */
export interface Hero_Temp {
    id: number;
    title: string;
    img: string;
    alt: string;
    subtitle?: string;
    author?: string;
    date: string;
    type: "hero";
}

/**
 *  ARTICLE TEMPLATE
 * Configuration for the main part of the article, e.g. paragraphs, images, etc.
 *      id:         unique id for section
 *      title:      title show for this hero section
 *      content:    list of all the Parts of the Article
 *      bg_img:     background
 *      type:       section type
 */
export interface Article_Temp {
    id: number;
    title: string;
    content: Part[];
    type: "article";
    bg_img: string;
}

/**
 * Content type
 *
 *  An Article Section must be one of the following interface types. (their configurations are above)
 *
 *  when adding a new Section, add it to this type. 
*/
export type Content = Hero_Temp | Article_Temp ;


/**
 * ARTICLE CONTENT
 * Configuration for a complete Article
 *  Title:      article title
 *  Sections:   of the Article, e.g. Hero image, main article. 
 */
export interface ArticleContent {
    title:string;
    sections: Content[];
}