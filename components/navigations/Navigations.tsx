import { Moirai_One } from "next/font/google";
import { JSX } from "react";

const moiraiOne = Moirai_One({
  subsets: ["latin"],
  weight: "400", // only weight available
  display: "swap", // optional for performance
});

export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <img
          src={"/logo/img.png"}
          width={100}
          height={100}
          className="rounded-md"
        />
        <p>Effortlessly provide and manage your WiFi hotspot.</p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Software</a>
        <a className="link link-hover">Locations</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </nav>
    </footer>
  );
}

export function Drawer({ ui }: { ui: React.ReactNode }) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 navbar-start w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className={`mx-2 flex-2 px-2 text-2xl bold font-mono`}>
            Gidli Net
          </div>
          <div className="hidden flex-2  lg:block">
            <ul className="menu menu-horizontal  ">
              {/* Navbar menu content here */}
              <li>
                <a>Home</a>
              </li>
              <li>
                <details>
                  <summary>Pricing</summary>
                  <ul className="bg-base-100 w-56 rounded-t-none p-2">
                    <li>
                      <a>Hotspot User</a>
                    </li>
                    <li>
                      <a>Partners</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Locations</a>
              </li>
            </ul>
          </div>
          <div className="hidden flex-1 navbar-end  lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <a href="/login" className="btn btn-primary btn-outline">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        {ui}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export const Main = () => {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start font-mono">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold font-mono">
              Welcome to Gidli Net
            </h1>
            <br></br>
            <h1 className="text-2xl text-left font-bold font-mono">
              Hotspot User?
            </h1>
            <p className="py-6 text-left">
              Connect to the internet easily through our partner hotspots. Pay
              hassle-free using QR Ph powered by Maya — we even cover the
              transaction fees!
            </p>
            <h1 className="hidden text-2xl text-left font-bold font-mono">
              Has internet ?
            </h1>
            <p className="hidden py-6 text-left">
              Share your internet with others through Gidli Net. We’ll help you
              provide hotspot access to users, and you’ll earn every time
              someone loads or buys a promo.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export const ContentContianer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start font-mono">
      <div className="hero bg-base-200 min-h-screen">{children}</div>
    </main>
  );
};
