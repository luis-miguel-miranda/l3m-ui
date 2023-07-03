// components/Navbar.tsx
import Link from "next/link";
const Navbar = () => {
  return (
    // Reference: https://daisyui.com/components/navbar/
    <div key="navigationBar" className="navbar bg-base-100 ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Quantum Architecture</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;