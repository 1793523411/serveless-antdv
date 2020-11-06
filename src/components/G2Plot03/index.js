import React, { useState, useEffect } from 'react';
import { Sunburst } from '@ant-design/charts';

const G2Plot03 = () => {
  const [fetchData, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/mobile.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  fetchData.forEach(function (mobile) {
    mobile.value = null;
  });
  var data = {
    name: 'root',
    children: fetchData,
  };
  var config = {
    data: data,
    height:400,
    type: 'treemap',
    seriesField: 'value',
    reflect: 'y',
    colorField: 'brand',
    hierarchyConfig: {
      size: [1, 0.1],
    },
    sunburstStyle: {
      lineWidth: 1,
      stroke: '#fff',
    },
    tooltip: {
      fields: ['name', 'value'],
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Sunburst {...config} />;
};

export default G2Plot03;