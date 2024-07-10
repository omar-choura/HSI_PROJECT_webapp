import React from "react";
import { Link } from "react-router-dom";

const Navmenu = () => {
  return (
    <>
      <div className="main-menu-area">
        <div className="container">
          <div className="main-menu-border bg-color3">
            <div className="row">
              <div className="col-12">
                <div className="tractour-main-menu-area">
                  <div className="search-area">
                    <div className="header-search-bar">
                      <form>
                        <input type="search" placeholder="keywords ..." />
                      </form>
                    </div>
                  </div>

                  <nav className="navbar navbar-expand-xl navbar-light main-menu">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav mr-auto ml-auto">
                        <li className="nav-item active">
                          <Link
                            className="nav-link"
                            to={`${process.env.PUBLIC_URL + "/"}`}
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            pages
                          </a>
                          <div
                            className="dropdown-menu fade-down"
                            aria-labelledby="navbarDropdown"
                          >
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/about"}`}
                            >
                              About
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/services"}`}
                            >
                              Services
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL + "/blocks-services"
                              }`}
                            >
                              blocks services
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/contact"}`}
                            >
                              Contact
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            project
                          </a>
                          <div
                            className="dropdown-menu fade-down"
                            aria-labelledby="navbarDropdown"
                          >
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL + "/project-3-col"
                              }`}
                            >
                              project 1
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL +
                                "/project-3-col-masonry"
                              }`}
                            >
                              project 2
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL + "/project-4-col"
                              }`}
                            >
                              project 3
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL + "/project-4-col-slider"
                              }`}
                            >
                              project 4
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            blog
                          </a>
                          <div
                            className="dropdown-menu fade-down"
                            aria-labelledby="navbarDropdown"
                          >
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/blog-2-col"}`}
                            >
                              blog 2 column
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/blog-3-col"}`}
                            >
                              blog 3 column
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/masonry-blog"}`}
                            >
                              masonry blog
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL + "/blog-left-sidebar"
                              }`}
                            >
                              blog left sidebar
                            </Link>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL + "/blog-right-sidebar"
                              }`}
                            >
                              blog right sidebar
                            </Link>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL + "/blog-no-sidebar"
                              }`}
                            >
                              blog no sidebar
                            </Link>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/blog-details"}`}
                            >
                              blog details
                            </Link>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Shop
                          </a>
                          <div
                            className="dropdown-menu fade-down"
                            aria-labelledby="navbarDropdown"
                          >
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/shop-3-col"}`}
                            >
                              shop 3 column
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/shop-4-col"}`}
                            >
                              shop 4 column
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL +
                                "/shop-2col-left-sidebar"
                              }`}
                            >
                              shop 2 col left sidebar
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL +
                                "/shop-2col-right-sidebar"
                              }`}
                            >
                              shop 2 col right sidebar
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL +
                                "/shop-3col-left-sidebar"
                              }`}
                            >
                              shop 3 col left sidebar
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${
                                process.env.PUBLIC_URL +
                                "/shop-3col-right-sidebar"
                              }`}
                            >
                              shop 3 col right sidebar
                            </Link>
                            <div className="separet-divider"></div>
                            <Link
                              className="dropdown-item"
                              to={`${process.env.PUBLIC_URL + "/login"}`}
                            >
                              login
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navmenu;
