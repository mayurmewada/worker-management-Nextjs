import Link from "next/link";
import { useContext } from "react";
import Context from "../context/ContextProvider";

const Navbar = () => {
  const context = useContext(Context);
  const [count, setCount] = context;

  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navbar-brand">Workers Management</a>
      </Link>
      {/* <a>{count}</a> */}
      <Link href="/new">
        <a className="create">Add New Worker</a>
      </Link>
    </nav>
  );
};

export default Navbar;
