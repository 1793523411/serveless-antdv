import React, { useState} from 'react';
import ReactDOM from "react-dom";
// import { Chart } from '@antv/g2';
import { Chart, LineAdvance ,WaterfallChart,StackedAreaChart,RangeColumnChart,RadarChart} from "bizcharts";

import './index.css'

function G201(){
  
const data = [
  {
    month: "Jan",
    city: "Tokyo",
    temperature: 7,
  },
  {
    month: "Jan",
    city: "London",
    temperature: 3.9,
  },
  {
    month: "Feb",
    city: "Tokyo",
    temperature: 6.9,
  },
  {
    month: "Feb",
    city: "London",
    temperature: 4.2,
  },
  {
    month: "Mar",
    city: "Tokyo",
    temperature: 9.5,
  },
  {
    month: "Mar",
    city: "London",
    temperature: 5.7,
  },
  {
    month: "Apr",
    city: "Tokyo",
    temperature: 14.5,
  },
  {
    month: "Apr",
    city: "London",
    temperature: 8.5,
  },
  {
    month: "May",
    city: "Tokyo",
    temperature: 18.4,
  },
  {
    month: "May",
    city: "London",
    temperature: 11.9,
  },
  {
    month: "Jun",
    city: "Tokyo",
    temperature: 21.5,
  },
  {
    month: "Jun",
    city: "London",
    temperature: 15.2,
  },
  {
    month: "Jul",
    city: "Tokyo",
    temperature: 25.2,
  },
  {
    month: "Jul",
    city: "London",
    temperature: 17,
  },
  {
    month: "Aug",
    city: "Tokyo",
    temperature: 26.5,
  },
  {
    month: "Aug",
    city: "London",
    temperature: 16.6,
  },
  {
    month: "Sep",
    city: "Tokyo",
    temperature: 23.3,
  },
  {
    month: "Sep",
    city: "London",
    temperature: 14.2,
  },
  {
    month: "Oct",
    city: "Tokyo",
    temperature: 18.3,
  },
  {
    month: "Oct",
    city: "London",
    temperature: 10.3,
  },
  {
    month: "Nov",
    city: "Tokyo",
    temperature: 13.9,
  },
  {
    month: "Nov",
    city: "London",
    temperature: 6.6,
  },
  {
    month: "Dec",
    city: "Tokyo",
    temperature: 9.6,
  },
  {
    month: "Dec",
    city: "London",
    temperature: 4.8,
  },
];
const data2 = [
  { type: '日用品', money: 120 },
  { type: '伙食费', money: 900 },
  { type: '交通费', money: 200 },
  { type: '水电费', money: 300 },
  { type: '房租', money: 1200 },
  { type: '商场消费', money: 1000 },
  { type: '应酬红包', money: -2000 },
];

const data3 = [
  { "country": "北美", "date": 1965, "value": 1390.5 },
  { "country": "北美", "date": 1966, "value": 1469.5 },
  { "country": "北美", "date": 1967, "value": 1521.7 },
  { "country": "北美", "date": 1968, "value": 1615.9 },
  { "country": "北美", "date": 1969, "value": 1703.7 },
  { "country": "北美", "date": 1970, "value": 1767.8 },
  { "country": "北美", "date": 1971, "value": 1806.2 },
  { "country": "北美", "date": 1972, "value": 1903.5 },
  { "country": "北美", "date": 1973, "value": 1986.6 },
  { "country": "北美", "date": 1974, "value": 1952 },
  { "country": "北美", "date": 1975, "value": 1910.4 },
  { "country": "北美", "date": 1976, "value": 2015.8 },
  { "country": "北美", "date": 1977, "value": 2074.7 },
  { "country": "北美", "date": 1978, "value": 2092.7 },
  { "country": "北美", "date": 1979, "value": 2123.8 },
  { "country": "北美", "date": 1980, "value": 2068.3 },
  { "country": "北美", "date": 1981, "value": 2018 },
  { "country": "北美", "date": 1982, "value": 1951.5 },
  { "country": "北美", "date": 1983, "value": 1941.1 },
  { "country": "北美", "date": 1984, "value": 2046.2 },
  { "country": "北美", "date": 1985, "value": 2053.1 },
  { "country": "北美", "date": 1986, "value": 2060.7 },
  { "country": "北美", "date": 1987, "value": 2130.8 },
  { "country": "北美", "date": 1988, "value": 2223.5 },
  { "country": "北美", "date": 1989, "value": 2275.9 },
  { "country": "北美", "date": 1990, "value": 2280.7 },
  { "country": "北美", "date": 1991, "value": 2282 },
  { "country": "北美", "date": 1992, "value": 2319.7 },
  { "country": "北美", "date": 1993, "value": 2366.6 },
  { "country": "北美", "date": 1994, "value": 2420.2 },
  { "country": "北美", "date": 1995, "value": 2466.9 },
  { "country": "北美", "date": 1996, "value": 2547.4 },
  { "country": "北美", "date": 1997, "value": 2569 },
  { "country": "北美", "date": 1998, "value": 2585.2 },
  { "country": "北美", "date": 1999, "value": 2633.8 },
  { "country": "北美", "date": 2000, "value": 2699.4 },
  { "country": "北美", "date": 2001, "value": 2640.1 },
  { "country": "北美", "date": 2002, "value": 2687.7 },
  { "country": "北美", "date": 2003, "value": 2700.7 },
  { "country": "北美", "date": 2004, "value": 2759.4 },
  { "country": "北美", "date": 2005, "value": 2775.6 },
  { "country": "北美", "date": 2006, "value": 2761.9 },
  { "country": "北美", "date": 2007, "value": 2809.5 },
  { "country": "北美", "date": 2008, "value": 2759.4 },
  { "country": "北美", "date": 2009, "value": 2632.5 },
  { "country": "北美", "date": 2010, "value": 2720.7 },
  { "country": "北美", "date": 2011, "value": 2722.9 },
  { "country": "北美", "date": 2012, "value": 2665.1 },
  { "country": "北美", "date": 2013, "value": 2738.3 },
  { "country": "北美", "date": 2014, "value": 2766.8 },
  { "country": "北美", "date": 2015, "value": 2739.7 },
  { "country": "北美", "date": 2016, "value": 2761.9 },
  { "country": "北美", "date": 2017, "value": 2772.8 },
  { "country": "中南美", "date": 1965, "value": 109.2 },
  { "country": "中南美", "date": 1966, "value": 115.7 },
  { "country": "中南美", "date": 1967, "value": 120.5 },
  { "country": "中南美", "date": 1968, "value": 128 },
  { "country": "中南美", "date": 1969, "value": 134.4 },
  { "country": "中南美", "date": 1970, "value": 142.2 },
  { "country": "中南美", "date": 1971, "value": 157.5 },
  { "country": "中南美", "date": 1972, "value": 169.5 },
  { "country": "中南美", "date": 1973, "value": 186.3 },
  { "country": "中南美", "date": 1974, "value": 195.5 },
  { "country": "中南美", "date": 1975, "value": 198 },
  { "country": "中南美", "date": 1976, "value": 211.7 },
  { "country": "中南美", "date": 1977, "value": 223.8 },
  { "country": "中南美", "date": 1978, "value": 236.5 },
  { "country": "中南美", "date": 1979, "value": 251.8 },
  { "country": "中南美", "date": 1980, "value": 262.9 },
  { "country": "中南美", "date": 1981, "value": 262.7 },
  { "country": "中南美", "date": 1982, "value": 265.9 },
  { "country": "中南美", "date": 1983, "value": 268.3 },
  { "country": "中南美", "date": 1984, "value": 278.3 },
  { "country": "中南美", "date": 1985, "value": 285.2 },
  { "country": "中南美", "date": 1986, "value": 304.2 },
  { "country": "中南美", "date": 1987, "value": 315.4 },
  { "country": "中南美", "date": 1988, "value": 324.6 },
  { "country": "中南美", "date": 1989, "value": 329.9 },
  { "country": "中南美", "date": 1990, "value": 331.1 },
  { "country": "中南美", "date": 1991, "value": 339.7 },
  { "country": "中南美", "date": 1992, "value": 355.8 },
  { "country": "中南美", "date": 1993, "value": 368.8 },
  { "country": "中南美", "date": 1994, "value": 390.9 },
  { "country": "中南美", "date": 1995, "value": 408.3 },
  { "country": "中南美", "date": 1996, "value": 425.8 },
  { "country": "中南美", "date": 1997, "value": 448.2 },
  { "country": "中南美", "date": 1998, "value": 465.5 },
  { "country": "中南美", "date": 1999, "value": 463.7 },
  { "country": "中南美", "date": 2000, "value": 476.1 },
  { "country": "中南美", "date": 2001, "value": 477.7 },
  { "country": "中南美", "date": 2002, "value": 483.5 },
  { "country": "中南美", "date": 2003, "value": 489.3 },
  { "country": "中南美", "date": 2004, "value": 515.5 },
  { "country": "中南美", "date": 2005, "value": 533.6 },
  { "country": "中南美", "date": 2006, "value": 564 },
  { "country": "中南美", "date": 2007, "value": 587 },
  { "country": "中南美", "date": 2008, "value": 605.8 },
  { "country": "中南美", "date": 2009, "value": 596.8 },
  { "country": "中南美", "date": 2010, "value": 632.5 },
  { "country": "中南美", "date": 2011, "value": 658.9 },
  { "country": "中南美", "date": 2012, "value": 676.5 },
  { "country": "中南美", "date": 2013, "value": 692 },
  { "country": "中南美", "date": 2014, "value": 697.7 },
  { "country": "中南美", "date": 2015, "value": 701.1 },
  { "country": "中南美", "date": 2016, "value": 696.8 },
  { "country": "中南美", "date": 2017, "value": 700.6 },
  { "country": "欧洲", "date": 1965, "value": 1058.1 },
  { "country": "欧洲", "date": 1966, "value": 1089.7 },
  { "country": "欧洲", "date": 1967, "value": 1121.7 },
  { "country": "欧洲", "date": 1968, "value": 1196.6 },
  { "country": "欧洲", "date": 1969, "value": 1285.5 },
  { "country": "欧洲", "date": 1970, "value": 1369 },
  { "country": "欧洲", "date": 1971, "value": 1406.2 },
  { "country": "欧洲", "date": 1972, "value": 1472.7 },
  { "country": "欧洲", "date": 1973, "value": 1558 },
  { "country": "欧洲", "date": 1974, "value": 1535.5 },
  { "country": "欧洲", "date": 1975, "value": 1519.3 },
  { "country": "欧洲", "date": 1976, "value": 1606.9 },
  { "country": "欧洲", "date": 1977, "value": 1632.4 },
  { "country": "欧洲", "date": 1978, "value": 1687.5 },
  { "country": "欧洲", "date": 1979, "value": 1749.6 },
  { "country": "欧洲", "date": 1980, "value": 1706.4 },
  { "country": "欧洲", "date": 1981, "value": 1661.4 },
  { "country": "欧洲", "date": 1982, "value": 1630.2 },
  { "country": "欧洲", "date": 1983, "value": 1645.2 },
  { "country": "欧洲", "date": 1984, "value": 1686.9 },
  { "country": "欧洲", "date": 1985, "value": 1779.4 },
  { "country": "欧洲", "date": 1986, "value": 1811.3 },
  { "country": "欧洲", "date": 1987, "value": 1849.7 },
  { "country": "欧洲", "date": 1988, "value": 1870 },
  { "country": "欧洲", "date": 1989, "value": 1875 },
  { "country": "欧洲", "date": 1990, "value": 1853.3 },
  { "country": "欧洲", "date": 1991, "value": 1844.6 },
  { "country": "欧洲", "date": 1992, "value": 1814.1 },
  { "country": "欧洲", "date": 1993, "value": 1805.3 },
  { "country": "欧洲", "date": 1994, "value": 1791.3 },
  { "country": "欧洲", "date": 1995, "value": 1836.2 },
  { "country": "欧洲", "date": 1996, "value": 1896.1 },
  { "country": "欧洲", "date": 1997, "value": 1896.4 },
  { "country": "欧洲", "date": 1998, "value": 1918.8 },
  { "country": "欧洲", "date": 1999, "value": 1907.7 },
  { "country": "欧洲", "date": 2000, "value": 1932.1 },
  { "country": "欧洲", "date": 2001, "value": 1959.2 },
  { "country": "欧洲", "date": 2002, "value": 1954.8 },
  { "country": "欧洲", "date": 2003, "value": 1991.6 },
  { "country": "欧洲", "date": 2004, "value": 2025.4 },
  { "country": "欧洲", "date": 2005, "value": 2037.4 },
  { "country": "欧洲", "date": 2006, "value": 2056.4 },
  { "country": "欧洲", "date": 2007, "value": 2041.7 },
  { "country": "欧洲", "date": 2008, "value": 2038.5 },
  { "country": "欧洲", "date": 2009, "value": 1932.1 },
  { "country": "欧洲", "date": 2010, "value": 2001.1 },
  { "country": "欧洲", "date": 2011, "value": 1949.1 },
  { "country": "欧洲", "date": 2012, "value": 1944.3 },
  { "country": "欧洲", "date": 2013, "value": 1934 },
  { "country": "欧洲", "date": 2014, "value": 1871.2 },
  { "country": "欧洲", "date": 2015, "value": 1908.7 },
  { "country": "欧洲", "date": 2016, "value": 1934.6 },
  { "country": "欧洲", "date": 2017, "value": 1969.5 },
  { "country": "CIS 地区", "date": 1965, "value": 593.3 },
  { "country": "CIS 地区", "date": 1966, "value": 630.9 },
  { "country": "CIS 地区", "date": 1967, "value": 663.2 },
  { "country": "CIS 地区", "date": 1968, "value": 687.8 },
  { "country": "CIS 地区", "date": 1969, "value": 719 },
  { "country": "CIS 地区", "date": 1970, "value": 754.8 },
  { "country": "CIS 地区", "date": 1971, "value": 791.9 },
  { "country": "CIS 地区", "date": 1972, "value": 832.3 },
  { "country": "CIS 地区", "date": 1973, "value": 875.1 },
  { "country": "CIS 地区", "date": 1974, "value": 923.3 },
  { "country": "CIS 地区", "date": 1975, "value": 969 },
  { "country": "CIS 地区", "date": 1976, "value": 1006.5 },
  { "country": "CIS 地区", "date": 1977, "value": 1051.4 },
  { "country": "CIS 地区", "date": 1978, "value": 1094.2 },
  { "country": "CIS 地区", "date": 1979, "value": 1127.1 },
  { "country": "CIS 地区", "date": 1980, "value": 1150.1 },
  { "country": "CIS 地区", "date": 1981, "value": 1174.5 },
  { "country": "CIS 地区", "date": 1982, "value": 1204 },
  { "country": "CIS 地区", "date": 1983, "value": 1229 },
  { "country": "CIS 地区", "date": 1984, "value": 1274.6 },
  { "country": "CIS 地区", "date": 1985, "value": 1257 },
  { "country": "CIS 地区", "date": 1986, "value": 1282 },
  { "country": "CIS 地区", "date": 1987, "value": 1318 },
  { "country": "CIS 地区", "date": 1988, "value": 1341.5 },
  { "country": "CIS 地区", "date": 1989, "value": 1332.5 },
  { "country": "CIS 地区", "date": 1990, "value": 1350.3 },
  { "country": "CIS 地区", "date": 1991, "value": 1308.9 },
  { "country": "CIS 地区", "date": 1992, "value": 1233.1 },
  { "country": "CIS 地区", "date": 1993, "value": 1121 },
  { "country": "CIS 地区", "date": 1994, "value": 1012.2 },
  { "country": "CIS 地区", "date": 1995, "value": 951.2 },
  { "country": "CIS 地区", "date": 1996, "value": 920 },
  { "country": "CIS 地区", "date": 1997, "value": 878.4 },
  { "country": "CIS 地区", "date": 1998, "value": 871.7 },
  { "country": "CIS 地区", "date": 1999, "value": 881.3 },
  { "country": "CIS 地区", "date": 2000, "value": 888.5 },
  { "country": "CIS 地区", "date": 2001, "value": 905.5 },
  { "country": "CIS 地区", "date": 2002, "value": 904 },
  { "country": "CIS 地区", "date": 2003, "value": 924.3 },
  { "country": "CIS 地区", "date": 2004, "value": 938.7 },
  { "country": "CIS 地区", "date": 2005, "value": 942.3 },
  { "country": "CIS 地区", "date": 2006, "value": 978.6 },
  { "country": "CIS 地区", "date": 2007, "value": 989.8 },
  { "country": "CIS 地区", "date": 2008, "value": 998.1 },
  { "country": "CIS 地区", "date": 2009, "value": 926.8 },
  { "country": "CIS 地区", "date": 2010, "value": 967.8 },
  { "country": "CIS 地区", "date": 2011, "value": 1006 },
  { "country": "CIS 地区", "date": 2012, "value": 1014.1 },
  { "country": "CIS 地区", "date": 2013, "value": 989.2 },
  { "country": "CIS 地区", "date": 2014, "value": 987 },
  { "country": "CIS 地区", "date": 2015, "value": 960.7 },
  { "country": "CIS 地区", "date": 2016, "value": 972 },
  { "country": "CIS 地区", "date": 2017, "value": 978 },
  { "country": "中东", "date": 1965, "value": 48.3 },
  { "country": "中东", "date": 1966, "value": 50.4 },
  { "country": "中东", "date": 1967, "value": 52.7 },
  { "country": "中东", "date": 1968, "value": 55.6 },
  { "country": "中东", "date": 1969, "value": 58.5 },
  { "country": "中东", "date": 1970, "value": 61.5 },
  { "country": "中东", "date": 1971, "value": 64.9 },
  { "country": "中东", "date": 1972, "value": 70.6 },
  { "country": "中东", "date": 1973, "value": 77.4 },
  { "country": "中东", "date": 1974, "value": 82.3 },
  { "country": "中东", "date": 1975, "value": 82.1 },
  { "country": "中东", "date": 1976, "value": 93 },
  { "country": "中东", "date": 1977, "value": 105.7 },
  { "country": "中东", "date": 1978, "value": 111 },
  { "country": "中东", "date": 1979, "value": 130.5 },
  { "country": "中东", "date": 1980, "value": 126.5 },
  { "country": "中东", "date": 1981, "value": 137.9 },
  { "country": "中东", "date": 1982, "value": 152.8 },
  { "country": "中东", "date": 1983, "value": 167.1 },
  { "country": "中东", "date": 1984, "value": 188.9 },
  { "country": "中东", "date": 1985, "value": 200.8 },
  { "country": "中东", "date": 1986, "value": 209.8 },
  { "country": "中东", "date": 1987, "value": 224.5 },
  { "country": "中东", "date": 1988, "value": 238.5 },
  { "country": "中东", "date": 1989, "value": 251.5 },
  { "country": "中东", "date": 1990, "value": 260 },
  { "country": "中东", "date": 1991, "value": 271.7 },
  { "country": "中东", "date": 1992, "value": 296.4 },
  { "country": "中东", "date": 1993, "value": 304.7 },
  { "country": "中东", "date": 1994, "value": 340.3 },
  { "country": "中东", "date": 1995, "value": 352.4 },
  { "country": "中东", "date": 1996, "value": 363.9 },
  { "country": "中东", "date": 1997, "value": 381.3 },
  { "country": "中东", "date": 1998, "value": 387.7 },
  { "country": "中东", "date": 1999, "value": 395 },
  { "country": "中东", "date": 2000, "value": 414.9 },
  { "country": "中东", "date": 2001, "value": 435.6 },
  { "country": "中东", "date": 2002, "value": 459.4 },
  { "country": "中东", "date": 2003, "value": 479.3 },
  { "country": "中东", "date": 2004, "value": 517.1 },
  { "country": "中东", "date": 2005, "value": 553.7 },
  { "country": "中东", "date": 2006, "value": 582.6 },
  { "country": "中东", "date": 2007, "value": 618.2 },
  { "country": "中东", "date": 2008, "value": 657.1 },
  { "country": "中东", "date": 2009, "value": 677.2 },
  { "country": "中东", "date": 2010, "value": 714.3 },
  { "country": "中东", "date": 2011, "value": 740.9 },
  { "country": "中东", "date": 2012, "value": 771.1 },
  { "country": "中东", "date": 2013, "value": 795.3 },
  { "country": "中东", "date": 2014, "value": 823.1 },
  { "country": "中东", "date": 2015, "value": 848.3 },
  { "country": "中东", "date": 2016, "value": 869.7 },
  { "country": "中东", "date": 2017, "value": 897.2 },
  { "country": "非洲", "date": 1965, "value": 60.6 },
  { "country": "非洲", "date": 1966, "value": 63.3 },
  { "country": "非洲", "date": 1967, "value": 64 },
  { "country": "非洲", "date": 1968, "value": 67.4 },
  { "country": "非洲", "date": 1969, "value": 68.9 },
  { "country": "非洲", "date": 1970, "value": 74.7 },
  { "country": "非洲", "date": 1971, "value": 81.2 },
  { "country": "非洲", "date": 1972, "value": 86.3 },
  { "country": "非洲", "date": 1973, "value": 92.9 },
  { "country": "非洲", "date": 1974, "value": 97.6 },
  { "country": "非洲", "date": 1975, "value": 103.3 },
  { "country": "非洲", "date": 1976, "value": 112.4 },
  { "country": "非洲", "date": 1977, "value": 118.4 },
  { "country": "非洲", "date": 1978, "value": 123.1 },
  { "country": "非洲", "date": 1979, "value": 134.4 },
  { "country": "非洲", "date": 1980, "value": 144.8 },
  { "country": "非洲", "date": 1981, "value": 161.5 },
  { "country": "非洲", "date": 1982, "value": 172.7 },
  { "country": "非洲", "date": 1983, "value": 177.5 },
  { "country": "非洲", "date": 1984, "value": 183.7 },
  { "country": "非洲", "date": 1985, "value": 190.7 },
  { "country": "非洲", "date": 1986, "value": 195.1 },
  { "country": "非洲", "date": 1987, "value": 201.2 },
  { "country": "非洲", "date": 1988, "value": 215.7 },
  { "country": "非洲", "date": 1989, "value": 216.3 },
  { "country": "非洲", "date": 1990, "value": 223.3 },
  { "country": "非洲", "date": 1991, "value": 223 },
  { "country": "非洲", "date": 1992, "value": 226.3 },
  { "country": "非洲", "date": 1993, "value": 227.2 },
  { "country": "非洲", "date": 1994, "value": 233.9 },
  { "country": "非洲", "date": 1995, "value": 243.4 },
  { "country": "非洲", "date": 1996, "value": 250.1 },
  { "country": "非洲", "date": 1997, "value": 255.1 },
  { "country": "非洲", "date": 1998, "value": 259.1 },
  { "country": "非洲", "date": 1999, "value": 267.2 },
  { "country": "非洲", "date": 2000, "value": 273.4 },
  { "country": "非洲", "date": 2001, "value": 283.8 },
  { "country": "非洲", "date": 2002, "value": 287.1 },
  { "country": "非洲", "date": 2003, "value": 300.6 },
  { "country": "非洲", "date": 2004, "value": 323.2 },
  { "country": "非洲", "date": 2005, "value": 326.5 },
  { "country": "非洲", "date": 2006, "value": 332.8 },
  { "country": "非洲", "date": 2007, "value": 346.9 },
  { "country": "非洲", "date": 2008, "value": 368.7 },
  { "country": "非洲", "date": 2009, "value": 373.4 },
  { "country": "非洲", "date": 2010, "value": 386.9 },
  { "country": "非洲", "date": 2011, "value": 385.6 },
  { "country": "非洲", "date": 2012, "value": 399.8 },
  { "country": "非洲", "date": 2013, "value": 410.6 },
  { "country": "非洲", "date": 2014, "value": 425.1 },
  { "country": "非洲", "date": 2015, "value": 429.4 },
  { "country": "非洲", "date": 2016, "value": 438 },
  { "country": "非洲", "date": 2017, "value": 449.5 },
  { "country": "亚太地区", "date": 1965, "value": 441.6 },
  { "country": "亚太地区", "date": 1966, "value": 482.9 },
  { "country": "亚太地区", "date": 1967, "value": 506.1 },
  { "country": "亚太地区", "date": 1968, "value": 544.1 },
  { "country": "亚太地区", "date": 1969, "value": 619.8 },
  { "country": "亚太地区", "date": 1970, "value": 704.9 },
  { "country": "亚太地区", "date": 1971, "value": 771.4 },
  { "country": "亚太地区", "date": 1972, "value": 817.9 },
  { "country": "亚太地区", "date": 1973, "value": 885.1 },
  { "country": "亚太地区", "date": 1974, "value": 902.2 },
  { "country": "亚太地区", "date": 1975, "value": 936.1 },
  { "country": "亚太地区", "date": 1976, "value": 983.2 },
  { "country": "亚太地区", "date": 1977, "value": 1037.3 },
  { "country": "亚太地区", "date": 1978, "value": 1106.2 },
  { "country": "亚太地区", "date": 1979, "value": 1157.6 },
  { "country": "亚太地区", "date": 1980, "value": 1168 },
  { "country": "亚太地区", "date": 1981, "value": 1175 },
  { "country": "亚太地区", "date": 1982, "value": 1186.8 },
  { "country": "亚太地区", "date": 1983, "value": 1240.7 },
  { "country": "亚太地区", "date": 1984, "value": 1326.7 },
  { "country": "亚太地区", "date": 1985, "value": 1395.9 },
  { "country": "亚太地区", "date": 1986, "value": 1456.5 },
  { "country": "亚太地区", "date": 1987, "value": 1538 },
  { "country": "亚太地区", "date": 1988, "value": 1650.5 },
  { "country": "亚太地区", "date": 1989, "value": 1740.4 },
  { "country": "亚太地区", "date": 1990, "value": 1812.8 },
  { "country": "亚太地区", "date": 1991, "value": 1896.9 },
  { "country": "亚太地区", "date": 1992, "value": 1984.5 },
  { "country": "亚太地区", "date": 1993, "value": 2088.9 },
  { "country": "亚太地区", "date": 1994, "value": 2204.3 },
  { "country": "亚太地区", "date": 1995, "value": 2306.8 },
  { "country": "亚太地区", "date": 1996, "value": 2413.2 },
  { "country": "亚太地区", "date": 1997, "value": 2487 },
  { "country": "亚太地区", "date": 1998, "value": 2481 },
  { "country": "亚太地区", "date": 1999, "value": 2577.9 },
  { "country": "亚太地区", "date": 2000, "value": 2671.9 },
  { "country": "亚太地区", "date": 2001, "value": 2759.7 },
  { "country": "亚太地区", "date": 2002, "value": 2901.2 },
  { "country": "亚太地区", "date": 2003, "value": 3145.5 },
  { "country": "亚太地区", "date": 2004, "value": 3445.8 },
  { "country": "亚太地区", "date": 2005, "value": 3724.3 },
  { "country": "亚太地区", "date": 2006, "value": 3944 },
  { "country": "亚太地区", "date": 2007, "value": 4195.2 },
  { "country": "亚太地区", "date": 2008, "value": 4310.8 },
  { "country": "亚太地区", "date": 2009, "value": 4411.1 },
  { "country": "亚太地区", "date": 2010, "value": 4696.1 },
  { "country": "亚太地区", "date": 2011, "value": 4951.1 },
  { "country": "亚太地区", "date": 2012, "value": 5118.2 },
  { "country": "亚太地区", "date": 2013, "value": 5269.9 },
  { "country": "亚太地区", "date": 2014, "value": 5382.9 },
  { "country": "亚太地区", "date": 2015, "value": 5472.4 },
  { "country": "亚太地区", "date": 2016, "value": 5585.5 },
  { "country": "亚太地区", "date": 2017, "value": 5743.6 }
]

const data4 = [
  { type: '分类一', values: [76, 100] },
  { type: '分类二', values: [56, 108] },
  { type: '分类三', values: [38, 129] },
  { type: '分类四', values: [58, 155] },
  { type: '分类五', values: [45, 120] },
  { type: '分类六', values: [23, 99] },
  { type: '分类七', values: [18, 56] },
  { type: '分类八', values: [18, 34] },
];

const data5 = [
  {
    item: 'Design',
    user: 'a',
    score: 70,
  },
  {
    item: 'Design',
    user: 'b',
    score: 30,
  },
  {
    item: 'Development',
    user: 'a',
    score: 60,
  },
  {
    item: 'Development',
    user: 'b',
    score: 70,
  },
  {
    item: 'Marketing',
    user: 'a',
    score: 60,
  },
  {
    item: 'Marketing',
    user: 'b',
    score: 50,
  },
  {
    item: 'Users',
    user: 'a',
    score: 40,
  },
  {
    item: 'Users',
    user: 'b',
    score: 50,
  },
  {
    item: 'Test',
    user: 'a',
    score: 60,
  },
  {
    item: 'Test',
    user: 'b',
    score: 70,
  },
  {
    item: 'Language',
    user: 'a',
    score: 70,
  },
  {
    item: 'Language',
    user: 'b',
    score: 50,
  },
  {
    item: 'Technology',
    user: 'a',
    score: 50,
  },
  {
    item: 'Technology',
    user: 'b',
    score: 40,
  },
  {
    item: 'Support',
    user: 'a',
    score: 30,
  },
  {
    item: 'Support',
    user: 'b',
    score: 40,
  },
  {
    item: 'Sales',
    user: 'a',
    score: 60,
  },
  {
    item: 'Sales',
    user: 'b',
    score: 40,
  },
  {
    item: 'UX',
    user: 'a',
    score: 50,
  },
  {
    item: 'UX',
    user: 'b',
    score: 60,
  },
];
  return (
    <div>
      <RadarChart
      data={data5}
      title={{
        visible: true,
        text: '',
      }}
      angleField='item'
      radiusField='score'
      seriesField='user'
      radiusAxis={{
        grid: {
          line: {
            type: 'line',
          },
        },
      }}
      line={{
        visible: true,
      }}
      point={{
        visible: true,
        shape: 'circle',
      }}
      legend={{
        visible: true,
        position: 'bottom-center',
      }}
    />
   <Chart
      scale={{ temperature: { min: 0 } }}
      padding={[10, 20, 50, 40]}
      autoFit
      height={320}
      data={data}
    >
      <LineAdvance
        point={{ size: 3 }}
        shape="smooth"
        position="month*temperature"
        color="city"
      />
    </Chart>
    <WaterfallChart
      data={data2}
      title={{
        visible: true,
        text: '每月收支情况（瀑布图）',
      }}
      forceFit
      padding="auto"
      xField='type'
      yField='money'
      meta={{
        type: {
          alias: '类别',
        },
        money: {
          alias: '金额',
        },
      }}
    />
    <StackedAreaChart
      data={data3}
      title={{
        visible: true,
        text: '堆叠面积图',
      }}
      xField='date'
      yField='value'
      stackField='country'
      color={['#6897a7', '#8bc0d6', '#60d7a7', '#dedede', '#fedca9', '#fab36f', '#d96d6f']}
      xAxis={{
        type: 'dateTime',
        tickCount: 5,
      }}
      legend={{
        visible: true,
        position: 'right-top',
      }}
      responsive
    />
    <RangeColumnChart
      data={data4}
      title={{
        visible: true,
        text: '区间柱状图',
      }}
      xField='type'
      yField='values'
      color='l(90) 0:#3e5bdb 1:#b4d9e4'
      columnStyle={{
        fillOpacity: 0.8,
      }}
      label={{
        visible: true,
        topStyle: {
          fill: '#3e5bdb',
        },
        bottomStyle: {
          fill: '#b4d9e4',
        },
      }}
    />
    </div>
    
  )
}

export default G201