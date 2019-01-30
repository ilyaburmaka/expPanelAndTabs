import React, { Fragment } from "react";
// styles
import { Grid } from "styles/Tables/style.js";
// components
import { MainNames } from "components/Tables/components/MainTitles";
import { ContentText } from "components/Tables/components/ContentsTables";

const TableComp = ({ TableHead, TableCell,color }) => {
  let countContent = 0;
  TableHead.map(key => (countContent += Object.keys(key).length));
  return (
    <Fragment>
      {Number.isInteger(countContent / Object.keys(TableHead).length) ? (
        <Grid howRow={Object.keys(TableHead).length} color={color}>
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

export default TableComp;
