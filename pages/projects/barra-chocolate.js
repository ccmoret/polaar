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
              <h6 className="font-serif bold">Barra Chocolate</h6>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-12">
              <h2 className="text-center font-serif regular">
                Packaging e identidad de chocolates Barra Chocolate
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
                Diseño para packaging e identidad de chocolates Barra Chocolate. Cuenta con
                colaboraciones de distintos ilustradores, Catalina Bu, Matías Prado, Camilo Huinca,
                Jennifer Bouron, Eleonora Arosio y Mati Ulloa.
              </h4>
              <h4 className="font-serif pt-3">
                *Finalista al Sello de Excelencia en Diseño, Categoría Gráfica 2015, Área de Diseño
                del Consejo Nacional de la Cultura y de las Artes (CNCA) - Gobierno de Chile
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Identidad</h3>
              <h4 className="font-serif pt-3">
                Es la bienvenida del todos los usuarios al mundo de Follow the Forest, mientras
                menos informacion y mayor claridad en lo que ofrece la pagina mucho mejor. La
                funcion de esta pagina no es mostrar la mayor cantidad de productos o generar una
                compra, lo importante es generar curiosidad en el usuario e incentivar a la
                navegacion.
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row py-5">
            <div className="col-md-2 col-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/logo.jpg)`,
                  paddingTop: '170%'
                }}
              />
            </div>
            <div className="col-md-2 col-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/isotype.jpg)`,
                  paddingTop: '170%'
                }}
              />
            </div>

            <div className="col-md-4 col-6">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/types.jpg)`,
                  paddingTop: '75%'
                }}
              />
            </div>
            <div className="col-md-2 col-6">
              <div
                className="img-3x4 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/IDcard.jpg)`,
                  paddingTop: '170%'
                }}
              />
            </div>
            <div className="col-md-2 col-6">
              <div
                className="img-3x4 shadow"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/IDcardBack.jpg)`,
                  paddingTop: '170%'
                }}
              />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">Packaging</h3>
              <h4 className="font-serif pt-3 pb-5">
                Los chocolates al ser del grano a la barra, el control de produccion en la
                elaboracion es 100% de los ingredientes. Esto se resalta en el diseno al dividir en
                dos zonas los porcentajes de cacao y azucar que contienen. Es por ello que existe
                una division entre los colores y/o ilustraciones (zona inferior) que representan el
                sabor y el azucar (zona superior).
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra17.jpg)`,
                  paddingTop: '66.66%'
                }}
              />
            </div>
            <div className="col-lg-4 col-sm-6 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra19.jpg)`,
                  paddingTop: '66.66%'
                }}
              />
            </div>
            <div className="col-lg-4 col-sm-6 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra18.jpg)`,
                  paddingTop: '66.66%'
                }}
              />
            </div>

            <div className="col-lg-4 col-sm-6 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra14.jpg)`,
                  paddingTop: '66.66%'
                }}
              />
            </div>
            <div className="col-lg-4 col-sm-6 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra15.jpg)`,
                  paddingTop: '66.66%'
                }}
              />
            </div>
            <div className="col-lg-4 col-sm-6 py-3">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra16.jpg)`,
                  paddingTop: '66.66%'
                }}
              />
            </div>
          </div>

          <div className="row py-5">
            <div className="col-12">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/Etiquetas.jpg)`,
                  paddingTop: '60%'
                }}
              />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-md-6 col-12">
              <div className="row py-3">
                <div className="col-6">
                  <div
                    className="img-3x4"
                    style={{
                      backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra-1.jpg)`,
                      paddingTop: '133.33%'
                    }}
                  />
                </div>
                <div className="col-6">
                  <div
                    className="img-3x4"
                    style={{
                      backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra-2.jpg)`,
                      paddingTop: '133.33%'
                    }}
                  />
                </div>
                <div className="col-12 pt-4">
                  <div
                    className="img-3x4"
                    style={{
                      backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra-5.jpg)`,
                      paddingTop: '66.66%'
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="row py-3">
                <div className="col-6">
                  <div
                    className="img-3x4"
                    style={{
                      backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra-3.jpg)`,
                      paddingTop: '133.33%'
                    }}
                  />
                </div>
                <div className="col-6">
                  <div
                    className="img-3x4"
                    style={{
                      backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra-4.jpg)`,
                      paddingTop: '133.33%'
                    }}
                  />
                </div>
                <div className="col-12 pt-4">
                  <div
                    className="img-3x4"
                    style={{
                      backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/barra-6.jpg)`,
                      paddingTop: '66.66%'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-2 d-none d-sm-block d-md-block" />
            <div className="col-md-8 col-12">
              <h3 className="font-serif text-center medium pt-5">
                Planos de Fabricacion Planta de Produccion de Chocolate
              </h3>
              <h4 className="font-serif pt-3 pb-5">
                Los chocolates al ser del grano a la barra, el control de produccion en la
                elaboracion es 100% de los ingredientes. Esto se resalta en el diseno al dividir en
                dos zonas los porcentajes de cacao y azucar que contienen. Es por ello que existe
                una division entre los colores y/o ilustraciones (zona inferior) que representan el
                sabor y el azucar (zona superior).
              </h4>
            </div>
            <div className="col-2 d-none d-sm-block d-md-block" />
          </div>

          <div className="row py-3">
            <div className="col-md-4 col-12">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/Fabrica1.jpg)`,
                  paddingTop: '165%'
                }}
              />
            </div>
            <div className="col-md-4 col-12">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/Fabrica2.jpg)`,
                  paddingTop: '165%'
                }}
              />
            </div>
            <div className="col-md-4 col-12">
              <div
                className="img-3x4"
                style={{
                  backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/barra/Fabrica3.jpg)`,
                  paddingTop: '165%'
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
