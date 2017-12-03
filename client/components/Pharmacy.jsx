import React from 'react';
import $ from 'jquery';

const PharmacyItem = (props) => (
  <div>
    <span> {props.item.id} </span>
    <span> {props.item.name} </span>
    <span> {props.item.email} </span>
    <span> {props.item.mobile} </span>
  </div>
);


class Pharmacy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pharmacyList: [],
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/api/pharmacy',
      type: 'GET',
      success: (res) => {
        this.setState({
          pharmacyList: res
        });
      },
      error: () => {
        console.log('error fetching users from database');
      }
    });
  }

  render() {
    const pharmacyList = this.state.pharmacyList.map((pharmacy) => {
      return (
        <PharmacyItem key={pharmacy.id} item={pharmacy} />
      )
    });

    return(
      <div>
        { pharmacyList }
      </div>
    );
  }
}

export default Pharmacy;
