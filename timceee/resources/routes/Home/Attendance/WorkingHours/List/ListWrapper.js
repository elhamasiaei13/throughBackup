import React from 'react';
import MaterialIcon from 'components/common/MaterialIcon';
import PropTypes from 'prop-types';
import List from './List';
import { connect } from 'react-redux';
import { index, setSearchValue } from './../Module';

@connect((state) => ({
  workingHours: state.Attendance.WorkingHours.workingHours,
  pagination: state.Attendance.WorkingHours.workingHoursPagination,
  searchValue: state.Attendance.Calendar.workingHoursSearchValue,
}), {
  index,
  setSearchValue,
})
@autobind
/**
 *
 */
export default class ListWrapper extends React.PureComponent {
  static propTypes = {
    workingHours: PropTypes.arrayOf(PropTypes.object),
    pagination: PropTypes.object,
    searchValue: PropTypes.string,
    index: PropTypes.func,
    setSearchValue: PropTypes.func,
    reference: PropTypes.func,
  };

  /**
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  /**
   *
   */
  componentDidMount() {
    const { workingHours, searchValue } = this.props;

    this._list.resetSearch(searchValue);

    if (workingHours.length === 0 && searchValue === '') {
      this._index(undefined, undefined, true);
    } else {
      this.setState({ loading: false });
    }
  }

  /**
   *
   */
  _resetSearch() {
    this._list.resetSearch();
    this.props.setSearchValue();
  }

  /**
   *
   * @param  {Number} [page=1]
   * @param  {Number} [limit=app.config.pagination.limit]
   * @param  {Boolean} [force=false]
   */
  _index(page = 1, limit = app.config.pagination.limit, force = false) {
    const { index, searchValue } = this.props;

    this.setState({ loading: true }, () => {
      let params = {
        page: page - 1,
        limit,
      };

      if (force) {
        if (!app._.isEmpty(searchValue)) params.page = 0;
        this._resetSearch();
      } else if (!app._.isEmpty(searchValue)) {
        params.filterGroups = [{
          or: true,
          filters: [{
              key: 'name',
              value: searchValue,
              operator: 'ct',
            },
            {
              key: 'description',
              value: searchValue,
              operator: 'ct',
            },
          ],
        }];
      }

      index(params, () => this.setState({ loading: false }));
    });
  }

  /**
   *
   * @param {String} value
   * @private
   */
  _onSearch(value) {
    const { index, pagination, setSearchValue } = this.props;

    this.setState({ loading: true }, () => index({
      filterGroups: [{
        or: true,
        filters: [{
            key: 'name',
            value,
            operator: 'ct',
          },
          {
            key: 'description',
            value,
            operator: 'ct',
          },
        ],
      }],
      limit: pagination.pageSize,
    }, (err) => {
      if (!err) setSearchValue(value);
      this.setState({ loading: false });
    }));
  }

  /**
   *
   * @return {Object}
   * @private
   */
  get _pagination() {
    const { pagination } = this.props;

    return {
      ...pagination,
      onChange: (page, limit) => this._index(page, limit),
      onShowSizeChange: (page, limit) => this._index(page, limit),
    };
  }

  /**
   *
   * @return {XML}
   */
  render() {
    const { loading } = this.state;
    const { workingHours, reference, ...rest } = this.props;

    return (
      <List
        { ...rest }
        reference={(input) => {
          this._list = input;
          reference(input);
        }}
        items={workingHours}
        loading={loading}
        onSearch={this._onSearch}
        pagination={this._pagination}
        icon={(item) => <MaterialIcon name="format-color-fill" style={{color: item.color}}/>
    }
    />
  );
}
}