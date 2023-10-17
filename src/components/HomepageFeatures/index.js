import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Welcome',
    Svg: require('@site/static/img/React-icon.svg').default,
    description: (
      <>
        Welcome to Front End Programming course. This course is based on React front end library.
      </>
    ),
  },
  {
    title: 'Schedule & Assignments',
    Svg: require('@site/static/img/assignments.svg').default,
    description: (
      <>
        This site contains the course material. The course schedule and assignments can be found from the course Moodle site.
      </>
    ),
  },
  {
    title: 'Course Project',
    Svg: require('@site/static/img/project.svg').default,
    description: (
      <>
        The part of this course is the final project where you implement the front end to the existing backend. 
        In this project, you will utilize all skills that you will learn in this course.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
