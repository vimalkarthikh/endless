import React, { useState } from 'react';

const ElementTransfer = () => {
  const [bucket1Elements, setBucket1Elements] = useState([
    { name: 'BMW', isSelected: false },
    { name: 'Benz', isSelected: false },
    { name: 'Toyota', isSelected: false },
    { name: 'Audi', isSelected: false },
    { name: 'LandRover', isSelected: false },
    { name: 'Rolls Royce', isSelected: false },
    { name: 'Ferrari', isSelected: false },
    { name: 'Tesla', isSelected: false },
  ]);
  const [bucket2Elements, setBucket2Elements] = useState([]);

  const handleTransfer = (fromBucket, toBucket, elements) => {
    const newFromBucketElements = fromBucket.filter(item => !elements.includes(item));
    const newToBucketElements = [...toBucket, ...elements];
    return [newFromBucketElements, newToBucketElements];
  };

  const handleAddToBucket2 = () => {
    const elementsToAdd = bucket1Elements.filter(element => element.isSelected);
    if (elementsToAdd.length === 0) {
      alert("Please select at least one element to add to Garage.");
      return;
    }
    const [newBucket1Elements, newBucket2Elements] = handleTransfer(bucket1Elements, bucket2Elements, elementsToAdd);
    setBucket1Elements(newBucket1Elements);
    setBucket2Elements(newBucket2Elements);
  };

  const handleRemoveFromBucket2 = () => {
    const elementsToRemove = bucket2Elements.filter(element => element.isSelected);
    if (elementsToRemove.length === 0) {
      alert("Please select at least one element to remove from Garage List.");
      return;
    }
    const [newBucket2Elements, newBucket1Elements] = handleTransfer(bucket2Elements, bucket1Elements, elementsToRemove);
    setBucket2Elements(newBucket2Elements);
    setBucket1Elements(newBucket1Elements);
  };

  const toggleSelection = (index, bucket) => {
    const updatedBucket = bucket.map((element, i) =>
      i === index ? { ...element, isSelected: !element.isSelected } : element
    );
    if (bucket === bucket1Elements) {
      setBucket1Elements(updatedBucket);
    } else {
      setBucket2Elements(updatedBucket);
    }
  };

  return (
    <div className='container'>
      <h1 className='bucket-head'>Cars Bucket List</h1><br />
      <div className='buckets-container'>
        <div className='bucket'>
          <h2>BucketList Cars</h2>
          <hr /><br />
          {bucket1Elements.map((element, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={element.isSelected}
                onChange={() => toggleSelection(index, bucket1Elements)}
              />
              <label>{element.name}</label>
            </div>
          ))}
        </div>
        <div className='buttons'>
          <button className='bucket-btn' onClick={handleAddToBucket2}>Add to GarageList</button>
          <br />
          <button className='bucket-btn' onClick={handleRemoveFromBucket2}>Remove from GarageList</button>
        </div>
        <div className='bucket'>
          <h2>Garage Cars</h2>
          <hr /><br />
          {bucket2Elements.map((element, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={element.isSelected}
                onChange={() => toggleSelection(index, bucket2Elements)}
              />
              <label>{element.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElementTransfer;
