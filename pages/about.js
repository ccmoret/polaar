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
        <div key={id} className="col-lg-6 pb-3">
          <Link href={link}>
            <a target="_blank">
              {this.renderAvatar(avatar)}
              <span className="h4 pl-3 pt-2 regular">{name}</span>
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
        <div key={id} className="col-lg-6 pb-3">
          <Link href={link}>
            <a target="_blank">
              {this.renderAvatar(avatar)}
              <span className="h4 pl-3 pt-2 regular">{name}</span>
            </a>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container padding-medium">
        <Head>
          <title>Polaar - Carlos Moret</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div>
          <div>
            <div className="row py-5">
              <div className="col-4" />
              <div className="col-4 ">
                <h2>
                  VSCO is a creative channel. We build creative tools, spaces, and connections
                  driven by self-expression. Our mission is to help everybody fall in love with
                  their own creativity.
                </h2>
              </div>
              <div className="col-4" />
            </div>
            <div className="row pt-5">
              <div className="col-12 pb-5">
                <div
                  className="img-4x3"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/8vKnV-Fvlmk/900x900)`
                  }}
                />
              </div>
            </div>
            <hr />
            <div className="row pt-5">
              <div className="col-6 center-y">
                <div className="p-5">
                  <h2 className="pb-3">Language & Libraries</h2>
                  <h4 className="regular">
                    A product designer who crafts genuine experiences through user interactions,
                    visual design, and prototyping. Learning more about the future of data
                    analytics, consumer products, and the science behind social interactions.
                  </h4>
                </div>
              </div>
              <div className="col-6">
                <div className="p-5">
                  <div className="row">{this.renderIconsDevList()}</div>
                </div>
              </div>
            </div>
            <div className="row py-5">
              <div className="col-6 center-y">
                <div className="p-5">
                  <h2 className="pb-3">Design Software</h2>
                  <h4 className="regular">
                    Previously interned as a UX/UI Design Intern at vivovii, where I had the chance
                    to work on research, design and development of B2B products. See who's behind
                    the work, I don't bite.
                  </h4>
                </div>
              </div>
              <div className="col-6">
                <div className="p-5">
                  <div className="row">{this.renderIconsDesignList()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
