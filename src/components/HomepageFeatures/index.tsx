import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  link: string;
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
};

const FeatureList: FeatureItem[] = [
  {
    link: '/docs/category/artificial-intelligence',
    title: 'Artificial Intelligence',
    Svg: require('@site/static/img/tensorflow-icon.svg').default
  },
  {
    link: '/docs/category/programming-languages',
    title: 'Languages',
    Svg: require('@site/static/img/python-icon.svg').default
  },
  {
    link: '/docs/category/mathematics',
    title: 'Mathematics',
    Svg: require('@site/static/img/mathematics-icon.svg').default
  },
];

function Feature({link, title, Svg}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
