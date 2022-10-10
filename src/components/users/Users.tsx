import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Table } from "antd";
import { getUsers } from "../../services/userService";
import { UserInterface } from "../../interfaces/UserInteface";


function Users(): JSX.Element {
  const [users, setUsers] = useState<UserInterface[]>([]);

  const getAllUsers = async (): Promise<void> => {
    const allUsers = await getUsers();
    if (Array.isArray(allUsers)) {
      setUsers(allUsers);
    }
  };

  useEffect(() => {
    try {
      getAllUsers();
    } catch (e) {
        console.log(e);
    }
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "userid",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Created ON",
      dataIndex: "createdDate",
      key: "createdOn",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (_users: UserInterface[], user: UserInterface) => <Link to={`/accounts/${user._id}`}>View</Link>,
    },
  ];

  return <Table dataSource={users} columns={columns}></Table>;
}

export default Users;
