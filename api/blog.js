import { fetchAPI } from "./api";

const POSTS_ENDPOINT = 'collections/blog_posts/entries';

/**
 * @param {number} limit An integer value to limit the posts
 */
export async function getFeaturedPosts(limit = 3) {
    const getFields = [
        'title',
        'id',
        'slug',
        'date',
        'blog_categories'
    ];

    const { data } = await fetchAPI(POSTS_ENDPOINT, {
        fields: getFields.join(','),
        sort: '-date',
        limit,
        filter: {
            featured: true
        }
    });

    return data;
};

/**
 * Use this inside of getStaticPaths()
 */
export async function getAllPostSlugs() {
    const { data } = await fetchAPI(POSTS_ENDPOINT, {
        fields: 'slug'
    });

    return data;
}

/**
 * Get a post by it's slug
 *
 * @param {string} slug The post slug
 */
export async function getPostBySlug(slug = '') {
    const { data } = await fetchAPI(POSTS_ENDPOINT, {
        limit: 1,
        filter: {
            slug
        }
    });

    return data[0];
}
