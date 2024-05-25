import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {useSearch} from "./context_Search"

const Search = ({ setshowsearch }) => {
    const [query, setQuery] =useState("");
    const [values, setValues] = useState([]); 
    const navigate = useNavigate();
let data;

    const onChange= async (e) => {
        e.preventDefault();
        setQuery(e.target.value );
        try {
            data  =  await axios.get(
                `http://localhost:8080/api/v1/product/search/${query}`
              );
              
          setValues(data.data)
          console.log(`http://localhost:8080/api/v1/product/search/${query}`)
          console.log(values)
          console.log(data)
        //   navigate("/search");
        } catch (error) {
          console.log(error);
        }
      };


    if (!query.length) {
        data = null;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setshowsearch(false)}
                />
            </div>
            <div className="search-result-content">
                {/* {!values?.results.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )} */}
                <div className="search-results">
                    {values.map((item) => (
                        <div
                            className="search-result-item"
                            key={item.id}
                            onClick={() => {
                                navigate(`/product/${item.slug}`);
                                setshowsearch(false);
                            }}
                        >
                            <div className="image-container">
                                <img
                                    src={`http://localhost:8080/api/v1/product/get-product-photo/${item._id}`}
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.name}
                                </span>
                                <span className="desc">
                                    {item.price}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    );
};

export default Search;