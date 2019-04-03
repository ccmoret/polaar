import { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Acrylic from 'react-acrylic';

// Components
import NavBar from '../../components/NavBar';
import Share from '../../components/Share';
import Footer from '../../components/Footer';

class FollowTheForestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 4,
      photo: 'https://source.unsplash.com/ZdOSy9_DWWg/900x900'
    };
  }

  renderBlur() {
    return (
      <Acrylic
        colorOverlay="#eee"
        opacity={0.4}
        position="fixed"
        top={200}
        left={0}
        width={`100%`}
        height={400}
        blur={40}>
        {/* <span>Hello Acrylic</span> */}
      </Acrylic>
    );
  }

  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <NavBar />
        {/* {this.renderBlur()} */}
        {/* <div
          className="img-4x3"
          style={{
            backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/ftforest/cover.jpg)`,
            paddingTop: '62%'
          }}
        /> */}
        <div className="container padding-medium">
          <div className="container-project">
            <div className="row pt-5">
              <div className="col-12 text-center medium">
                <h6 className="font-serif bold">Follow the Forest</h6>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-12">
                <h2 className="text-center font-serif regular">
                  Diseño web tienda online de ropa y articulos de diseño para la vida diaria
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
                  Entre el año 2011 y 2014 cree la pagina web responsive para Follow the Forest.
                  Desde la implementacion de la identidad grafica hasta la creacion de la pagina
                  web, junto con elementos fisicos de diseño necesarios para entregar una
                  experiencia completa en el ciclo de compra.
                </h4>
              </div>
              <div className="col-2 d-none d-sm-block d-md-block" />
            </div>
            <div className="row pt-5">
              <div className="col-2 d-none d-sm-block d-md-block" />
              <div className="col-md-8 col-12">
                <h5 className="">
                  La primera etapa del proyecto fue la homogenizacion de la identidad y
                  transformacion de la marca, en la busqueda de una experiencia de compra cercana y
                  coherente con las necesidades del secmento de mercado y precio que apunta el tipo
                  de productos. Como resultado se crea un UI Kit que funciona en todos los
                  dispositivos manteniendo la escencia de la marca.
                </h5>
              </div>
              <div className="col-2 d-none d-sm-block d-md-block" />
            </div>

            <div className="row pt-5">
              <div className="col-2 d-none d-sm-block d-md-block" />
              <div className="col-md-8 col-12">
                <h3 className="font-serif text-center medium">UI Kit</h3>
              </div>
              <div className="col-2 d-none d-sm-block d-md-block" />
            </div>

            <div className="row">
              <div className="col-12">
                <div
                  className="img-4x3"
                  style={{
                    backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/ftforest/UX.jpg)`,
                    paddingTop: '70%'
                  }}
                />
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-2 d-none d-sm-block d-md-block" />
              <div className="col-md-8 col-12">
                <h3 className="font-serif text-center medium pt-5">Home</h3>
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

            <div className="row pt-5">
              <div className="col-12">
                <div
                  className="img-4x3 shadow"
                  style={{
                    backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/ftforest/HomeFTF.jpg)`,
                    paddingTop: '160%'
                  }}
                />
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-2 d-none d-sm-block d-md-block" />
              <div className="col-md-8 col-12">
                <h3 className="font-serif text-center medium pt-5">Filtros y Categorizacion</h3>
                <h4 className="font-serif pt-3">
                  Una vez que el usuario entra a una categoria despues de visitar el Home, la pagina
                  de busqueda de un producto en especifico esta compuesta de diferentes formas de
                  filtros y categorizacion de los productos, esto con la finalidad de entregar mas
                  de una forma de llegar de forma rapida a estilo o tipo de producto. Los filtros y
                  categorias juegan un papel muy importante en el viaje del usuario por la pagina,
                  estos permiten una busqueda en mayor profundidad evitando que el usuario cambie de
                  pagina y sienta que puede volver a la configuracion inicial facilmente.
                </h4>
                <h5 className="pt-3">
                  Los filtros y categorizaciones estan compuestos de:
                  <br />
                  <br />
                  1 - Search: Busque de un producto especifico por las caracteristicas de el nombre
                  del producto o marca.
                  <br />
                  <br />
                  2 - Menu: Estan las principales categorias y subdivision de subcategorias.
                  <br />
                  <br />
                  3 - Submenu: Una vez elegida una categoria principal del menu, se despliegan las
                  subcategorias en botones de filtro, que se activan y desactivan de acuerdo a las
                  preferencias del usuario.
                  <br />
                  <br />
                  4 - Color: Filtro de colores de acuerdo a los articulos disponibles, categoria y
                  subcategoria seleccionada. Los articulos deben ser ingresados en la base de datos
                  con por lo menos dos colores caracteristicos del producto.
                  <br />
                  <br />
                  5 - Filtros Adicionales: Posicionados en un menu lateral izquierdo, permite hacer
                  una busqueda mucho mas detallada.
                </h5>
              </div>
              <div className="col-2 d-none d-sm-block d-md-block" />
            </div>

            <div className="row pt-5">
              <div className="col-12">
                <div
                  className="img-4x3 shadow"
                  style={{
                    backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/ftforest/filter.jpg)`,
                    paddingTop: '127%'
                  }}
                />
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-2 d-none d-sm-block d-md-block" />
              <div className="col-md-8 col-12">
                <h3 className="font-serif text-center medium pt-5">Detalle de Producto</h3>
                <h4 className="font-serif pt-3">
                  En esta seccion del proyecto, hay tres elementos de la navegacion que deben ser
                  faciles de identificar y comprender.
                </h4>
                <h5 className="pt-3">
                  1 - Presentacion del Producto: Todas las fotos del producto deben estar visibles
                  para insentivar el uso del slider. Ademas de una clara forma de seleccionar las
                  caracteristicas del producto seleccionado.
                  <br />
                  <br />
                  2 - Reviews: Son el factor mas importante a la hora de elegir un producto.
                  Presentado el producto, a continuacion se usa el 100% del ancho de la pagina para
                  incluir los reviews junto con un cuadro resumen facil de identificar y comprender
                  con el uso de iconos.
                  <br />
                  <br />
                  3 - Share: Compartir una posible compra debe estar presente en toda la navegacion.
                  Compartir la compra es una accion comun por los usuarios para pedir una segunda
                  opinion, la accion mas importante por ello es la de compartir mediante un link o
                  correo. Cada pagina debe tener Server Side Rendering (SSR) para cumplir el
                  cometido.
                </h5>
              </div>
              <div className="col-2 d-none d-sm-block d-md-block" />
            </div>

            <div className="row pt-5">
              <div className="col-12">
                <div
                  className="img-4x3 shadow"
                  style={{
                    backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/ftforest/Detail.jpg)`,
                    paddingTop: '185%'
                  }}
                />
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-2 d-none d-sm-block d-md-block" />
              <div className="col-md-8 col-12">
                <div
                  className="img-4x3 shadow"
                  style={{
                    backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/ftforest/reviews.jpg)`,
                    paddingTop: '130%'
                  }}
                />
              </div>
              <div className="col-2 d-none d-sm-block d-md-block" />
            </div>

            <div className="row pt-5">
              <div className="col-2 d-none d-sm-block d-md-block" />
              <div className="col-md-8 col-12">
                <h3 className="font-serif text-center medium pt-5">Checkout</h3>
                <h4 className="font-serif pt-3">
                  El checkout es la pagina de mayor bounce rate para este tipo de experiencia web,
                  por ello el proceso debe estar en sola pagina completando el ciclo de compra en
                  solo 3 pasos. Esta pagina debe brindar la informacion clave necesaria para que el
                  usuario confie en la marca en su primera compra.
                </h4>
                <h5 className="pt-3">
                  El checkout se divide en:
                  <br />
                  <br />
                  1 - Shopping Bag: Lista de productos seleccionados con la posibilidad de cambio en
                  las caracteristicas desde la misma pagina.
                  <br />
                  <br />
                  2 - Order Summary: En el resumen de la compra, el usuario debe tener toda la
                  informacion de pago necesaria que le genere la confianza sufificnte para completar
                  la compra.
                  <br />
                  <br />
                  3 - Payment Methods: Uso de la API de Stripe para guardar de forma segura los
                  medios de pago ingresados por el usuario en el pasado. Si no tiene medios de pago
                  asociados, el ingreso de un medio de pago debe ser con un popup.
                </h5>
              </div>
              <div className="col-2 d-none d-sm-block d-md-block" />
            </div>

            <div className="row pt-5">
              <div className="col-12">
                <div
                  className="img-4x3 shadow"
                  style={{
                    backgroundImage: `url(https://s3.eu-west-3.amazonaws.com/polaar/projects/ftforest/Checkout.jpg)`,
                    paddingTop: '97%'
                  }}
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default FollowTheForestPage;
