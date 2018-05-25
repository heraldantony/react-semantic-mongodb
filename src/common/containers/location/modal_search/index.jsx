// @flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
import type { FormProps } from "redux-form";
import PropTypes from "prop-types";
import {
  Grid,
  Header,
  Form,
  Button,
  Icon,
  Label,
  Menu,
  Table,
  Message
} from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import InputField from "components/elements/InputField";
import { searchLocation } from "common/actions/location";
import { createStructuredSelector } from "reselect";
import { makeSelectSearchLocation } from "common/selectors/location";
import ModalSearch from "components/search/ModalSearch";
import { PAGE_SIZE, PAGE_RANGE_DISPLAYED } from "common/constants";
import injectSaga from "common/utils/injectSaga";
import { searchLocation as searchLocationSaga } from "../search/saga";

const tableFields = [
  { headerName: "Street Address", fieldName: "streetAddress" },

  { headerName: "Postal Code", fieldName: "postalCode" },

  { headerName: "City", fieldName: "city" },

  { headerName: "State Province", fieldName: "stateProvince" }
];

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      pageSize: PAGE_SIZE,
      totalItemsCount: 0,
      searchString: ""
    };
  }
  render() {
    const searchFields = [
      {
        name: "non_field_errors",
        component({ meta: { error } }) {
          return error ? (
            <Message error>
              <Message.Header />
              <p>{error}</p>
            </Message>
          ) : null;
        }
      },
      {
        placeholder: "Search",
        name: "search",
        label: "Search",
        component: InputField
      }
    ];

    const fixedProps = {
      tableFields: tableFields,
      searchFields: searchFields,
      itemName: "location",
      itemsName: "locations",
      itemNameCaps: "Location"
    };
    var handlePageChange = this.props.handlePageChange.bind(this);
    var searchFn = this.props.searchSubmit.bind(this);
    const props = {
      ...fixedProps,
      buttonIconName: "object group",
      title: "Set Location Parent",
      ...this.props,
      handlePageChange,
      search: searchFn
    };
    return <ModalSearch {...props} />;
  }
}
Search.propTypes = {
  setParent: PropTypes.func,
  searchSubmit: PropTypes.func,
  handlePageChange: PropTypes.func
};

const mapStateToProps = state =>
  createStructuredSelector({
    searchProps: makeSelectSearchLocation()
  });

const mapDispatchToProps = dispatch => ({
  searchSubmit(data) {
    // if(data.action == "search") {}
    console.log(data);
    return new Promise((resolve, reject) => {
      this.setState({ searchString: data.search });
      return dispatch(
        searchLocation(data, "LOCATION_SEARCH_FORM", { resolve, reject })
      );
    });
  },
  setParent(parent) {
    console.log("parent=", parent);
  },
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    return new Promise((resolve, reject) => {
      this.setState({ activePage: pageNumber });
      return dispatch(
        searchLocation(
          {
            search: this.state.search,
            pageNumber: pageNumber,
            pageSize: this.state.pageSize
          },
          "LOCATION_SEARCH_FORM",
          { resolve, reject }
        )
      );
    });
  }
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({
  key: "searchLocation",
  saga: searchLocationSaga
});

export default reduxForm({ form: "LOCATION_SEARCH_FORM" })(
  compose(withConnect, withSaga)(Search)
);
