import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
const FeatureList = [
  {
    title: "HTML",
    url: "docs/HTML",
    Svg: require("@site/static/img/logo_html.svg").default,
    description: (
      <>
        Es el pilar del sitio web <br />
     Es el lenguaje de marcado que define la estructura y el contenido de una página web. Permite crear elementos como títulos, párrafos, imágenes, enlaces, tablas, listas y formularios.


      </>
    ),
  },
  {
    title: "CSS",
    url: "docs/CSS",
    Svg: require("@site/static/img/logo_css.svg").default,
    description: (
      <>
        Es el lenguaje que se utiliza para dar estilo a una página web. Permite definir colores, fuentes, tamaños, márgenes, posiciones, animaciones y cómo se verán los elementos HTML.


      </>
    ),
  },
  {
    title: "Javascript",
    url: "/javascript",
    Svg: require("@site/static/img/logo_js.svg").default,
    description: (
      <>
     Es el lenguaje de programación que hace que una página web sea interactiva (que pueda interactuar con el usuario). Permite ejecutar código en respuesta a las acciones del usuario, cambiar el contenido de la página, validar formularios, crear animaciones y comunicarse con servidores.
      </>
    ),
  },
  {
    title: "SQL",
    url: "docs/SQL",
    Svg: require("@site/static/img/logo_sql.svg").default,
    description: (
      <>
        SQL o Structured Query Language, es un lenguaje diseñado para permitir
        que los usuarios técnicos y no técnicos consulten, manipulen y
        transformen datos de una base de datos relacional.
      </>
    ),
  },
  {
    title: "C#",
    url: "docs/CSharp",
    Svg: require("@site/static/img/c--4.svg").default,
    description: (
      <>
        "C#" es un lenguaje de programación multiparadigma desarrollado y
        estandarizado por la empresa Microsoft como parte de su plataforma .NET
      </>
    ),
  },
  {
    title: "Git ",
    url: "docs/Git",
    Svg: require("@site/static/img/logo_git.svg").default,
    description: (
      <>
        Es un software de control de versiones, su propósito es llevar un
        registro de los cambios en archivos de computadora y coordinar el
        trabajo que varias personas realizan sobre archivos compartidos.
      </>
    ),
  },
  {
    title: "Docker ",
    url: "docs/Docker",
    Svg: require("@site/static/img/docker.svg").default,
    description: (
      <>
 Docker es una plataforma de software que le permite crear, probar e implementar aplicaciones rápidamente. 
      </>
    ),
  },
  {
    title: "Herramientas",
    url: "docs/Herramientas",
    Svg: require("@site/static/img/logo_herramienta.svg").default,
    description: (
      <>
        En este apartado encontrarán muchos enlaces que te lleven a herramientas
        para mejorar en la programación, diseño y varios aspectos más.
      </>
    ),
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          {" "}
          <Link to={url}>{title}</Link>
        </h3>
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
