import { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Components
import NavBar from '../../components/NavBar';
import Share from '../../components/Share';
import Youtuve from '../../components/Youtube';
import Footer from '../../components/Footer';

class HooleapPage extends Component {
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
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        <div className="container-project">
          <div className="row pt-5">
            <div className="col-12 text-center medium">
              <h6 className="font-serif bold">Hooleap</h6>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <h2 className="text-center font-serif regular">
                Creacion de Hooleap, un Marketplece para Educacion en persona.
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
              <h4 className="font-serif">
                Hooleap es una plataforma para hacer workshops en persona. Ayudando a los creadores
                a compartir sus habilidades a través de la plataforma.
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Problema</h3>
              <h4 className="font-serif pt-3">Doers (Talento Local - Instructores):</h4>
              <h5 className="pt-3">
                <li className="pb-3">
                  Dificultadas para tener una presencia diguital con un sistema seguro de pagos.
                </li>
                <li className="pb-3">
                  Perdida de tiempo en coordinar la logistica de un taller o clase
                </li>
                <li className="pb-3">
                  Encontrar personas para completar el cupo y tener presencia en la comunidad.
                </li>
                <li className="pb-3">No porderse ganar la vida haciendo lo que les apaciona.</li>
              </h5>
              <h4 className="font-serif pt-3">Clientes:</h4>
              <h5 className="pt-3">
                <li className="pb-3">Dificultadas para encontrar talleres en la cuidad.</li>
                <li className="pb-3">
                  Miedo a realizar transferencias y compartir sus datos a una persona desconocida.
                  Falta de sistema de referencias y reviews.
                </li>
                <li className="pb-3">
                  Una falta en diversidad y creatividad en los talleres dado a los negocios
                  estandarizados.
                </li>
                <li className="pb-3">No porderse ganar la vida haciendo lo que les apaciona.</li>
              </h5>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">UI Kit</h3>
              <h4 className="font-serif pt-3">
                Es la bienvenida del todos los usuarios al mundo de Follow the Forest, mientras
                menos informacion y
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-12">
              <div
                className="img-4x3"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/UXKit.jpg)`,
                  paddingTop: '70%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Brand Guidelines</h3>
              <h4 className="font-serif pt-3">
                Es la bienvenida del todos los usuarios al mundo de Follow the Forest, mientras
                menos informacion y
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-03.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-05.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-07.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-13.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-16.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-18.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-23.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-27.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
            <div className="col-4 pb-5">
              <div
                className="img-4x3 linebox"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/Brand-Guidelines-30.jpg)`,
                  paddingTop: '62%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Home</h3>
              <h4 className="font-serif pt-3">
                Implementacion de Identidad grafica desarrollada por Estudio Prado. Adaptar la
                identidad grafica a un estandar web que pueda funcionar en todos los dispositivos
                manteniendo la escencia de la marca
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-12 py-5">
              <div
                className="img-3x4 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/home.jpg)`,
                  paddingTop: '270%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Filtros y Categorizacion</h3>
              <h4 className="font-serif pt-3">
                Implementacion de Identidad grafica desarrollada por Estudio Prado. Adaptar la
                identidad grafica a un estandar web que pueda funcionar en todos los dispositivos
                manteniendo la escencia de la marca
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-12 py-5">
              <div
                className="img-3x4 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/filter2.jpg)`,
                  paddingTop: '71%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Filtros y Categorizacion</h3>
              <h4 className="font-serif pt-3">
                Implementacion de Identidad grafica desarrollada por Estudio Prado. Adaptar la
                identidad grafica a un estandar web que pueda funcionar en todos los dispositivos
                manteniendo la escencia de la marca
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/reviewSystem.jpg)`,
                  paddingTop: '58%'
                }}
              />
            </div>
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/reviewSystem2.jpg)`,
                  paddingTop: '58%'
                }}
              />
            </div>
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/error404.jpg)`,
                  paddingTop: '58%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Payment System</h3>
              <h4 className="font-serif pt-3">
                Implementacion de Identidad grafica desarrollada por Estudio Prado. Adaptar la
                identidad grafica a un estandar web que pueda funcionar en todos los dispositivos
                manteniendo la escencia de la marca
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/payment.jpg)`,
                  paddingTop: '83%'
                }}
              />
            </div>
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/order.jpg)`,
                  paddingTop: '83%'
                }}
              />
            </div>
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/receipt.jpg)`,
                  paddingTop: '83%'
                }}
              />
            </div>
            <div className="col-6 pb-5">
              <div
                className="img-4x3 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/hooleap/ordersList.jpg)`,
                  paddingTop: '70%'
                }}
              />
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12">
              <Youtuve />
              <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/UkwlW8o6THQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default HooleapPage;
