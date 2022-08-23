import { queryHelpers } from "@testing-library/react";
import React, { useContext } from "react";
import SweetContext from "../SweetContext";
import Carousel from "./Carousel";
import Features from "./Features";
import Footer from "./Footer";
import Intro from "./Intro";
import PrimaryNav from "./PrimaryNav";
import SearchForm from "./SearchForm";
import SecondaryNav from "./SecondaryNav";
import inventory from "../data";
import Product from "./Product";
import { Link } from "react-router-dom";
import Hr from "./Hr";

function Home() {
  const {
    query,
    setQuery,
    searchVisible,
    handleAddCartBtn,
    scrollPosition,
    handleBackToTopClick,
    products,
    isSearchSubmit,
    priceSort,
    setPriceSort,
    handleSearchSubmit,
    selectedCategory,
    setSelectedCategory,
    cart,
  } = useContext(SweetContext);

  // console.log(inventory);

  return (
    <>
      <PrimaryNav />
      <SecondaryNav />
      <SearchForm />

      {!isSearchSubmit && (
        <>
          <Carousel />
          <Intro />
          <Hr />
        </>
      )}

      {cart.length > 0 && (
        <div id="floating-cart">
          <Link
            to="/cart"
            className={scrollPosition > 200 ? "show" : ""}
            onClick={handleBackToTopClick}
          ></Link>
          <span id="cart-count">{cart.length}</span>
        </div>
      )}

      <a
        href="#/"
        id="button"
        className={scrollPosition > 200 ? "show" : ""}
        onClick={handleBackToTopClick}
      ></a>

      <nav class="wrapper product-filter">
        <div class="row">
          <div className="col-4">
            <div class="filter-criteria">
              <label>Filter by:</label>
              <select
                className="cat-filter"
                value={selectedCategory}
                onChange={(event) => {
                  setSelectedCategory(event.target.value);
                  handleSearchSubmit(event);
                }}
              >
                <option value="">All Products (default)</option>
                <option value="cream">Cream</option>
                <option value="glaze">Glaze</option>
                <option value="dip">Dip</option>
                <option value="chocolate">Chocolate</option>
              </select>
            </div>
            <div class="filter-criteria">
              <label>Sort by:</label>
              <select
                className="price-filter"
                value={priceSort}
                onChange={(event) => {
                  setPriceSort(event.target.value);
                  handleSearchSubmit(event);
                }}
              >
                <option value="">Price Filter (default)</option>
                <option value="ltoh">Low to High</option>
                <option value="htol">High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      <div className="wrapper">
        <div className="row product-list">
          {products.length > 0 ? (
            <>
              {products.map((product, idx) => {
                return (
                  <Product
                    key={idx}
                    details={product}
                    handleAddCartBtn={handleAddCartBtn}
                  />
                );
              })}
            </>
          ) : (
            <p>There are no products in the inventory.</p>
          )}
        </div>
      </div>

      <Hr />

      <Features />
      <Footer />
    </>
  );
}

export default Home;
