import React, { Component } from "react";
import AllergensSection from "../Components/ProductDetails/AllergensSection";
import Contains from "../Components/ProductDetails/ContainsIngredients";
import NutrientLevels from "../Components/ProductDetails/NutrientLevels";
import "../Components/ProductDetails/Productdetails.scss";
import PlaceholderImage from "../pages/shared/general_images/camera.svg";

// you can use this test product code: https://world.openfoodfacts.org/api/v0/product/3017620422003

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  getProductInformation(code) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${code}`)
      .then((data) => data.json())
      .then((response) => {
        this.setState({ product: response.product });
      });
  }

  componentDidMount() {
    let productCode = this.props.match.params.code;
    this.getProductInformation(productCode);
  }

  render() {
    return (
      <div>
        <div>
          <h3>Details Page test</h3>
          <div className="main-product-info">
            <div>
              {this.state.product?.image_front_url ? (
                <img
                  className="details-image"
                  src={this.state.product?.image_front_url}
                  alt={`${this.state.product?.product_name}`}
                />
              ) : (
                <div className="container">
                  <img
                    className="product-image"
                    src={PlaceholderImage}
                    alt="No image found"
                  />
                  <div className="placeholder-text">
                    <p>No image found</p>
                  </div>
                </div>
              )}
            </div>

            <h2>{this.state.product?.product_name}</h2>
            <p>{this.state.product?.brands}</p>
          </div>
          <div className="main-product-info">
            <Contains
              contains={this.state.product?.ingredients_analysis_tags}
            />

            <AllergensSection allergens={this.state.product?.allergens_tags} />
            <NutrientLevels
              nutrientLevels={this.state.product?.nutrient_levels}
            />
            {/* <BasicInformation /> */}
          </div>
        </div>
      </div>
    );
  }
}
