import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content desk')
    .showIcons(false)
    .items([
      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(
          S.documentTypeList('page').title('Pages')
        ),

      S.listItem()
        .title('Articles')
        .schemaType('article')
        .child(
          S.documentTypeList('article').title('Articles')
        ),

      S.divider(),

      S.listItem()
        .title('Navigation')
        .child(
          S.editor()
            .schemaType('navigation')
            .documentId('main-navigation')
        ),

      S.listItem()
        .title('Site settings')
        .id('site-settings')
        .child(
          S.editor()
            .schemaType('site')
            .documentId('default-site')
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'site',
            'page',
            'article',
            'navigation'
          ].includes(
            listItem.getId()
          )
      )
    ])
