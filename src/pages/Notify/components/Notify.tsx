import React, { useState, useEffect } from 'react';
import PaginationController from './Pagination'; 
import '../styles/notify.scss';

function Notify() {
  const [notifications, setNotifications] = useState([]);
  const [currentType, setCurrentType] = useState('活動');
  const [current, setCurrent] = useState(1);
  const [perPage, setPerPage] = useState(15);

  useEffect(() => {
    const notifyData = [
      { id: '1', type: '活動', state: '已通過' },
      { id: '2', type: '活動', state: '未通過' },
      { id: '3', type: '帳號', state: '未通過' },
      { id: '4', type: '帳號', state: '未通過' },
      { id: '5', type: '系統', state: '已通過' },
      { id: '6', type: '系統', state: '未通過' }
    ];
    setNotifications(notifyData);
  }, []);

  const getData = () => {
    return notifications
      .filter(notify => notify.type === currentType)
      .slice((current - 1) * perPage, current * perPage);
  };

  const handleChangeType = (type) => {
    setCurrentType(type);
    setCurrent(1);
  };

  const handleChangePage = (event, value) => {
    setCurrent(value);
  };

  return (
    <div className="notify_container">
      <p>{current}</p>
      <div className="content">
        <div className="list gap-5">
          <button 
            className={`switch_button ${currentType === '活動' ? 'active' : ''}`}
            onClick={() => handleChangeType('活動')}
          >
            活動通知
          </button>
          <button 
            className={`switch_button ${currentType === '帳號' ? 'active' : ''}`}
            onClick={() => handleChangeType('帳號')}
          >
            帳號通知
          </button>
          <button 
            className={`switch_button ${currentType === '系統' ? 'active' : ''}`}
            onClick={() => handleChangeType('系統')}
          >
            系統通知
          </button>
        </div>
        <div className="text-content">
          <div className="notify_box">
            <table className="notify_table">
              <thead className="notify_table_thead">
                <tr>
                  <th>公告</th>
                </tr>
              </thead>
              <tbody className="notify_tbody">
                {getData().map((notify) => (
                  <tr key={notify.id}>
                    <td className={notify.state.includes('未通過') ? 'notify_tbody_border_RED' : 'notify_tbody_border'}>
                      {notify.state}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <PaginationController currentPage={current} handleChangePage={handleChangePage} />
    </div>
  );
}

export default Notify;
