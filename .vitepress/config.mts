import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Verhuurportaal docs",
  description: "De bijhorende documentatie van het verhuur portaal voor Scouts en Gidsen Sint-Joris Turnhout",
  cleanUrls: false,
  base: '/verhuur-portaal-documentatie',
  srcDir: 'src',
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  themeConfig: {
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
