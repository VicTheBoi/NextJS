import React, {useState} from "react";
import styles from '../styles/Home.module.css';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleClearClick = () => {
        setSearchValue("")
    }
    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })
    const shouldDisplayButton = searchValue.length > 0
    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}

            <ul>
            {filteredproducts.map((product) => {
                return <li key={product}>{product}</li>
            })}
            </ul>
        </div>
    )
}

export default SearchBar