import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../store/userStore";
import CardUser from "../component/Card/CardUser";
import axios from "axios";
import Navbar from "./Navbar";

export default function ListUsersPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const listUsers = users.filter((el) => el._id !== localStorage.getItem("id"));
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:8055/route/people/`);
        dispatch(getUser(response.data.data));
      } catch (error) {
        console.error("error", error);
      }
    };
    getUsers();
  }, [dispatch]);

  return (
    <Navbar>
      <div>
        {listUsers.map((user) => (
          <CardUser key={user._id} user={user} />
        ))}
      </div>
    </Navbar>
  );
}
