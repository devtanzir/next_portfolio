import { navLinks } from "@/constants/navbar";
import Logo from "./logo";
import CustomLink from "./custom-links";
import SocialLink from "./social-link";
import MobileMenu from "./mobile-controll";

const Navbar = () => {
  return (
    <>
      <header className="w-full z-10 lg:px-16 md:px-12 sm:px-8 px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
        <MobileMenu />
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav className="flex gap-8">
            {navLinks.map((item) => (
              <CustomLink
                key={item.id}
                href={item.to}
                title={item.name}
              ></CustomLink>
            ))}
          </nav>
          <SocialLink />
        </div>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Navbar;
