// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const foot = require('./static/footer_col_3');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'UGIX Documentation',
	tagline: 'Learn about exploring, building , deploying your apps with UGIX',
	url: 'https://docs.ugix.org.in/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/ugix-logo.png',
	organizationName: 'UGIX', // Usually your GitHub org/user name.
	projectName: 'UGIX', // Usually your repo name.

	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo docs
					editUrl:
						'https://github.com/datakaveri/ugix-developer-docs/blob/main/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo blog
					editUrl:
						'https://github.com/datakaveri/ugix-developer-docs/blog/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	],
	themes: ['docusaurus-theme-search-typesense'],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */

		({
			hideOnScroll: true,
			navbar: {
				title: '',
				logo: {
					alt: 'My Site Logo',
					src: 'img/ugix-logo.png'
				},
				items: [
					{
						type: 'dropdown',
						label: 'Who Are You',
						position: 'left',
						items: [
							{
								label: 'New User',
								href: '/docs/registration'
							},
							{
								label: 'Consumer',
								href: '/docs/Consumer/consumer'
							},
							{
								label: 'Provider',
								href: '/docs/Provider/provider'
							}
						]
					},
					// {
					//   type: 'doc',
					//   docId: 'intro',
					//   position: 'left',
					//   label: 'Getting Started',
					// },
					{
						href: 'https://github.com/datakaveri/ugix-developer-docs',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			typesense: {
				typesenseCollectionName: 'iudx', // Replace with your own doc site's name. Should match the collection name in the scraper settings.

				typesenseServerConfig: {
					nodes: [
						{
							host: 'typsense-test.iudx.io',
							port: 443,
							protocol: 'https'
						}
						// {
						//   host: 'xxx-2.a1.typesense.net',
						//   port: 443,
						//   protocol: 'https',
						// },
						// {
						//   host: 'xxx-3.a1.typesense.net',
						//   port: 443,
						//   protocol: 'https',
						// },
					],
					apiKey: 'xyz',
					connectionTimeoutSeconds: 120
				},

				// Optional: Typesense search parameters: https://typesense.org/docs/0.21.0/api/documents.html#arguments
				typesenseSearchParameters: {}

				// Optional
				// contextualSearch: true,
			},
			footer: {
				style: 'light',
				links: [
					{
						items: [
							{
								html: `
                      <div class="col-12 col-lg-4 footer-col-1 mt-4">
				<div class="places">
					<h4>Unified Geospatial Interface Exchange</h4>

					<div class="row mt-lg-4 foot-column-1">
						<div class="col-2">
							<img src="img/location.svg" alt="" class='foot-icon' />
						</div>
						<div class="col-10">
							<span
								>Ground Floor, Indian Institute of Science,
								Entrepreneurship Centre Road Entrepreneurship
								Centre, Bengaluru, Karnataka 560012</span
							>
						</div>
					</div>
					<div class="row mt-lg-4 foot-column-1">
						<div class="col-2">
							<img src="img/website.svg" alt="" class='foot-web-icon' />
						</div>
						<div class="col-10">
							<span>www.ugix.org.in</span>
						</div>
					</div>
					<div class="row mt-lg-4 foot-column-1">
						<div class="col-2">
							<img src="img/email.svg" alt="" class='foot-web-icon' />
						</div>
						<div class="col-10">
							<span>info@iudx.org.in</span>
						</div>
					</div>
				</div>
			</div>`
							}
						]
					},
					{
						title: 'Important Links',
						items: [
							{
								label: 'Datasets Catalogue',
								to: 'https://catalogue.ugix.org.in/'
							},
							{
								label: 'Provider Dashboard',
								to: 'https://catalogue.ugix.org.in/provider'
							},
							{
								label: 'Consumer Dashboard',
								to: 'https://catalogue.ugix.org.in/consumer'
							},
							{
								label: 'Canvas Playground',
								to: 'https://canvas.ugix.org.in/'
							},
							{
								label: 'Community Forum',
								to: 'https://forum.ugix.org.in/'
							}
						]
					},
					{
						title: 'For Developers',
						items: [
							{
								label: 'Documentation',
								to: 'https://docs.ugix.org.in/'
							},
							{
								label: 'Catalogue Server API Docs',
								to: 'https://dx.ugix.org.in/cat/apis'
							},
							{
								label: 'Resource Server API Docs',
								to: 'https://geoserver.dx.ugix.org.in/api'
							},
							{
								label: 'Authorization Server API Docs',
								to: 'https://dx.ugix.org.in/auth/apis'
							}
						]
					},
					{
						items: [
							{
								html: `
                ${foot}
                `
							}
						]
					}
				],
				copyright: `© ${new Date().getFullYear()} UGIX.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
			//   plugins: [
			//     [
			//         '@docusaurus/plugin-sitemap',
			//         {
			//             cacheTime: 600 * 1000, // 600 sec - cache purge period
			//             changefreq: 'weekly',
			//             priority: 0.5,
			//         },
			//     ],
			// ],
		})
};

module.exports = config;
