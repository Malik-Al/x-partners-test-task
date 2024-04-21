import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../store/userStore";
import CardUser from "../component/Card/CardUser";
import axios from "axios";
import Navbar from "./Navbar";

export default function ListUsersPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8055/route/people/6620176066f7f44272b80712"
        );
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
        {users.map((user) => (
            <CardUser key={user._id} user={user} />
        ))}
      </div>
    </Navbar>
  );
}
