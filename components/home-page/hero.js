import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.images}>
				<Image
					src="/images/site/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
					alt="An Image Showing Brenton"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi I'm Brenton</h1>
			<p>I blog about Web Development.</p>
		</section>
	)
}

export default Hero;
