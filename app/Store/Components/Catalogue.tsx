import { contentData } from "./StoreParts/content";
import { useState } from "react";
import Button_Template from "./StoreParts/buttons";
import { IoFilterOutline } from "react-icons/io5";

/**
 * ofType
 * ofType checks if the item types have the selected types. 
 * @param itemTypes 
 * @param selectedTypes 
 * @returns {boolean}
 */
function ofType(itemTypes : String[], selectedTypes : String[]) {
  let type = "";

  if(selectedTypes.length == 0) {
    return true
  }

  for(type in selectedTypes) {
    console.log(type);

    if(itemTypes.includes(selectedTypes[type])) {
      return true;
    }
  }

  return false;
  
}

/**
 * CATALOGUE
 *  Catalogue is the store catalogue. It allows user to select different options and sort. 
 * @returns {JSX.Element}
 */
export default function Catalogue() {
    const options = ["adhesive", "drywall", "lumber", "hardware", "house kits", "tools"]; // Please add 
    const [selected, setSelected ] = useState<string[]>([])
    const [view, setView] = useState(false);
    const [sort, setSort] = useState<"alphabetical (A-Z)" | "alphabetical (Z-A)" | "price ascending" | "price descending">("alphabetical (A-Z)");

    /**
     * sortedOptions
     * This is the sorting function that when a sort is applied, it will 
     * arrange the items with the compare function. 
     */
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

    /**
     * toggle
     * Shows the available sorting options. 
     * @param item 
     */
    const toggle = (item) => {
      setSelected((prev) =>
        prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
      );
    };

    /**
     * filterOn()
     * This function shows the filter options or hides them. 
     */
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
              {/* Shows or hides the filters. */}
              <button onClick={() => filterOn()} className="flex items-center gap-x-2 ml-[5%] w-20">
                <IoFilterOutline /> Filter
              </button>

              {/* The filter options available. */}
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

            {/* The sorting options available. */}
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

          {/* Products */}
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