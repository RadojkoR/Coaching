import { NavLink } from "react-router-dom";


function Nav() {
  const menuItems: string[] = ["Home", "About", "Services", "Testimonials", "Contact"];
  return (
    <nav className="relative mx-auto p-3 bg-slate-200">
      <div className="flex items-center justify-between space-x-20 my-6">
        <div className="z-30">
          <NavLink to={"/"}>COACHING</NavLink>
        </div>
        <ul className="hidden items-center uppercase text-grayishBlue md:flex mr-5">
          {menuItems.map((item, index) => (
            <li className="mr-10" key={index}>
              <NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav