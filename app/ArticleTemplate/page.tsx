import Image from "next/image";
import Header from "../components/Header";

export default function ArticleTemplatePage() {
    return (
      <>
        
        <Header />

        <div className="relative w-screen h-[600px]">
          <Image
                className="brightness-[0.70] object-cover"
                src="/Apartment.png"
                alt="Apartment"
                fill
                />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="px-4 py-6 bg-[#0474BC] text-white text-[50px] space-y-2">
                <p className="text-[100px] font-bold">ARTICLE TITLE</p>
                <p className="text-[40px]">Blurb Blurb Blurb</p>
                <p className="text-[30px]">Daylun | Author | Date</p>
              </div>
            </div>
        </div>
        
        <div className='bg-[url(/daylun_building_balconies.jpg)] px-[275px]'>
        <div className='bg-[#04012A]'>
          <div className="text-[28px] text-white px-[25px] py-[100px] whitespace-pre-wrap">
            <p >
            Body text for whatever you’d like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story. 
            </p>
            <br />
  
            <p>
            Body text for whatever you’d like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story. 
            </p>
            <br />
  
            <p>
            Body text for whatever you’d like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story. 
            Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
            </p>
            <br />
  
            <p>
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. 
            Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian 
            impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia 
            Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur. Body text for your whole article or post. We’ll put in some lorem ipsum to show how 
            a filled-out page might look:
            </p>
            <br />
  
            <p>
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. 
            Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian 
            impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia 
            Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur. Body text for your whole article or post. We’ll put in some lorem ipsum to show how 
            a filled-out page might look:
            </p>
            <br />
  
            <p>
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. 
            Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian 
            impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia 
            Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur. Body text for your whole article or post. We’ll put in some lorem ipsum to show how 
            a filled-out page might look:
  
            </p>
            <br />
          
            <p>
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. 
            Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian 
            impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia 
            Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur. Body text for your whole article or post. We’ll put in some lorem ipsum to show how 
            a filled-out page might look:
  
            </p>
            <br />
            <p>
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. 
            Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian 
            impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia 
            Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur. Body text for your whole article or post. We’ll put in some lorem ipsum to show how 
            a filled-out page might look:
            </p>
          </div>
         </div>
         </div>
         
      </>
    );
  }