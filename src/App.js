import logo from './logo.svg';
import './App.css';
import React from 'react';
import JSONViewer from 'react-json-viewer';
// import JsonEdit from 'react-jsoneditor'

// import "Re"
import { request, gql } from 'graphql-request'

function App() {
  const [data,setData] = React.useState({})
  const query = gql`
    {
      ThetaRpc {
        GetStatus {
          current_height
          address
          chain_id
          latest_finalized_block_hash
          latest_finalized_block_height
        }
      }
    }
  `

  request('https://thetadata.io/graphql/', query).then((data=>{
    setData(data)
  })).catch((e)=>{console.log(e)})

  // function changeVal(val){
  //   console.log(val,"-----changeVal------")
  // }

  return (
    <div className="App">
      <b>Get Json:</b>
      <JSONViewer
          json={{data}}
      />
      {/*<JsonEdit json={{data}} changeVal={changeVal} />*/}
    </div>
  );
}

export default App;