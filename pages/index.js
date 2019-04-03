import { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Components
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../styles/styles.scss';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 4,
      photo: 'https://source.unsplash.com/ZdOSy9_DWWg/900x900',
      projects: [
        {
          id: 1,
          company: 'Follow the Forest',
          description: 'Diseño web tienda online de ropa y articulos de diseño para la vida diaria',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icon-project/ftforest.png',
          image: 'https://s3.eu-west-3.amazonaws.com/polaar/covers/ftforest.jpg',
          link: '/projects/follow-the-forest',
          padding_top: '120%'
        },
        {
          id: 2,
          company: 'Barra Chocolate',
          description: 'Brand Identity, Packaging & Coolaboration',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icon-project/barra.png',
          image: 'https://s3.eu-west-3.amazonaws.com/polaar/covers/barra_cover.jpg',
          link: '/projects/barra-chocolate',
          padding_top: '100%'
        },
        {
          id: 3,
          company: 'Suupeer',
          description: 'Brand Identity, Packaging & Coolaboration',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icon-project/suupeer.png',
          image: 'https://s3.eu-west-3.amazonaws.com/polaar/covers/suupeer.png',
          link: '/projects/barra-chocolate',
          padding_top: '140%'
        },
        {
          id: 4,
          company: 'mercado nün',
          description: 'Identidad, Diseño de Interior y Grafica del Local',
          avatar: 'https://source.unsplash.com/ZdOSy9_DWWg/900x900',
          image: 'https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/nun1.jpg',
          link: '/projects/nun',
          padding_top: '125%'
        },
        {
          id: 5,
          company: 'Hooleap',
          description: 'Creacion de Hooleap, un Marketplece para Educacion en persona',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icon-project/suupeer.png',
          image: 'https://s3.eu-west-3.amazonaws.com/polaar/covers/suupeer.png',
          link: '/projects/hooleap',
          padding_top: '140%'
        }
      ]
    };
  }

  renderAvatar(avatar) {
    if (avatar === 'false' || avatar === null || avatar === '') {
      return <span className="avatar-empty" />;
    } else {
      return <img src={`${avatar}`} className={`avatar avatar-border`} alt="Avatar" />;
    }
  }

  // renderProjectsList() {
  //   const { projects } = this.state;
  //
  //   return projects.map(({ id, company, avatar, image, link }) => {
  //     return (
  //       <div key={id} className="col-lg-6 pb-5">
  //         <Link href={link}>
  //           <a className="png-cursor opacity-hover">
  //             <div className="img" style={{ backgroundImage: `url(${image})` }} />
  //             <div className="row mx-0 pt-3">
  //               <div>{this.renderAvatar(avatar)}</div>
  //               <span className="h5 pl-2 pt-2 regular">{company}</span>
  //             </div>
  //           </a>
  //         </Link>
  //       </div>
  //     );
  //   });
  // }

  renderProjectsList() {
    const { projects } = this.state;

    return projects.map(({ id, company, description, avatar, image, link, padding_top }) => {
      return (
        <div key={id} className="col-lg-3 col-md-4 col-sm-6 col-12 px-2 py-3 align-end">
          <div className="pb-5">
            <Link href={link}>
              <a className="png-cursor opacity-hover">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${image})`, paddingTop: `${padding_top}` }}
                />
                <div className="row mx-0 pt-3">
                  <div className="col-12 text-center">
                    <h6 className="h8 medium pt-2">{company}</h6>
                    <h5
                      className="font-serif underline light"
                      style={{
                        height: '100px'
                      }}>
                      <span className="">{description}</span>
                    </h5>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container padding-small">
        <div className="container-project">
          <Head>
            <title>Polaar 🎾</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <NavBar />
          <div>
            {/* <div className="row pt-5 pb-3">
            <div className="col-12">
              <h3 className="font-serif">CARLOS MORET — Designer and Front-end Developer</h3>
              <h1>PRODUCT DESIGN — For creators, by creators</h1>
            </div>
          </div> */}

            <div className="row pt-5 pb-5">
              <div className="col-12 text-center">
                <h6 className="h7 regular py-3">Carlos Moret</h6>
                <h3 className="font-serif medium pb-2">Portafolio</h3>
                <h4 className="font-serif regular">Product Designer — Front-end Developer</h4>
                {/* <h1>PRODUCT DESIGN — For creators, by creators</h1> */}
              </div>
            </div>
            <div className="row pt-3">{this.renderProjectsList()}</div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Index;
