import React from 'react'

const AddressCard = ({ address }) => {
  console.log("Addresscard",address?.mobile)
  return (
    <div>
      <div className="space-y-3">
        <p className="font-semibold">
          {address?.firstName+ " " + address?.lastName}
        </p>
        <p>
          {address?.streetAddress +
            ", " +
            address?.city +
            "-" +
            address?.zipCode +
            ", " +
            address?.state}
        </p>
        <div className="space-y-1">
          <p className="font-semibold">Mobile Number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard
