import Head from 'next/head'
import FeaturedBlogPreviews from '@/components/blog/FeaturedBlogPreviews'
import HomeSplash from '@/components/pages/home/HomeSplash'
import FeaturedPortfolioPreviews from '@/components/portfolio/FeaturedPortfolioPreviews'
import { getFeaturedPosts } from '@/api/blog';
import { getPageFromSlug } from '../api/pages';

const Home = props => {
    const {
        page: {
            title,
            title_override,
            intro_text,
            blog_title,
        },
        featuredPosts
    } = props;

    return (
        <>
            <Head>
                <title key="title">Andrew Haine | Norfolk-based creative web developer and designer</title>
            </Head>
            <HomeSplash title={title_override || title} content={intro_text} />
            <FeaturedBlogPreviews title={blog_title} previews={featuredPosts} />
            <FeaturedPortfolioPreviews />
        </>
    )
}

export async function getStaticProps() {

    const page = await getPageFromSlug(null, [
        'title',
        'title_override',
        'intro_text',
        'blog_title'
    ], true);
    const posts = await getFeaturedPosts(3);


    return {
        props: {
            page,
            featuredPosts: posts || [],
        }
    }
}

export default Home;
