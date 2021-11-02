import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactJson from 'react-json-view'
import { request, gql } from 'graphql-request'

function App() {
  const [data,setData] = React.useState({})
  const query = gql`
    {
      ThetaRpc {
        GetStatus {
          current_height
          address
          genesis_block_hash
        }
      }
      StakeStatistics {
        theta_stake_ratio
        total_validator_node_number
      }
      SmartContractStatistics {
        call_rank(rank_by: last_24h_call_times) {
          last_24h_call_times
          contract_address
        }
      }
    }
  `

  React.useEffect(()=>{
    request('https://thetadata.io/graphql/', query).then((data=>{
    setData(data)
      console.log('data', data)
  })).catch((e)=>{console.log(e)})},[])

  return (
    <div className="App">
      <h1>Data From Server:</h1>
      <ReactJson name={false} src={{data}} theme={'monokai'} iconStyle={'square'} />
    </div>
  );
}

export default App;
