import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './dashboard.css'
import { getUser } from './redux/action';
function Dashboard() {
    const dispatch = useDispatch()
    const userList = useSelector((state) => state.form.user);
    console.log(userList)
      useEffect(() => {
        dispatch(getUser());
      }, [dispatch]);

  return (
    <div className="list">
      <table>
        <thead className="head">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Count</th>
            <th>LastLoginDate</th>
          </tr>
        </thead>
        <tbody>
          {userList && userList.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.count}</td>
              <td>{user.lastLoginDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard