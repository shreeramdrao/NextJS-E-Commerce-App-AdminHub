import type { Page } from '../payload-types'

export const home: Partial<Page> = {
  title: 'Home',
  slug: 'home',
  _status: 'published',
  meta: {
    title: 'Payload E-Commerce Template',
    description: 'An open-source e-commerce store built with Payload and Next.js.',
    image: '{{PRODUCT1_IMAGE}}',
  },
  hero: {
    type: 'highImpact',
    richText: [
      {
        children: [
          {
            text: 'Payload E-Commerce Store',
          },
        ],
        type: 'h1',
      },
      {
        children: [
          {
            text: 'Welcome to your store! ',
          },
          {
            type: 'link',
            linkType: 'custom',
            url: '/admin',
            children: [
              {
                text: 'Visit the admin dashboard',
              },
            ],
          },
          {
            text: " to begin managing this site's content. The code for this template is completely open-source and can be found ",
          },
          {
            type: 'link',
            linkType: 'custom',
            url: 'https://github.com/payloadcms/payload/tree/master/templates/ecommerce',
            newTab: true,
            children: [
              {
                text: 'here',
              },
            ],
          },
          {
            text: '.',
          },
        ],
        type: 'large-body',
      },
    ],
    links: [
      {
        link: {
          type: 'reference',
          appearance: 'primary',
          reference: {
            relationTo: 'pages',
            value: '{{PRODUCTS_PAGE_ID}}',
          },
          label: 'Shop now',
          url: '',
        },
      },
      {
        link: {
          type: 'custom',
          appearance: 'secondary',
          reference: null,
          label: 'View on GitHub',
          url: 'https://github.com/payloadcms/payload/tree/master/templates/ecommerce',
          newTab: true,
        },
      },
    ],
    media: '{{PRODUCT1_IMAGE}}',
  },
  layout: [
    {
      blockName: 'Content Block',
      blockType: 'content',
      columns: [
        {
          size: 'full',
          richText: [
            {
              children: [
                {
                  text: 'Core features',
                },
              ],
              type: 'h2',
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
          ],
        },
        {
          size: 'oneThird',
          richText: [
            {
              children: [
                {
                  text: 'Admin Dashboard',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Manage this users, pages, products, and more from the ',
                },
                {
                  type: 'link',
                  linkType: 'custom',
                  url: '/admin',
                  children: [
                    {
                      text: 'admin dashboard',
                    },
                  ],
                },
                {
                  text: '.',
                },
              ],
            },
          ],
          enableLink: false,
          link: {
            reference: {
              value: '',
              relationTo: 'pages',
            },
            url: '',
            label: '',
          },
        },
        {
          size: 'oneThird',
          richText: [
            {
              children: [
                {
                  text: 'Authentication',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Complete user ',
                },
                {
                  type: 'link',
                  linkType: 'custom',
                  url: '/login',
                  children: [
                    {
                      text: 'login',
                    },
                  ],
                },
                {
                  text: ' and ',
                },
                {
                  type: 'link',
                  linkType: 'custom',
                  url: '/create-account',
                  children: [
                    {
                      text: 'create account',
                    },
                  ],
                },
                {
                  text: ' flows with email verification and password reset.',
                },
              ],
            },
          ],
          enableLink: false,
          link: {
            reference: {
              value: '',
              relationTo: 'pages',
            },
            url: '',
            label: '',
          },
        },
        {
          size: 'oneThird',
          richText: [
            {
              children: [
                {
                  text: 'Customer Accounts',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Customers can ',
                },
                {
                  type: 'link',
                  linkType: 'custom',
                  url: '/account',
                  children: [
                    {
                      text: 'manage their account',
                    },
                  ],
                },
                {
                  text: ', ',
                },
                {
                  type: 'link',
                  linkType: 'custom',
                  url: '/orders',
                  children: [
                    {
                      text: 'view their order history',
                    },
                  ],
                },
                {
                  text: ', and more without leaving the site.',
                },
              ],
            },
          ],
          enableLink: false,
          link: {
            reference: {
              value: '',
              relationTo: 'pages',
            },
            url: '',
            label: '',
          },
        },

        {
          size: 'oneThird',
          richText: [
            {
              children: [
                {
                  text: 'Gated Content',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Easily gate digital content behind a paywall or require users to be logged in to access it.',
                },
              ],
            },
          ],
          enableLink: false,
          link: {
            reference: {
              value: '',
              relationTo: 'pages',
            },
            url: '',
            label: '',
          },
        },
        {
          size: 'oneThird',
          richText: [
            {
              children: [
                {
                  text: 'Shopping cart',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Shopping carts persist between sessions, can saved for later and accessed from any device.',
                },
              ],
            },
          ],
          enableLink: false,
          link: {
            reference: {
              value: '',
              relationTo: 'pages',
            },
            url: '',
            label: '',
          },
        },
        {
          size: 'oneThird',
          richText: [
            {
              children: [
                {
                  text: 'Checkout',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Secure in-app checkout powered by Stripe so your customers never have to leave your site.',
                },
              ],
            },
          ],
          enableLink: false,
          link: {
            reference: {
              value: '',
              relationTo: 'pages',
            },
            url: '',
            label: '',
          },
        },
        {
          size: 'oneThird',
          richText: [
            {
              children: [
                {
                  text: 'Page builder',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Custom page builder allows you to create unique page and product layouts for any type of content.',
                },
              ],
            },
          ],
          enableLink: false,
          link: {
            reference: {
              value: '',
              relationTo: 'pages',
            },
            url: '',
            label: '',
          },
        },
        {
          size: 'oneThird',
          richText: [
            {
              children: [
                {
                  text: 'SEO',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Editors have complete control over SEO data and site content directly from the ',
                },
                {
                  type: 'link',
                  linkType: 'custom',
                  url: '/admin',
                  children: [
                    {
                      text: 'admin dashboard',
                    },
                  ],
                },
                {
                  text: '.',
                },
              ],
            },
          ],
          enableLink: false,
          link: {
            reference: {
              value: '',
              relationTo: 'pages',
            },
            url: '',
            label: '',
          },
        },
        {
          size: 'oneThird',
          richText: [
            {
              children: [
                {
                  text: 'Dark mode',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Users will experience this site in their preferred color scheme and each block can be inverted.',
                },
              ],
            },
          ],
          enableLink: false,
          link: {
            reference: {
              value: '',
              relationTo: 'pages',
            },
            url: '',
            label: '',
          },
        },
      ],
    },
    {
      blockType: 'mediaBlock',
      blockName: 'Media Block',
      position: 'default',
      media: '{{PRODUCT2_IMAGE}}',
    },
    {
      blockType: 'cta',
      blockName: 'CTA',
      richText: [
        {
          children: [
            {
              text: 'Shop now',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'This is a custom layout building block ',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/admin',
              children: [
                {
                  text: 'configured in the admin dashboard',
                },
              ],
            },
            {
              text: '.',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'reference',
            url: '',
            label: 'Shop now',
            appearance: 'primary',
            reference: {
              value: '{{PRODUCTS_PAGE_ID}}',
              relationTo: 'pages',
            },
          },
        },
      ],
    },
  ],
}
