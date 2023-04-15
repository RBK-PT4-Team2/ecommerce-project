import React from 'react'

const FilterStore = ({allData,categories,filterBycategory,setPrice,filterByPrice}) => {
  return (
    <div className="col-md-2" style={{ borderRight: "1px solid black" }}>
        <h3 style={{color: "red",textDecoration:"underline"}}>
          Categories
        </h3>
        <h6 style={{color:"blue",textDecoration:"underline",cursor:'pointer'}} onClick={allData}>All</h6>
        {categories.map((categ, i) => (
          <h6
            style={{ color: "blue", textDecoration: "underline", cursor:'pointer' }}
            key={i}
            onClick={() => filterBycategory(categ)}
          >
            {categ}
          </h6>
        ))}
        <h3 style={{ color: "red", textDecoration: "underline",margin:"10%" }}>
          Filter By Price
        </h3>
        <input type="number" className="form-control" placeholder="Price" 
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPrice(Number(e.target.value))}/>
        <button className="btn btn-info" style={{margin:"5%"}} onClick={filterByPrice}> filter</button>
      </div>
  )
}

export default FilterStore