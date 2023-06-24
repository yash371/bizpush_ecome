import React from 'react';
import styles from '../../styles/product_nav.module.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const Product_Nav = () => {
  return (
    <>
        <div className={styles.row}>
            <div className={styles.one}>
                <p className={styles.product}><ShoppingBasketIcon className={styles.ShoppingBasketIcon} /></p>
                <p className={styles.product_title}><b>Products</b></p>
            </div>
            <div className={styles.two}>
                <p className={styles.Active}><b>Active</b></p>
                <p><b>Draft</b></p>
                <p><b>Assembly</b></p>
            </div>
            <div className={styles.three}>
                <button><AddCircleIcon className={styles.AddCircleIcon} fontSize='small' />Add Product</button>
            </div>
        </div>

        <div className={styles.row}>
            <div className={styles.four}>
                <p className={styles.check}><CheckCircleIcon className={styles.CheckCircleIcon} fontSize='small' /></p>
                <p><b>Select All</b></p>
            </div>
            <div className={styles.five}>
                <div className={styles.middle01}>
                    <p><FilterListIcon className={styles.icon} fontSize='small' /></p>
                    <p><b>Filters</b></p>
                </div>
                    
                <div className={styles.middle02}>
                    <p><SearchIcon className={styles.icon} fontSize='small' /></p>
                    <p><b>Search</b></p>
                </div>
                    
                <div className={styles.middle02}>
                    <p><EditIcon className={styles.icon} fontSize='small' /></p>
                    <p><b>Edit</b></p>
                </div>
                    
                <div className={styles.middle02}>
                    <p><DeleteIcon className={styles.icon} fontSize='small' /></p>
                    <p><b>Delete</b></p>
                </div>
            </div>
            <div className={styles.six}>
                <p className={styles.last_title}><ViewHeadlineIcon className={styles.icon02} fontSize='small' /></p>
                <p className={styles.last_title}><ViewModuleIcon className={styles.icon02} fontSize='small' /></p>
            </div>
        </div>
    </>
  )
}

export default Product_Nav