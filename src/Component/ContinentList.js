import React, { Component } from "react";
import axios from "axios";
import CountryFlag from "./CountryFlag";
import "bootstrap/dist/css/bootstrap.min.css";
export default class Continent extends Component {
  constructor() {
    super();
    this.state = {
      continentList: [],
      selectedContinent: "",
      selectedCountry: ""
    };
  }

  //Function which is called the first time the before render loads
  componentDidMount() {
    this.getContinentData();
  }

  //Function to get the Continent and country Data from json
  getContinentData = () => {
    axios.get("assets/continents.json").then(response => {
      this.setState({ continentList: response.data });
    });
  };
  //Function to set the selected Continent
  setSelectedContinent = () => {
    let selectedContinentDiv = document.getElementById("selectedContinentDiv").value;
    this.setState({ selectedContinent: '' });
    if(selectedContinentDiv){
      let existContinent = this.state.continentList.findIndex((val)=> val.continent === selectedContinentDiv);
      if(existContinent > -1){
        this.setState({ selectedContinent: selectedContinentDiv });
      } 
    }    
  };

  render() {
    let continentList = this.state.continentList;
    let selectedContinentDiv = this.state.selectedContinent;
    let list =
      continentList.length > 0 &&
      continentList.map((item) => {
        return (
          <option key={item.continent} value={item.continent}>
            {item.continent}
          </option>
        );
      }, this);

    let countrylist =
      continentList.length > 0 &&
      continentList.filter(val => {
        return val.continent === selectedContinentDiv;
      }, this);
    return (
      <div className="col-md-12 mt-5">
        <div className="col-md-4 float-left">
          <h4>Step 1</h4>
          <div>Select a continent.</div>
          <div className="form-group">
            <input
              className="form-control"
              list="continentList"
              id="selectedContinentDiv"
              onChange={this.setSelectedContinent}
            />
            <datalist id="continentList" onChange={this.setSelectedContinent}>
              <option key="" value=""></option>
              {list}
            </datalist>
            {this.state.selectedContinent ? (
              <div className="mt-4">
                <p>You selected </p>
                <h4>{this.state.selectedContinent}</h4>{" "}
              </div>
            ) : null}
          </div>
        </div>
        {this.state.selectedContinent ? (
          <CountryFlag
            selectedContinent={this.state.selectedContinent}
            countrylist={countrylist}
          ></CountryFlag>
        ) : null}
      </div>
    );
  }
}
