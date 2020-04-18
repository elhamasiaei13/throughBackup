import React from 'react';
import Send from './Send';
import PropTypes from 'prop-types';
import Data from 'routes/Home/Attendance/Device/Modules/Components/Data';
import {Tabs} from 'antd';

@autobind
/**
 *
 */
export default class Clockings extends Data {
  static propTypes = {
    device: PropTypes.object,
  };

  /**
   *
   * @return {XML[]}
   * @private
   */
  _tabs() {
    const {device} = this.props;

    return [
      <Tabs.TabPane
        tab={app.translate('routes.home.attendance.device.Send to device')}
        key="1"
      >
        <Send device={device} ref={(input) => this._ref1 = input && input.getWrappedInstance()}/>
      </Tabs.TabPane>,
    ];
  }
}
