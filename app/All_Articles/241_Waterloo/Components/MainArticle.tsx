import Image from "next/image";
import Kitchen from "./Kitchen";
import Bathroom from "./Bathroom";
import Bedroom from "./Bedroom";

export default function MainArticle() {
  return (
    <div className="bg-[url(/toronto-town-home.jpg)] px-[7%] md:px-[15%]">
      <div className="bg-[#04012A] flex-col">
        <div className="text-sm md:text-md lg:text-xl text-white px-[5%] py-[100px] whitespace-pre-wrap">
          <p>
            241 Waterloo is DAYLUN's pilot project, where we experiment with our
            innovations in the construction of a house to completion. We've
            incorporated all of our top-of-the-line sustainable technologies
            into this project. The house will exhibit the future of sustainable
            techniques while showcasing Daylun's industry pioneering
            technologies.
          </p>

          <div className="flex justify-center mt-5 py-[15px] w-full h-full object-cover">
            <Image
              src="/toronto-town-home.jpg"
              alt="bamboo OSB"
              width={500}
              height={75}
            />
          </div>

          <p>
            Some of the <span className="font-bold text-[#0474BC]">KEY</span>{" "}
            features of 241-Waterloo include:
          </p>
          <div className="flex mt-4 text-xs md:text-sm lg:text-lg gap-4">
            <ul className="flex-col w-1/2 space-y-4">
              <li>- R50 Walls and R70 Roof Insulation</li>
              <li>- Green Roof</li>
              <li>- Heated Driveway and Garage</li>
              <li>- Heated Flooring throughout House</li>
              <li>- Ceiling Vented AC</li>
              <li>
                - Engineered porcelain flooring for maximum Heat absorption
              </li>
              <li>- South facing windows with heated balconies</li>
              <li>- In-ground water collection tanks</li>
              <li>- Garage has ample storage due to 11-foot ceiling</li>
              <li>- Electric car outlets x2 in garage</li>
              <li>- Sunk in heated sitting area pit ian backyard</li>
              <li>- Lap pool</li>
              <li>
                - Biophelic designed staircase with vegetation running from
                basement to top floor
              </li>
            </ul>
            <ul className="flex-col w-1/2 space-y-4">
              <li>- Smart house-lights, individual room heating control</li>
              <li>- State of the art security system</li>
              <li>- Sprinkler system</li>
              <li>- Walkout basement level with backyard</li>
              <li>- Full outdoor eating and cooking area with sink</li>
              <li>
                - East and west walls have vertical blinds that change with
                season to reflect sun or absorb it
              </li>
              <li>- On-demand electric water heaters</li>
              <li>- Root cellar</li>
              <li>
                - Front wall design detail acts as the “Brain” of the house that
                is easily accessible from outside for servicing
              </li>
              <li>- Lifi technology for internet</li>
              <li>- Concrete polished cement floor</li>
              <li>
                - Skylights that shine down on glass floor hallway 2nd floor and
                main floor
              </li>
            </ul>
          </div>

          <Kitchen />

          <Bathroom />

          <Bedroom />

          <div>
            <p>Follow our Articles page to track the progress on our house!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
