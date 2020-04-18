import { Data } from 'routes/Home/Attendance/Device/Modules/Components';
import { Modal } from 'antd';

@autobind
/**
 *
 */
export default class Remove extends Data.Integration {
  /**
   *
   * @param {Function} [callback=(function())]
   */
  submit(callback = () => {}) {
    Modal.confirm({
      title: app.translate('routes.home.attendance.device.Removing Cards'),
      onOk: () => this._remove(callback),
      onCancel: () => callback(),
    });
  }

  /**
   *
   * @param {Function} [callback=(function())]
   */
  _remove(callback = () => {}) {
    const _this = this.getWrappedInstance();
    const { request, device } = _this.props;

    let loader = app.loading(app.translate('routes.home.attendance.device.Removing Cards'));

    request(device.id, 'removeCards', { users: _this.usersList.getSelected() }, (err) => {
      loader.hide(() => {
        if (err) {
          return app.message(app.translate('routes.home.attendance.device.Removing Cards Failed'), 'error');
        }

        app.message(app.translate('routes.home.attendance.device.Removing Cards Was Successful'));
      });

      callback();
    });
  }
}