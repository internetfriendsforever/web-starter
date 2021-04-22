import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content desk')
    .showIcons(false)
    .items(
      S.documentTypeListItems()
    )
