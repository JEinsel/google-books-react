import React from "react";
import { Row, Col } from "../Grid"


const SearchResult = props => {

    return (props.books.length === 0) ? (
        <div className="card">
            Search Results
            <div className="searchResults">

            </div>
        </div>

    ) : <div className="card">
            Search Results
    <div className="searchCard">
                <Row className="SearchResults">
                
                </Row>
            </div>
        </div>


};