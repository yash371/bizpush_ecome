import React from "react";
import styles from "../../styles/product_nav.module.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Product_Nav = () => {
  return (
    <>
      <div
        className={styles.row}
        style={{ background: "#FAFBFC", borderRadius: "20px 20px 0 0px" }}
      >
        <div className={styles.one}>
          <p
            className={styles.product}
            style={{ boxShadow: "0px 2px 5px 0px rgba(38, 51, 77, 0.09)" }}
          >
            <ShoppingBasketIcon className={styles.ShoppingBasketIcon} />
          </p>
          <p className={styles.product_title}>
            <b>Products</b>
          </p>
        </div>
        <div className={styles.two}>
          <p className={styles.Active}>
            <b>Active</b>
          </p>
          <p>
            <b>Draft</b>
          </p>
          <p>
            <b>Assembly</b>
          </p>
        </div>
      
        <div className={styles.three}>
          <div className={styles.active_button}>
            <button className={styles.active}>
                Active
                <KeyboardArrowDownIcon className={styles.KeyboardArrowDownIcon} fontSize="small" />
            </button>
          </div>
          <button>
            <AddCircleIcon className={styles.AddCircleIcon} fontSize="small" />
            Add Product
          </button>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.four}>
          <p className={styles.check}>
            <CheckCircleIcon
              className={styles.CheckCircleIcon}
              fontSize="small"
            />
          </p>
          <p>
            <b className={styles.selectall}>Select All</b>
          </p>
        </div>
        <div className={styles.five}>
          <div className={styles.middle01}>
            <p>
              <FilterListIcon className={styles.icon} fontSize="small" />
            </p>
            <p className={styles.midtitle}>
              <b>Filters</b>
            </p>
          </div>

          <div className={styles.middle02}>
            <p>
              <SearchIcon className={styles.icon} fontSize="small" />
            </p>
            <p className={styles.midtitle}>
              <b>Search</b>
            </p>
          </div>

          <div className={styles.middle02}>
            <p>
              <EditIcon className={styles.icon} fontSize="small" />
            </p>
            <p className={styles.midtitle}>
              <b>Edit</b>
            </p>
          </div>

          <div className={styles.middle02}>
            <p>
              <DeleteIcon className={styles.icon} fontSize="small" />
            </p>
            <p className={styles.midtitle}>
              <b>Delete</b>
            </p>
          </div>
        </div>
        <div className={styles.six}>
          <p className={styles.last_title}>
            <ViewHeadlineIcon className={styles.icon02} fontSize="small" />
          </p>
          <p className={styles.last_title}>
            <ViewModuleIcon className={styles.icon02} fontSize="small" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Product_Nav;
