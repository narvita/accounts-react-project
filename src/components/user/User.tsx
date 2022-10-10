import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getUser } from "../../services/userService";
import { Table } from "antd";
import { UserInterface } from "../../interfaces/UserInteface";

function User(): JSX.Element {
  let { id } = useParams();
  const [users, setUser] = useState<UserInterface[]>([]);
  let newUser: UserInterface[] = [];
  
  const getOneUser = async () => {
    const user = await getUser(id);
    if (newUser) {
      newUser.push(user);
      setUser(newUser)
    }
  };

  useEffect(() => {
    try {
      getOneUser();
    } catch (e) {
        console.log(e);
    }
  }, [id]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Created ON",
      dataIndex: "createdDate",
      key: "createdOn",
    },
    {
      title: "Updated ",
      dataIndex: "updatedDate",
      key: "action",
    },
  ];

  return <Table dataSource={users} columns={columns}></Table>;
}

export default User;
