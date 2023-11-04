import logoWhite from '../../assets/Images/logo-white.png'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col md:flex-row justify-around space-y-5 md:space-y-0 text-center  px-2 lg:px-10 py-32 bg-black dark:bg-[#212538] text-white">
        <aside>
        <Link className="hidden lg:block">
            <img src={logoWhite} className="w-44"/>
            <h1 className="font-semibold text-3xl ml-3">Ilk Lodge</h1>
          </Link>
        </aside>
        <nav>
          <header className="uppercase font-semibold text-[1rem] text-cyan-300">Services</header>
          <div className="flex flex-row md:flex-col gap-5 justify-center mt-2 md:mt-5">
          <a className="lg:text-[15px] hover:text-cyan-300">Branding</a>
          <a className="lg:text-[15px] hover:text-cyan-300">Design</a>
          <a className="lg:text-[15px] hover:text-cyan-300">Marketing</a>
          <a className="lg:text-[15px] hover:text-cyan-300">Advertisement</a>
          </div>
        </nav>
        <nav className="flex flex-col space-y-5">
          <header className="uppercase font-semibold text-[1rem] text-cyan-300">Company</header>
          <div className="flex flex-row md:flex-col gap-5 justify-center mt-2 md:mt-5">
          <a className="lg:text-[15px] hover:text-cyan-300">About us</a>
          <a className="lg:text-[15px] hover:text-cyan-300">Contact</a>
          <a className="lg:text-[15px] hover:text-cyan-300">Jobs</a>
          <a className="lg:text-[15px] hover:text-cyan-300">Press kit</a>
          </div>
        </nav>
        <nav className="flex flex-col space-y-5">
          <header className="uppercase font-semibold text-[1rem] text-cyan-300">Legal</header>
          <div className="flex flex-row md:flex-col gap-5 justify-center mt-2 md:mt-5">
          <a className="text-[15px] hover:text-cyan-300">Terms of use</a>
          <a className="text-[15px] hover:text-cyan-300">Privacy policy</a>
          <a className="text-[15px] hover:text-cyan-300">Cookie policy</a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
