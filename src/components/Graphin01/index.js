import React from 'react';
import ReactDOM from 'react-dom';
import Graphin, { Utils } from '@antv/graphin';
import '@antv/graphin/dist/index.css'; // 引入Graphin CSS

import './index.css'

const data = Utils.mock(10).circle().graphin();

const data2 = Utils.mock(10).random().graphin();

function Graphin01(){
  return (
    <>
    <div className="border">
      <Graphin data={data} />
    </div>
    <div>
      <Graphin data={data2} layout={{ name: 'force' }} />
    </div>
    </>
    
  )
}

export default Graphin01