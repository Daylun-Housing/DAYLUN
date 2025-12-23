import {
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";


/**
 * FOOTER
 * @returns {JSX.Element}
 * Footer for the website. Has three sections, the left with partners  
 * Center for contact information, and socials on the right
 */
export default function Footer() {
  return (
    <footer className="snap-start bg-[var(--footer-blue)] text-[var(--txt-bright)] pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo */}
        <div>
          <a href="/">
            <Image
              src="/DAYLUN.png"
              alt="Daylun Logo"
              width={200}
              height={80}
            />
          </a>
          <div className="flex gap-5 mt-8">
            <a href="https://www.marsdd.com/">
              <Image src="/MaRs.png" alt="MaRs Logo" width={40} height={40} />
            </a>
            <a href="https://dmz.torontomu.ca/oh-canadas-tech-directory/">
              <Image
                src="/DMZ_Sticker.png"
                alt="DMZ Logo"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-4xl font-extrabold text-[var(--light-blue)] mb-4">
            CONTACTS
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@daylun.ca</span>
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe />
              <span>daylun.ca</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-4xl font-extrabold text-[var(--light-blue)] mb-2">
            FOLLOW
            <br />
            <span className="block">US</span>
          </h2>
          <div className="flex gap-4 text-xl mb-4">
            <a href="https://www.instagram.com/daylun_build/">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100077522941552">
              <FaFacebookF />
            </a>
            {/*<FaXTwitter />*/}
            <a href="https://www.youtube.com/@Daylun_Build">
              <FaYoutube />
            </a>
          </div>
          <p className="text-4xl font-extrabold text-[var(--txt-bright)]">#DAYLUN</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-[var(--txt-faint-grey)] mt-12 pt-4 text-center text-sm text-[var(--txt-faint-grey)]">
        © 2025 DAYLUN
      </div>
    </footer>
  );
}
