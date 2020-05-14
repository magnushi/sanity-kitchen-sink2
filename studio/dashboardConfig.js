export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebd85c0aa0e3167fe57aec1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink2-studio-8orec3nd',
                  apiId: '7049a7be-893c-4756-8aa0-91a08b251a2b'
                },
                {
                  buildHookId: '5ebd85c08bc2c60203074161',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink2-web-w4t247qn',
                  apiId: '1bce8d2d-a279-4db8-841e-ce842a8944a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-kitchen-sink2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink2-web-w4t247qn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
