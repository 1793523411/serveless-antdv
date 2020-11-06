import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/charts';

const G2Plot02 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'date',
    height:400,
    yField: 'value',
    seriesField: 'country',
    slider: {
      start: 0.1,
      end: 0.9,
    },
  };
  return <Area {...config} />;
};

export default G2Plot02;