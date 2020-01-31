import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const getColors = () => {
    axiosWithAuth()
    .get('http://localhost:5000/api/colors')
    .then(response => {
      setColorList(response.data);
    })
    .catch(error => {
      console.log('GET Error', error);
    })
  };

  useEffect(() => {
    getColors();
  }, [])

  return (
    <>
      <ColorList colors={colorList} getColors={getColors} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
