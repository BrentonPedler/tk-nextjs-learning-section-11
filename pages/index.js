import { Fragment } from "react";
import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Brenton's Blog</title>
				<meta
					name='description'
					content='I post about Web Development'
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	)
}

export function getStaticProps() {
	const FeaturedPosts = getFeaturedPosts();

	return {
		props: {
			posts: FeaturedPosts
		}
	}
}

export default HomePage;
