import { fetchAPI } from "./api";

const POSTS_ENDPOINT = 'collections/pages/entries';

/**
 * @param {string} slug The slug of the page to request
 * @param {array} fields Pick the fields to be returned
 * @param {boolean} home Set to true to get the homepage
 */
export async function getPageFromSlug(slug, fields, home = false) {
    const filter = home ? { 'id:is': 'home' } : { 'slug:is': slug };

    const { data } = await fetchAPI(POSTS_ENDPOINT, {
        fields: fields.join(','),
        limit: 1,
        filter
    });

    return data[0];
};
