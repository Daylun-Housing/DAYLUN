import { contentData } from "./StoreParts/content";
import { useState } from "react";
import Button_Template from "./StoreParts/buttons";
import { IoFilterOutline } from "react-icons/io5";

function ofType(arr : String[], selected : String[]) {
  let type = "";

  if(selected.length == 0) {
    return true
  }

  for(type in selected) {
    console.log(type);

    if(arr.includes(selected[type])) {
      return true;
    }
  }

  return false;
  
}

export default function Catalogue() {
    const options = ["adhesive", "drywall", "lumber", "hardware", "house kits", "tools"];
    const [selected, setSelected ] = useState<string[]>([])
    const [view, setView] = useState(false);
    const [sort, setSort] = useState<"alphabetical (A-Z)" | "alphabetical (Z-A)" | "price ascending" | "price descending">("alphabetical (A-Z)");

    const sortedOptions = [...contentData].sort((a, b) => {
      if(sort === "alphabetical (A-Z)") {
        return a.title.localeCompare(b.title);
      } else if(sort === "alphabetical (Z-A)") {
        return b.title.localeCompare(a.title);
      } else if (sort === "price ascending") {
        return a.price - b.price;
      } else if (sort === "price descending") {
        return b.price - a.price;
      }

      return 0;
    })

    const toggle = (item) => {
      setSelected((prev) =>
        prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
      );
    };

    function filterOn() {
      if(view) {
        setView(false);
      } else {
        setView(true);
      }
    }

    return (
        <section className="relative flex flex-col bg-[var(--dark-blue)] w-full text-center">
          <div className="text-5xl text-[var(--txt-bright)] font-bold mt-10">
            <p>STORE <span className="text-[var(--light-blue)]">CATALOGUE</span></p>
          </div>
          
          <div className="relative rounded p-3 w-full text-[var(--txt-bright)] ">
            <div className="w-full flex items-center">
              <button onClick={() => filterOn()} className="flex items-center gap-x-2 ml-[5%] w-20">
                <IoFilterOutline /> Filter
              </button>

              <div className="">
                <label htmlFor="sort" className="mr-2">Sort by: </label>
                <select id="sort" value={sort} onChange={(e) => setSort(e.target.value as "alphabetical (A-Z)" | "alphabetical (Z-A)" | "price ascending" | "price descending")}
                        className="border rounded px-2 py-1 bg-[var(--dark-blue)]">
                    <option value="alphabetical (A-Z)">Alphabetical (A-Z) </option>
                    <option value="alphabetical (Z-A)">Alphabetical (Z-A) </option>
                    <option value="price ascending"> Price Ascending </option>
                    <option value="price descending"> Price Descending </option>
                </select>
              </div>
            </div>

            {view && 
          <div className="left-0 right-0 w-[120px] absolute z-10 bg-[var(--dark-blue)] border border-4 p-2 ml-[5%] rounded-md ">
            { options.map((item) => (
            <label key={item} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => toggle(item)}
              />
              <span className="text-[var(--txt-bright)]">{item}</span>
            </label>
          ))}

          </div>
          }

            <div className="text-[var(--txt-bright)] mt-2 text-sm ">
              Filters: {selected.join(", ") || "None"}
            </div>
          </div>

          <div
            className={`z-0 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 px-20 gap-y-5 justify-center items-center z-5`}
          > 
            {sortedOptions.map((sub, idx) => (
              (ofType(sub.types, selected) && <Button_Template key={idx} store_button={sub} />) 
            ))}
          </div>
        </section>
    );

}