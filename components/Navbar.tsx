import Link from "next/link";
import AuthProviders from "./AuthProviders";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween navbar">
      <Link href="/">
        <h1 className="md:text-5xl text-3xl font-bold text-left w-full max-w-5xl">
          Hard
        </h1>
      </Link>
      <div className="flexCenter gap-4">
        <Link href="/create">Write</Link>
        <Link href="/signin">
          <Button title="Sign In" bgColor="bg-black" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
