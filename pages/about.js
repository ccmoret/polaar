import { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Components
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icons_dev_list: [
        {
          id: 1,
          name: 'React',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/react.png',
          link: `https://reactjs.org/`
        },
        {
          id: 2,
          name: 'GraphQL',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/graphql.png',
          link: `https://graphql.org/`
        },
        {
          id: 3,
          name: 'Apollo Client',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/apollo.png',
          link: `https://www.apollographql.com/`
        },
        {
          id: 4,
          name: 'Express',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/express.png',
          link: `https://expressjs.com/`
        },
        {
          id: 5,
          name: 'NextJS',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/nextjs.png',
          link: `https://nextjs.org/`
        },
        {
          id: 6,
          name: 'NodeJS',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/nodejs.png',
          link: `https://nodejs.org`
        },
        {
          id: 7,
          name: 'Stripe API',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/stripeAPI.png',
          link: `https://stripe.com/docs/api`
        },
        {
          id: 8,
          name: 'HTML5',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/html5.png',
          link: `https://www.w3schools.com/html/`
        },
        {
          id: 9,
          name: 'CSS3',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/css3.png',
          link: `https://www.w3schools.com/css/`
        },
        {
          id: 10,
          name: 'Google Maps API',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/googleMaps.png',
          link: `https://developers.google.com/maps/documentation/javascript/tutorial`
        },
        {
          id: 11,
          name: 'MongoDB',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/mongodb.png',
          link: `https://www.mongodb.com/`
        },
        {
          id: 12,
          name: 'Atom',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/atom.png',
          link: `https://atom.io/`
        }
      ],
      icons_design_list: [
        {
          id: 1,
          name: 'Sketch App',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/sketch.png',
          link: `https://www.sketchapp.com/`
        },
        {
          id: 2,
          name: 'Adobe Illustrator',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/illustrator.png',
          link: `https://www.adobe.com/la/products/illustrator.html`
        },
        {
          id: 3,
          name: 'Figma',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/figma.png',
          link: `https://www.figma.com`
        },
        {
          id: 4,
          name: 'Lightroom',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/lightroom.png',
          link: `https://www.adobe.com/la/products/photoshop-lightroom.html`
        },
        {
          id: 5,
          name: 'Invision',
          avatar: 'https://s3.eu-west-3.amazonaws.com/polaar/icons/invision.png',
          link: `https://www.invisionapp.com/`
        }
      ]
    };
  }

  renderAvatar(avatar) {
    if (avatar === 'false' || avatar === null || avatar === '') {
      return <span className="avatar-empty" />;
    } else {
      return <img src={`${avatar}`} className={`avatar`} alt="Avatar" />;
    }
  }

  renderIconsDevList() {
    const { icons_dev_list } = this.state;

    return icons_dev_list.map(({ id, name, avatar, link }) => {
      return (
        <div key={id} className="col-lg-6 col-md-12 col-sm-6 col-12 pb-3">
          <Link href={link}>
            <a target="_blank">
              {this.renderAvatar(avatar)}
              <span className="h7 pl-3 pt-2 regular">{name}</span>
            </a>
          </Link>
        </div>
      );
    });
  }

  renderIconsDesignList() {
    const { icons_design_list } = this.state;

    return icons_design_list.map(({ id, name, avatar, link }) => {
      return (
        <div key={id} className="col-lg-6 col-md-12 col-sm-6 col-12 pb-3">
          <Link href={link}>
            <a target="_blank">
              {this.renderAvatar(avatar)}
              <span className="h7 pl-3 pt-2 regular">{name}</span>
            </a>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Polaar - Carlos Moret</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div className="container padding-medium">
          <div className="container-project">
            <div className="row py-3">
              <div className="col-12">
                <h3 className="text-center font-serif medium">About</h3>
              </div>
            </div>

            <div className="row pt-3">
              <div className="col-2 d-none d-sm-block d-md-block" />
              <div className="col-md-8 col-12">
                <h4 className="font-serif">
                  Mi objetivo profesional es mejorar la vida de las personas a través de productos
                  digitales centrados en el usuario, impactando positivamente en la sociedad,
                  haciéndola más inclusiva, con libre acceso y democratizando las oportunidades.
                </h4>
              </div>
              <div className="col-2 d-none d-sm-block d-md-block" />
            </div>

            <div className="row pt-5">
              <div className="col-md-6 col-12 center-y">
                <div className="p-5-1">
                  <h4 className="font-serif pb-3">Lenguajes y librerias</h4>
                  <h6 className="regular">
                    Entre los mas importantes esta la creacion de proyectos usando una combinacion
                    de React JS para el Front End, GraphQL para comunicar los datos con el Back End
                    programado en NodeJS, MongoDB como base de datos y AWS como infraestructura.
                  </h6>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="p-5-1">
                  <div className="row">{this.renderIconsDevList()}</div>
                </div>
              </div>
            </div>
            <div className="row py-5">
              <div className="col-md-6 col-12 center-y">
                <div className="p-5-1">
                  <h4 className="font-serif pb-3">Software de Diseño</h4>
                  <h6 className="regular">
                    Prototipado e interaccion para UX y UI con Figma, Sketch e InVision, son
                    excelentes herraminetas para generar un canal entre diseño y programacion. El
                    uso de estos software los complemento con el uso de programas de diseño base
                    como lo es la Suite de Adobe.
                  </h6>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="p-5-1">
                  <div className="row">{this.renderIconsDesignList()}</div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
