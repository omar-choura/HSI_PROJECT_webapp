import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import wdg8 from "../img/wdg/wdg-img-8.jpg";
import wdg6 from "../img/wdg/wdg-img-6.jpg";
import wdg3 from "../img/wdg/wdg-img-3.jpg";
const ShopWidget = () => {
  const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });

  function valuetext(value) {
    return `${value}°C`;
  }

  const classes = useStyles();
  const [value, setValue] = React.useState([30, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="col-md-4 col-sm-12">
        <div className="row">
          <div className="col-md-12">
            <div className="single-sid-wdg">
              <h4 className="sid-wdg-title">
                <strong>search</strong> here
                <span></span>
              </h4>
              <form action="#" className="wdg-search-form">
                <input type="text" placeholder="type to search here..." />
                <button className="submit-btn" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>

            <div className="single-sid-wdg">
              <h4 className="sid-wdg-title">
                <strong>related</strong> products<span></span>
              </h4>
              <ul className="rel-product-wraper">
                <li>
                  <div className="rel-product-img">
                    <a href="#">
                      <img
                        src={wdg8}
                        alt="blog thumbnail"
                        className="img-fluid"
                      />
                    </a>
                  </div>

                  <div className="rel-product-content">
                    <h5>
                      <a href="#">your product name</a>
                      <span>
                        <strong>$8.00</strong> <del>$88.00</del>
                      </span>
                    </h5>
                  </div>
                </li>

                <li>
                  <div className="rel-product-img">
                    <a href="#">
                      <img
                        src={wdg6}
                        alt="blog thumbnail"
                        className="img-fluid"
                      />
                    </a>
                  </div>

                  <div className="rel-product-content">
                    <h5>
                      <a href="#">your product name</a>
                      <span>
                        <strong>$3.00</strong> <del>$11.00</del>
                      </span>
                    </h5>
                  </div>
                </li>

                <li>
                  <div className="rel-product-img">
                    <a href="#">
                      <img
                        src={wdg3}
                        alt="blog thumbnail"
                        className="img-fluid"
                      />
                    </a>
                  </div>

                  <div className="rel-product-content">
                    <h5>
                      <a href="#">your product name</a>
                      <span>
                        <strong>$14.00</strong> <del>$35.00</del>
                      </span>
                    </h5>
                  </div>
                </li>
              </ul>
            </div>

            <div className="single-sid-wdg">
              <h4 className="sid-wdg-title">
                <strong>price</strong> filter<span></span>
              </h4>
              <div className="price-filter text-center">
                <div className={classes.root}>
                  <Typography id="range-slider" gutterBottom></Typography>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                </div>
              </div>
            </div>

            <div className="single-sid-wdg">
              <h4 className="sid-wdg-title">
                <strong>follow</strong> us
              </h4>
              <ul className="wdg-follow-us">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopWidget;
