import React, { useState, useEffect } from 'react';
import { Heatmap } from '@ant-design/charts';

const G2Plot04 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/a719cd4e-bd40-4878-a4b4-df8a6b531dfe.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    width: 650,
    height: 500,
    autoFit: false,
    data: data,
    xField: 'Month of Year',
    yField: 'District',
    colorField: 'AQHI',
    color: ['#174c83', '#7eb6d4', '#efefeb', '#efa759', '#9b4d16'],
    meta: { 'Month of Year': { type: 'cat' } },
  };
  return <Heatmap {...config} />;
};

export default G2Plot04;