import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavBar, Pagination } from "../pages";
import { paginate } from "../utils/Paginate";
import "../styles/Users.css";

import { Grid } from "react-loader-spinner";

/*add a spinner to load when the data is loading 
  work on the alignment
  generate a profile card for ever user to be displayed when the usser is clicked*/

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [totalUser, setTotalUser] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // handle page change
  const handlePageChange = (page) => {
    // handle page change
    setCurrentPage(page);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => {
        setTotalUser(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const users = paginate(totalUser, currentPage, pageSize);
  return (
    <>
      <div className="users">
        <NavBar />
        <div className="inner-container">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Tel</th>
                <th>Location</th>
              </tr>
            </thead>

            {/* tbody */}
            <tbody className="tbody">
              {isLoading ? (
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <Grid
                      height="80"
                      width="80"
                      color="#4fa94d"
                      ariaLabel="grid-loading"
                      radius="12.5"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr className="row" key={user.login?.uuid}>
                    <td>
                      <img
                        src={user.picture?.medium}
                        alt="image"
                        className="user_img"
                      />
                    </td>
                    <td className="name">
                      {user.name?.first} {user.name?.last}
                    </td>
                    <td className="email">{user.email}</td>
                    <td className="tel">{user.phone}</td>
                    <td className="location">{user.location?.country}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <Pagination
            itemsCount={totalUser.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
