const path = require("path");

const { DateTime } = require("luxon");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItRenderer = require('markdown-it')('commonmark');

const excerpt = require('eleventy-plugin-excerpt'); //https://github.com/psalaets/eleventy-plugin-excerpt
const schema = require('@quasibit/eleventy-plugin-schema'); //https://www.maxivanov.io/add-structured-data-to-eleventy-blog/
const emojiReadTime = require('@11tyrocks/eleventy-plugin-emoji-readtime'); // https://github.com/5t3ph/eleventy-plugin-emoji-readtime

// official plugins
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation"); // https://www.11ty.dev/docs/plugins/navigation/
const { EleventyRenderPlugin } = require("@11ty/eleventy");

const Image = require("@11ty/eleventy-img"); // https://www.11ty.dev/docs/plugins/image/

// https://github.com/11ty/eleventy-img/issues/46#issuecomment-766054646
function generateImages(src, widths){
	let source = path.join(__dirname, "src/" , src);
	let options = {
		widths: widths,
		formats: ['png',],
		outputDir: "./docs/assets/images/",
		urlPath: "/assets/images/",
		useCache: true,
		sharpJpegOptions: {
			quality: 99,
			progressive: true
		}
	};
	// genrate images, ! dont wait
	Image(source, options);
	// get metadata even the image are not fully generated
	return Image.statsSync(source, options);
}
 
function imageCssBackground (src, selector, widths){
	const metadata = generateImages(src, widths);
	let markup = [`${selector} { background-image: url(${metadata.jpeg[0].url});} `];
	// i use always jpeg for backgrounds
	metadata.jpeg.slice(1).forEach((image, idx) => {
		markup.push(`@media (min-width: ${metadata.jpeg[idx].width}px) { ${selector} {background-image: url(${image.url});}}`);
	});
	return markup.join("");
}

module.exports = (eleventyConfig) => {
    // Copy the "assets" directory to the compiled "_site" folder.
    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('site.webmanifest');
    eleventyConfig.addPassthroughCopy('icon.svg');
    eleventyConfig.addPassthroughCopy('CNAME');

	eleventyConfig.addPlugin(schema);
	eleventyConfig.addPlugin(excerpt);


    // Official plugins
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginBundle);

    // watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
        files: './_css/**/*.css'
    });

	// https://www.11ty.dev/docs/collections/#getfilteredbytags(-tagname-secondtagname-%5B...%5D-)
	eleventyConfig.addCollection('news', function(collectionApi){
		return collectionApi.getFilteredByTags("posts", "news");
	});

	// cssBackground shortcode
	eleventyConfig.addShortcode("cssBackground", imageCssBackground);

	// image shortcode 
	// @see https://www.11ty.dev/docs/plugins/image/
	eleventyConfig.addShortcode("image", async function(src, alt, css, sizes) {
		let metadata = await Image(src, {
			widths: [300, 600, 720],
			// widths: [300, 600, 720, "auto"],
			formats: ["webp", "avif", "jpeg"],
			urlPath: '/assets/images/optimized/',
			outputDir: path.join(eleventyConfig.dir.output, "assets", "images", "optimized")

		});
		// https://github.com/11ty/eleventy-img/issues/97
		let imageAttributes = {
			class: css,
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		// You bet we throw an error on a missing alt (alt="" works okay)
		return Image.generateHTML(metadata, imageAttributes);
	});

    // Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

    // Filters
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "LLL yyyy");
	});

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Shortcodes
	eleventyConfig.addPlugin(emojiReadTime, {
		emoji: '📖',
	});

    // Customize Markdown library settings:
    eleventyConfig.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAttrs);

		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [1,2,3,4],
			slugify: eleventyConfig.getFilter("slugify")
		});
	});

    // https://github.com/11ty/eleventy/issues/543#issuecomment-1005914243
    eleventyConfig.addFilter('markdownify', (str) => {
		return markdownItRenderer.render(str);
    });
    
    return {
        dir: {
            input: 'src',
            output: 'docs',
            layouts: '_layouts',
            data: '_data',
            includes: '_includes',
        },
        templateFormats: [
            'md',
			'njk',
			'html',
            'liquid'
        ],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

        pathPrefix: '', // omit this line if using custom domain
    };
};