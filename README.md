# Park Chain

## Welcome to the wonderful world of parking and blockchain

Simple script for creating a parking pass and incorporating it into blockchain.

-   Make a barcode
-   Barcode will be a hashed string
-   Hashed string contains the following
    -   Generated pseudo random 12-16 character alphanumeric string
    -   timestamp
    -   Company name
    -   Previous Hash value
-   The hashed string will then be appended to a blockchain

My approach follows the typical "Basic" blockchain implementation. All data is added into the block, then a hash is created of the data, which is then also added into the block. This block is then added into the chain

This Block will have the structure

-   randString: 12-16 length alphanumeric string
-   timestamp: Epoch timestamp
-   company: company that created the parking pass
-   previousHash: The previous hash in the chain
-   hash: hash of all above data
