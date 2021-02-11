import Head from 'next/head'

import { getAllPostSlugs, getPostBySlug } from "../../api/blog";
import ContentContainer from '../../components/pages/content/ContentContainer';

import Heading from '@/components/pages/Heading';
import Bard from '@/components/pages/content/Bard/Bard';
import BlogStandfirst from '@/components/blog/BlogStandfirst';

const Post = props => {
    const {
        post: {
            title,
            slug,
            date,
            blog_categories,
            intro_text,
            content_bard,
            hero_image
        }
    } = props;

    const crumbs = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: '/blog',
            label: "Blog"
        },
        {
            href: `/blog/${slug}`,
            label: title
        }
    ];

    return (
        <>
            <Head>
                <title key="title">{ title } | Andrew Haine</title>
            </Head>
            <Heading title={title} breadcrumbs={crumbs} />
            <ContentContainer>
                <BlogStandfirst date={date} tags={blog_categories} standfirst={intro_text} image={hero_image} />
                <Bard content={content_bard} />
            </ContentContainer>
        </>
    )
};

export async function getStaticProps({ params }) {
    const data = await getPostBySlug(params.slug);

    return {
        props: {
            post: data
        }
    }
}

export async function getStaticPaths() {
    const allSlugs = await getAllPostSlugs();

    return {
        paths: allSlugs.map(({ slug }) => `/blog/${slug}`) || [],
        fallback: false
    }
}

export default Post;
