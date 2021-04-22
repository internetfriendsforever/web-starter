import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content desk')
    .showIcons(false)
    .items([
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'site'
          ].includes(
            listItem.getId()
          )
      ),

      S.divider(),

      S.listItem()
        .title('Site settings')
        .child(
          S.editor()
            .schemaType('site')
            .documentId('default-site')
        )
    ])
