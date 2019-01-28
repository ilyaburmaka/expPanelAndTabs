import React, { Fragment } from "react";
// styles
import { Grid } from "styles/Tables/style.js";
// components only for Tables
import { MainNames } from "components/Tables/components/MainTitles";
import { ContentText } from "components/Tables/components/ContentsTables";

const TableComp = ({ TableHead, TableCell }) => {
  let countContent = 0;
  TableHead.map(key => (countContent += Object.keys(key).length));
  return (
    <Fragment>
      {Number.isInteger(countContent / Object.keys(TableHead).length) ? (
        <Grid howRow={Object.keys(TableHead).length}>
          {TableHead.map((item, index) => (
            <MainNames key={index} names={item.title} />
          ))}
          {TableCell.map((item, index) => (
            <ContentText key={index} content={item} />
          ))}
        </Grid>
      ) : (
        alert("Таблица повреждена, проверьте правильность данных")
      )}
    </Fragment>
  );
};

export { TableComp };
