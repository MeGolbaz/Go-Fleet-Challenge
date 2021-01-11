import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './SearchBar.module.css'

export default () => <div className={classes.searchBox}>
    <FontAwesomeIcon icon={faSearch} className={classes.searchIcon} />
    <input className={classes.searchInput} type="search" />
</div>