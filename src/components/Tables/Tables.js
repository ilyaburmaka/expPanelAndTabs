import React, { Fragment } from "react";
// styles
import { Grid } from "styles/Tables/style.js";
// components
import { MainNames } from "components/Tables/components/MainTitles";
import { ContentText } from "components/Tables/components/ContentsTables";
// libs
import PropTypes from "prop-types";

const TableComp = ({ TableHead, TableCell, ThemeColor }) => {
  let countContent = 0;
  TableHead.map(key => (countContent += Object.keys(key).length));
  return (
    <Fragment>
      {Number.isInteger(countContent / Object.keys(TableHead).length) ? (
        <Grid howRow={Object.keys(TableHead).length} ThemeColor={ThemeColor}>
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

TableComp.propTypes = {
  TableHead: PropTypes.array.isRequired,
  TableCell: PropTypes.array.isRequired,
  ThemeColor: PropTypes.bool.isRequired
};

export default TableComp;
