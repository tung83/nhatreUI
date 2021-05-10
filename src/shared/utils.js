const hash = require('shorthash');
const slugify = require('slugify');

const renderPlaceholder = text =>
    text && text.replace(/%YEAR%/g, new Date().getFullYear().toString());

const ellipsis = (text, length) => {
    if (!text || text.length < length) {
        return text;
    }
    return `${text.slice(0, length || 20)}...`;
};

/**
 * Generate unique URL for case sensitive tag
 * @param {tag} tag
 */
const tagUrl = tag => `${hash.unique(tag)}/${slugify(tag, { lower: true })}`;

module.exports = { renderPlaceholder, ellipsis, tagUrl };
