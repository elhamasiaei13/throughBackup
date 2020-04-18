import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Form } from 'antd';
import jMoment from 'moment-jalaali';
import RangePicker from 'components/common/DatePicker/RangePicker';
import { request } from 'routes/Home/Attendance/Device/Module';

@connect(null, {
  request,
}, null, { withRef: true })
@autobind
/**
 *
 */
export default class Receive extends React.PureComponent {
  static propTypes = {
    device: PropTypes.object,
    request: PropTypes.func,
  };

  /**
   *
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      startDate: jMoment().startOf('jMonth').format('YYYY-MM-DD'),
      endDate: jMoment().format('YYYY-MM-DD'),
    };
  }

  /**
   *
   * @param {Function} [callback=(function())]
   */
  submit(callback = () => {}) {
    const { startDate, endDate } = this.state;
    const { request, device } = this.props;

    let loader = app.loading(app.translate('routes.home.attendance.device.Getting Clockings'));

    let data = {};

    if (startDate) {
      data.dateFrom = startDate;
    }

    if (endDate) {
      data.dateTo = endDate;
    }

    request(device.id, 'getClockings', data, (err, res) => {
      loader.hide(() => {
        if (err || (res.status < 200 || res.status >= 300)) {
          return app.message(app.translate('routes.home.attendance.device.Getting Clockings Failed'), 'error');
        }

        app.message(app.translate('routes.home.attendance.device.Clockings Received', { count: res.data ? res.data.events.length : res.events.length }));
      });

      callback();
    });
  }

  /**
   *
   * @return {XML}
   */
  render() {
    const { startDate, endDate } = this.state;

    return (
      <Row
        gutter={16}
        style={{
          height: '100%',
        }}
      >

        <Col>
          <Form.Item
            label={app.translate('routes.home.attendance.device.Select Range')}
          >
            <RangePicker
              value={[startDate, endDate]}
              onChange={(dates) => dates ? this.setState({startDate: dates[0], endDate: dates[1]}) : this.setState({startDate: null, endDate: null})}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
        </Col>

      </Row>
    );
  }
}