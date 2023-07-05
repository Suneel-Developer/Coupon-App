import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import "./filter.css";

const Filter = () => {
  return (
    <div className="filter_container">
      <h3>46 Offers Available</h3>
      <p className="heading_desc">
        When you buy through links on RetailMeNot
        <Link>we may earn a commission.</Link>
      </p>
      <h4>Top Categories</h4>
      <div className="filter_feild">
        <input type="checkbox" name="travel" />
        <label>Travel</label>
      </div>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>Food</label>
      </div>
      <h4>Top Stores</h4>
      <div className="search_feild">
        <BiSearch />
        <input type="search" placeholder="Search by name" />
      </div>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>Ancestry.com</label>
      </div>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>Outback Steakhouse</label>
      </div>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>Budget Car Rental</label>
      </div>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>Payless Car Rentals</label>
      </div>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>FTD Flowers</label>
      </div>
      <Link>Show All 27</Link>
      <h4>Coupon Type</h4>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>Online Sales</label>
      </div>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>Online Codes</label>
      </div>
      <h4>Discount Type</h4>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>$ Off</label>
      </div>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>% Off</label>
      </div>
      <div className="filter_feild">
        <input type="checkbox" />
        <label>Other</label>
      </div>
      <p className="filter_details">
        Listed above you'll find some of the best aarp coupons, discounts and
        promotion codes as ranked by the users of RetailMeNot.com. To use a
        coupon simply click the <b>coupon code</b> then enter the code during
        the store's checkout process.
      </p>
      <b>Today's Top Aarp Offers:</b>
      <div>
        <li>
          30% Off Ancestry World Explorer Or All Access For AARP Members at
          <Link>Ancestry.com</Link>
        </li>
        <li>
          10% Off For AARP Card at <Link>Outback Steakhouse</Link>{" "}
        </li>
      </div>
      <div className="total_filter">
        <p>
          Total Offers <span>46</span>
        </p>
        <p>
          Coupon Codes <span>6</span>
        </p>
      </div>
    </div>
  );
};

export default Filter;
