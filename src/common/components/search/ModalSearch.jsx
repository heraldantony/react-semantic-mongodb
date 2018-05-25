// @flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { Link } from "react-router-dom";
import type { FormProps } from "redux-form";
import {
  Grid,
  Header,
  Form,
  Button,
  Icon,
  Label,
  Menu,
  Table
} from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import InputField from "components/elements/InputField";
import withModal from "./withModal";
import PropTypes from "prop-types";
import Pagination from "components/Pagination/Pagination";
import { PAGE_SIZE, PAGE_RANGE_DISPLAYED } from "common/constants";

class ModalSearch extends Component {
  render() {
    const {
      tableFields,
      searchFields,
      title,
      itemName,
      itemsName,
      itemNameCaps,
      handleSubmit,
      searchProps,
      buttonLabel,
      buttonIconName,
      buttonAction,
      activePage,
      pageSize,
      totalItemsCount,
      handlePageChange
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Grid columns={1}>
          <Grid.Row centered>
            <Grid.Column width={16}>
              <Form>
                {searchFields.map((a, i) => <Field key={i} {...a} />)}

                <div style={{ textAlign: "right" }}>
                  <Button
                    content="Search"
                    icon="search"
                    onClick={handleSubmit(values =>
                      this.props.search({
                        ...values,
                        action: "search"
                      })
                    )}
                  />
                </div>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {searchProps && searchProps[itemsName].length ? (
          <Table celled>
            <Table.Header>
              <Table.Row>
                {tableFields.map((tf, i) => (
                  <Table.HeaderCell key={"header" + i}>
                    {tf.headerName}
                  </Table.HeaderCell>
                ))}

                <Table.HeaderCell>&nbsp;</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {searchProps[itemsName].map((item, idx) => {
                return (
                  <Table.Row key={"category_" + idx}>
                    {tableFields.map((tf, i) => {
                      return (
                        <Table.Cell key={"cell_" + i}>
                          {item[tf.fieldName]}
                        </Table.Cell>
                      );
                    })}

                    <Table.Cell>
                      <Button icon onClick={event => buttonAction(item, event)}>
                        <Icon name={buttonIconName} />
                        {buttonLabel}
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Pagination
                    activePage={activePage}
                    itemsCountPerPage={pageSize}
                    totalItemsCount={totalItemsCount || 0}
                    pageRangeDisplayed={PAGE_RANGE_DISPLAYED}
                    onChange={handlePageChange}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        ) : (
          ""
        )}
      </div>
    );
  }
}
ModalSearch.propTypes = {
  tableFields: PropTypes.array,
  searchFields: PropTypes.array,
  title: PropTypes.string,
  itemName: PropTypes.string,
  itemsName: PropTypes.string,
  itemNameCaps: PropTypes.string,
  handleSubmit: PropTypes.func,
  searchProps: PropTypes.object,
  search: PropTypes.func,
  buttonIconName: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonAction: PropTypes.func,
  activePage: PropTypes.number,
  pageSize: PropTypes.number,
  totalItemsCount: PropTypes.number,
  handlePageChange: PropTypes.func
};

export default withModal(ModalSearch);
