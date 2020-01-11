export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
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
                  buildHookId: '5e19fd17cf04866791b50aca',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-9at6fc5g',
                  apiId: '12d8f5fa-e3ae-4856-a053-11972c530faf'
                },
                {
                  buildHookId: '5e19fd176a337c6a99ae811c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-dd24ossh',
                  apiId: '0c59ed4a-3589-40e0-9922-bb4bfbf6d456'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tddpt/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-dd24ossh.netlify.com', category: 'apps'}
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
