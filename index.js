import { request, gql } from 'graphql-request'

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
    console.log(data)
})).catch((e)=>{console.log(e)})