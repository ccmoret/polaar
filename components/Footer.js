import { Component } from 'react';
import Link from 'next/link';

// import '../styles/styles.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 4
    };
  }

  render() {
    return (
      <div className="pt-5">
        <h6 className="medium">ETC</h6>
        <hr />
        <Link href={`https://github.com/cemoret`}>
          <a target="_blank">
            <span className="h5 font-serif regular mb-0 pr-3">Github</span>
            <svg height="30" width="30">
              <circle cx="15" cy="15" r="15" fill="#333333" />
            </svg>
          </a>
        </Link>
        <hr />
        <Link href={`https://instagram.com/cemoret`}>
          <a target="_blank">
            <span className="h5 font-serif regular mb-0 pr-3">Instagram</span>
            <svg width="30" height="30">
              <defs>
                <linearGradient id="gradient1" x1=".8" y1=".8" x2="0">
                  <stop offset="0" stopColor="#c92bb7" />
                  <stop offset="1" stopColor="#3051f1" />
                </linearGradient>
                <radialGradient id="gradient2" cx=".2" cy="1" r="1.2">
                  <stop offset="0" stopColor="#fcdf8f" />
                  <stop offset=".1" stopColor="#fbd377" />
                  <stop offset=".25" stopColor="#fa8e37" />
                  <stop offset=".35" stopColor="#f73344" />
                  <stop offset=".65" stopColor="#f73344" stopOpacity="0" />
                </radialGradient>
                <circle id="logoContainer" cx="15" cy="15" r="15" />
              </defs>

              <use xlinkHref="#logoContainer" fill="url(#gradient1)" />
              <use xlinkHref="#logoContainer" fill="url(#gradient2)" />
            </svg>
          </a>
        </Link>
        <hr />
        <Link href={`https://twitter.com/ce_moret`}>
          <a target="_blank">
            <span className="h5 font-serif regular mb-0 pr-3">Twitter</span>
            <svg height="30" width="30">
              <circle cx="15" cy="15" r="15" fill="#38A1F3" />
            </svg>
          </a>
        </Link>
        <hr />
        <div className="float-right py-3">
          <h5 className="regular font-serif">Say hello — cemoret@gmail.com</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
