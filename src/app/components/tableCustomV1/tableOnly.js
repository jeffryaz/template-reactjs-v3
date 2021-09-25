import React from "react";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import "./styles.scss";

const TableOnly = (props) => {
  const {
    intl,
    dataHeader = [],
    loading = false,
    err = false,
    children,
    hecto = 1,
    handleFilter,
    dataSecond = [],
  } = props;
  const [dataFilter] = React.useState(
    dataHeader.filter((item) => item.filter === true)
  );

  const handleFilters = (e) => {
    var data = [];
    for (let i = 0; i < dataSecond.length; i++) {
      for (let j = 0; j < dataFilter.length; j++) {
        var item = dataSecond[i][dataFilter[j].name].toString().toLowerCase();
        if (item.includes(e.target.value.toLowerCase())) {
          data.push(dataSecond[i]);
          break;
        }
      }
    }
    if (typeof handleFilter === "function") handleFilter(data);
  };

  return (
    <React.Fragment>
      <div>
        <div className="row">
          <div className="col-4">
            <div className="form-group row">
              <label htmlFor="LABEL.SEARCH" className="col-sm-3 col-form-label">
                <FormattedMessage id="LABEL.SEARCH" />:
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="LABEL.SEARCH"
                  placeholder={intl.formatMessage({
                    id: "LABEL.SEARCH",
                  })}
                  onChange={handleFilters}
                />
              </div>
            </div>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table className={"hecto-" + hecto}>
            <TableHead>
              <TableRow>
                {dataHeader.map((item, index) => {
                  return (
                    <TableCell
                      className="bg-primary text-uppercase"
                      key={index.toString()}
                    >
                      <span>
                        <FormattedMessage id={item.title} />
                      </span>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>{children}</TableBody>
          </Table>

          <div className="table-loading-data">
            <div className="text-center font-weight-bold py-5">
              <div className="table-loading-data-potition">
                {loading && (
                  <span>
                    <i className="fas fa-spinner fa-pulse text-dark mr-1"></i>
                    <FormattedMessage id="LABEL.TABLE.WAITING_DATA" />
                  </span>
                )}
                {err && (
                  <span className="text-danger">
                    <i className="far fa-frown text-danger mr-1"></i>
                    <FormattedMessage id="LABEL.ERROR_REQUEST" />
                  </span>
                )}
              </div>
            </div>
          </div>
        </TableContainer>
      </div>
    </React.Fragment>
  );
};

export default injectIntl(connect(null, null)(TableOnly));
