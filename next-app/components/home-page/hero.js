import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/onthaT1.jpg'
          alt='Onthatile'
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <h1>Hello, My name Onthatile Totwe</h1>
      <p>
        I am going to blog about Javascript- especially frontend frameworks like
        React and NextJS. We will also going to touch on Database that a cloud base like Snowflake and MongoDd.
      </p>
    </section>
  );
}

export default Hero;
