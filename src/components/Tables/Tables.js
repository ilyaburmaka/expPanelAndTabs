import React, { Fragment } from 'react'
// styles
import { Grid } from 'styles/Tables/style.js'
// const
import { mainContent, contentTable } from 'constants/Tables/Tables'
// components only for Tables
import { MainNames } from 'components/Tables/components/MainTitles'
import { ContentText } from 'components/Tables/components/ContentsTables'

const TableComp = () => {
  let b = 0
  contentTable.map(key => (b += Object.keys(key).length))
  return (
    <Fragment>
      {Number.isInteger(b / Object.keys(mainContent).length) ? (
        <Grid howRow={Object.keys(mainContent).length}>
          {mainContent.map((item, index) => (
            <MainNames key={index} names={item.title} />
          ))}

          {contentTable.map((item, index) => (
            <ContentText key={index} content={item} />
          ))}
        </Grid>
      ) : (
        alert('Таблица повреждена, проверьте правильность данных')
      )}
    </Fragment>
  )
}

export { TableComp }
