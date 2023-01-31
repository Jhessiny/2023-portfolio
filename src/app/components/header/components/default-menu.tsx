import { NavItem } from "../../";
import { RxDotFilled } from "react-icons/rx";

export const DefaultMenu = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <ul className="hidden items-center animate-re-appear md:flex">
      <RxDotFilled color="#42404b" className="mr-5 hidden lg:block" />
      <NavItem href="#home" text="Home" light={isScrolled} />
      <NavItem href="#experience" text="Experience" light={isScrolled} />
      <NavItem href="#projects" text="Portfolio" light={isScrolled} />
      <NavItem href="#resume" text="Resume" light={isScrolled} />
      <NavItem href="/blog" text="Blog" highlight light={isScrolled} />
      <RxDotFilled color="#42404b" className="ml-5 hidden lg:block" />
    </ul>
  );
};
