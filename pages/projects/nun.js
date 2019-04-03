import { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Components
import NavBar from '../../components/NavBar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';

class BarraChocolate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 4,
      photo: 'https://source.unsplash.com/ZdOSy9_DWWg/900x900'
    };
  }

  render() {
    return (
      <div className="container padding-medium">
        <Head>
          <title>Polaar 🎾</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div className="container-project">
          <div className="row pt-5">
            <div className="col-12 text-center medium">
              <h6 className="font-serif bold">mercado nün</h6>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <h2 className="text-center font-serif regular">
                Identidad, Diseño de Interior y Grafica del Local
              </h2>
            </div>
          </div>
          <Share
            twitter={`https://twitter.com/intent/tweet?text=Portafolio%20Carlos%20Moret%20_`}
            facebook={`facebook`}
          />

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium">Naming y Logo</h3>
              <h4 className="font-serif pt-3">
                nün es una palabra mapudungun que forma parte del Lenguage del Pueblo Mapuche
                originario del Sur de Chile). La traduccion al español es;
                <span className="font-sans-serif">nün: agarrar, tomar, recibi</span>
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-4 d-none d-sm-block d-md-block" />

            <div className="col-md-4 col-12 text-center pt-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/logo.jpg)`,
                  paddingTop: '30%'
                }}
              />
            </div>
            <div className="col-4 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium">
                Grafica, Mobiliario y Diseño del Local
              </h3>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row py-5">
            <div className="col-md-6 col-12 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/nun1.jpg)`,
                  paddingTop: '97%'
                }}
              />
            </div>
            <div className="col-md-6 col-12 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/nun3.jpg)`,
                  paddingTop: '97%'
                }}
              />
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-4 col-12 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/Carteles3.png)`,
                  paddingTop: '50%'
                }}
              />
            </div>
            <div className="col-md-4 col-12 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/Carteles1.png)`,
                  paddingTop: '50%'
                }}
              />
            </div>
            <div className="col-md-4 col-12 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/Carteles2.png)`,
                  paddingTop: '50%'
                }}
              />
            </div>
          </div>

          <div className="row py-3" />

          <div className="row py-5">
            <div className="col-md-6 col-12 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/Envases.jpg)`,
                  paddingTop: '67%'
                }}
              />
            </div>
            <div className="col-md-6 col-12 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/Carteles0.png)`,
                  paddingTop: '67%'
                }}
              />
            </div>
          </div>
          <div className="row py-3" />
          <div className="row py-3">
            <div className="col-md-6 col-12 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/nun2.jpg)`,
                  paddingTop: '70%'
                }}
              />
            </div>
            <div className="col-md-6 col-12 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/nun4.jpg)`,
                  paddingTop: '70%'
                }}
              />
            </div>
          </div>
          <div className="row py-3" />
          <div className="row py-5">
            <div className="col-3 d-none d-sm-block d-md-block" />
            <div className="col-md-6 col-12">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/sticker.png)`,
                  paddingTop: '15%'
                }}
              />
            </div>
            <div className="col-3 d-none d-sm-block d-md-block" />
          </div>

          <div className="row py-5">
            <div className="col-md-6 col-12 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/menu.jpg)`,
                  paddingTop: '67%'
                }}
              />
            </div>
            <div className="col-md-3 col-sm-6 col-12 center-y py-3">
              <div
                className="img-3x4 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/menu1.jpg)`,
                  paddingTop: '133%'
                }}
              />
            </div>
            <div className="col-md-3 col-sm-6 col-12 center-y py-3">
              <div
                className="img-3x4 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/nun/menu3.jpg)`,
                  paddingTop: '133%'
                }}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default BarraChocolate;
