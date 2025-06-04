import { defineConfig } from 'vitepress'
import { SparqlPlugin} from 'vitepress-plugin-sparql'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Etymologies_as_Strings/',
  title: "Etymologies as strings: Demo",
  description: "A companion website for the Etymologies as strings paper.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Query examples',
        items: [
          { text: 'Lexical entry', link: 'search-entry' },
          { text: 'Etymon', link: 'search-etymon' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anasfkhan81/Etymologies_as_Strings' }
    ]
  },
  vite: {
    plugins: [
      SparqlPlugin()
    ]
  }
})
