import { NavItem } from "../../";
import { RxDotFilled } from "react-icons/rx";

export const DefaultMenu = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <ul className="hidden items-center animate-re-appear md:flex">
      <RxDotFilled color="#42404b" className="mr-5 hidden lg:block" />
      <NavItem href="/" text="Home" light={isScrolled} />
      <NavItem href="/" text="Experience" light={isScrolled} />
      <NavItem href="/" text="Portfolio" light={isScrolled} />
      <NavItem href="/" text="Resume" light={isScrolled} />
      <NavItem href="/" text="Blog" highlight light={isScrolled} />
      <RxDotFilled color="#42404b" className="ml-5 hidden lg:block" />
    </ul>
  );
};
