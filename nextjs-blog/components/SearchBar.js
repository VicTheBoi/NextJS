import {useState , useEffect} from "react";

export default function SearchBar() {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])
    function fetchAPIData(){
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(products => {
                const filtered = products.filter((el) => {return el.title.toLowerCase().includes(searchString.toLowerCase())})
                const currentFilter = filtered.map((product, index) => {
                    return (<div className="prodStyle" key={index}>
                        <p style={{fontSize:"2rem", textAlign:"center"}}>${product.price}</p>
                        <img style={{width:"50px", display:"block", margin:"auto"}} src={product.image} alt={product.title} />
                        <p style={{fontSize:"1rem"}}>{product.title}</p>
                    </div>)
                })
                setFilteredProducts(currentFilter)
            })
    }
    function handleChnage(event){
        setSearchString(event.target.value)
    }
    return <div>
        <p>The Search Bar!</p>
        <input type="text" value={searchString} onChange={handleChnage} />
        <div style={{display:"flex", flexFlow:"row wrap"}}>{filteredProducts}</div>
    </div>
}
