import React, { Component } from "react";

export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      selectedFlags: []
    };
  }

  showCheckboxes = () => {
    this.setState({ showList: !this.state.showList });
  };
  clearFlags = () => {
    this.setState({ selectedFlags: [] });
    this.setState({ showList: !this.state.showList });
  };
  
  getFlagList = e => {
    if (
      e.target.checked &&
      ((this.state.selectedFlags &&
        !this.state.selectedFlags.includes(e.target.name)) ||
        this.state.selectedFlags === [])
    ) {
      this.setState({
        selectedFlags: this.state.selectedFlags.concat(e.target.name)
      });
    } else if (
      !e.target.checked &&
      this.state.selectedFlags &&
      this.state.selectedFlags.includes(e.target.name)
    ) {
      this.setState({
        selectedFlags: this.state.selectedFlags.filter(val => {
          return val !== e.target.name;
        })
      });
    }
  };
  render() {
    let countries =
      this.props.countrylist &&
      this.props.countrylist[0] &&
      this.props.countrylist[0].countries.map((item) => {
        return (
          <label key={item.name} htmlFor={item.name} className="form-control mb-0">
            <input
              key={item.name}
              type="checkbox"
              className="mr-1"
              id={item.name}
              name={item.flag}
              onChange={this.getFlagList}
            />
            {item.name}
          </label>
        );
      }, this);

      let selectedFlags = this.state.selectedFlags.map((item) => {
        return (
          <span key={item} className="p-1">
            {item}
          </span>
        );
      }, this);
    return (
      <div className="col-md-8 float-right">
        <div className="col-md-6 float-left form-group">
          <h4>Step 2</h4>
          <div>Now, select a country.</div>
          <div className="multiselect">
            <div className="selectBox" onClick={this.showCheckboxes} >
              <input type="text" list="countryList" className="form-control" />              
              <datalist id="countryList">
                <option>Select an option</option>
              </datalist>
              <div className="overSelect"></div>
            </div>
            {this.state.showList ? (
              <div className="checkboxes">{countries}</div>
            ) : null}
          </div>
        </div>
        {this.state.selectedFlags.length ? (
          <div className="col-md-6 float-right">
            <h4>Selected Flags:</h4>
            <div>{selectedFlags}</div>
            <button type="button" className="btn btn-primary" onClick={this.clearFlags}>Clear Flags</button>
          </div>
        ) : null}
      </div>
    );
  }
}
