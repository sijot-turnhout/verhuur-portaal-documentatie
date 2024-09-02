import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Verhuurportaal docs",
  description: "De bijhorende documentatie van het verhuur portaal voor Scouts en Gidsen Sint-Joris Turnhout",
  cleanUrls: false,
  base: '/verhuur-portaal-documentatie',
  srcDir: 'src',
  lastUpdated: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/sijot-turnhout/verhuur-portaal-documentatie/edit/main/src/:path'
    },
    footer: {
      message: 'Vrijgegeven onder de MIT licentie',
      copyright: 'Copyright © 2019-present Scouts en Gidsen Sint-Joris Turnhout',
    },
    nav: [
      {
        text: 'versie: v1.x',
        items: [
          { text: 'v1.x', link: 'v1.x' },
        ]
      }
    ],
    sidebar: [
      { text: 'Project informatie', link: '/' },
      { text: 'Installatie', link: 'getting-started/installation' },
      { text: 'CLI', link: '/cli' },

      {
        text: 'Gebruikersbeheer',
        collapsed: false,
        items: [
          { text: 'Mijn profiel', link: '/users/profile' },
          { text: 'Gebruikersgroepen', link: '/users/user-groups' },
          { text: 'Gebruikersbeheer', link: '/users' },
          { text: 'Permissies', link: '/users/permissions', },
        ],
      },

      {
        text: 'Verhuurbeheer',
        collapsed: false,
        items: [
          { text: 'Verhuringen', link: '/leases/overview' },
          { text: 'Huurders', link: '/leases/huurders' },
          { text: 'Notities', 'link': '/leases/notes' },
          { text: 'Nutsverbruik', link: '/leases/utility-usage' },
          { text: 'Facturatie', link: '/leases/billing' },
          { text: 'Offertes', link: '/leases/quotations' },
        ],
      },

      {
        text: 'Lokalenbeheer',
        collapsed: false,
        items: [
          { text: 'Lokalen', link: '/facilities' },
          { text: 'Werkpunten', link: 'facilities/issues' },

        ]
      },

      {
        text: 'Integraties',
        collapsed: false,
        items: [
          { text: 'Sentry', link: '/integrations/sentry' }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sijot-turnhout/verhuursportaal' }
    ],

    markdown: {
      config: (md) => {
        md.use(footnote)
      }
    }
  }
})
