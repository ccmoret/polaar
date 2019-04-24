import { Component } from 'react';
import Link from 'next/link';

import '../styles/styles.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 4
    };
  }

  render() {
    return (
      <div className="pt-5">
        <nav className="fixed-top nav-menu px-3">
          <span className="float-left">
            <Link href="/">
              <a className="">
                <svg width="26" height="26">
                  <defs>
                    <linearGradient id="gradient1Polaar" x1=".8" y1=".8" x2="0">
                      <stop offset="0" stopColor="#c92bb7" />
                      <stop offset="1" stopColor="#3051f1" />
                    </linearGradient>
                    <radialGradient id="gradient2Polaar" cx=".2" cy="1" r="1.2">
                      {/* <stop offset="0" stopColor="#fcdf8f" />
                  <stop offset=".1" stopColor="#fbd377" />
                  <stop offset=".25" stopColor="#fa8e37" />
                  <stop offset=".35" stopColor="#f73344" />
                  <stop offset=".65" stopColor="#f73344" stopOpacity="0" /> */}
                    </radialGradient>
                    <circle id="logoPolaar" cx="12" cy="12" r="12" />
                  </defs>

                  <use xlinkHref="#logoPolaar" fill="url(#gradient1Polaar)" />
                  <use xlinkHref="#logoPolaar" fill="url(#gradient2Polaar)" />
                </svg>
                {/* <span>P O L A A R</span> */}
              </a>
            </Link>
          </span>
          <div className="text-center">
            <div>
              <Link href="/">
                <a className="pr-4">
                  <span className="nav-menu-inner">Projects</span>
                </a>
              </Link>
              <Link href="/about">
                <a className="pr-4">
                  <span className="nav-menu-inner">About</span>
                </a>
              </Link>
              <Link href="https://s3.eu-west-3.amazonaws.com/polaar/CV-Carlos-Moret.pdf">
                <a target="_blank" className="pr-4">
                  <span className="nav-menu-inner">CV</span>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
