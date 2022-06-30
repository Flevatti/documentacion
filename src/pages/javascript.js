import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from '../components/HomepageFeatures/styles.module.css';
import stylesPage from './index.module.css';
import Link from '@docusaurus/Link';
const FeatureList = [
    {
        title: 'Vanilla',
        url:'/docs/Javascript',
        Svg: require('@site/static/img/logo_js.svg').default,
        description: (
            <>
               Hablar de Vanilla JavaScript (o Vanilla JS) es hablar de JavaScript sin ningún tipo de framework o librería adicional, es decir, JavaScript puro. 
            </>
        ),
    },
    {
        title: 'React',
        url:'/docs/React',
        Svg: require('@site/static/img/logo_react.svg').default,
        description: (
            <>
              React es una biblioteca(library) Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página
            </>
        ),
    },
    {
        title: 'Node',
        url:'/docs/Node',
        Svg: require('@site/static/img/logo_node.svg').default,
        description: (
            <>
               Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript
            </>
        ),
    }, 
    {
        title: 'Vuepress',
        url:'/docs/Vuepress',
        Svg: require('@site/static/img/logo_vuepress.svg').default,
        description: (
            <>
              VuePress es un generador de sitios estáticos desarrollado por Evan You, el creador de Vue. js, originalmente pensado para escribir la documentación de los propios proyectos de Vue. 
            </>
        ),
    },    {
        title: 'Vue',
        url:'/docs/vue',
        Svg: require('@site/static/img/logo_vue.svg').default,
        description: (
            <>
            Vue.js es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página
            </>
        ),
    },

];
function HomepageHeader() {

    return (
        <header className={clsx('hero hero--primary', stylesPage.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Javascript</h1>
                <p className="hero__subtitle">Opciones a Elegir:</p>
            </div>
        </header>
    );
}

function Feature({ Svg, title, description , url }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
            <h3> <Link to={url}>{title}</Link></h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
function HomepageFeatures() {
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
export default function Javascript() {
    return (
        <Layout
            title={``}
            description="Documentacion de Federico Levatti">

            <HomepageHeader />

            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}