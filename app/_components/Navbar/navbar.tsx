import { navLinks } from "@/constants/navbar";
import Logo from "./logo";
import CustomLink from "./custom-links";
import SocialLink from "./social-link";

const Navbar = () => {
  return (
    <>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
      </header>
    </>
  );
};

export default Navbar;
