import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'

import './SearchForm.sass'

const SearchInput = (props) => {

    const searchList = props.searchList
    
    return (
        <div className="searchForm">
            <form onSubmit={props.getData}>
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={props.changeData}
                />
                <button type='reset'><IoMdClose/></button>
            </form>
            {
                searchList.length > 0
                ?
                <div className="searchInputResults">
                    <div className="searchInputResultsIns">
                        <div className="searchInputResultsList">
                            {searchList.map((item, index) => {
                                return (
                                    <Link
                                        onClick={props.clearSearchInfo}
                                        to={'/'}
                                        key={index}
                                        data-location={`/country?name=${item.Country.toLowerCase()}`}
                                    >
                                        {item.Country}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                :
                ''
            }
        </div>
    )
}

export default SearchInput