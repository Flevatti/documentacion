import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'HTML',
    Svg: require('@site/static/img/logo_html.svg').default,
    description: (
      <>
       Es el pilar del sitio web <br/>
       Es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página.
      </>
    ),
  },
  {
    title: 'CSS',
    Svg: require('@site/static/img/logo_css.svg').default,
    description: (
      <>
        Se utiliza para el diseño del sitio web <br/>
        Es un lenguaje de reglas de estilo que usamos para aplicar estilo a nuestro contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y distribuir nuestro contenido en múltiples columnas.
      </>
    ),
  },
  {
    title: 'Javascript',
    url:'/javascript',
    Svg: require('@site/static/img/logo_js.svg').default,
    description: (
      <>
        Añade dinamica al sitio web.<br/>
        Es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript).

      </>
    ),
  },  {
    title: 'SQL',
    Svg: require('@site/static/img/logo_sql.svg').default,
    description: (
      <>
     SQL o Structured Query Language, es un lenguaje diseñado para permitir que los usuarios técnicos y no técnicos consulten, manipulen y transformen datos de una base de datos relacional. 
      </>
    ),
  },  {
    title: 'Java',
    Svg: require('@site/static/img/logo_java.svg').default,
    description: (
      <>
     Java es un lenguaje de programación y una plataforma informática comercializada por primera vez en 1995 por Sun Microsystems
      </>
    ),
  }, {
    title: 'Git ',
    Svg: require('@site/static/img/logo_git.svg').default,
    description: (
      <>
    Es un software de control de versiones, su propósito es llevar un registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos.
      </>
    ),
  },
];

function Feature({Svg, title, description , url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"  />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={url}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
