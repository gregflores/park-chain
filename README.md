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

## Blockchain

My approach follows the typical "Basic" blockchain implementation. All data is added into the block, then a hash is created of the data, which is then also added into the block. This block is then added into the chain

This Block will have the structure

-   randString: 12-16 length alphanumeric string
-   timestamp: Epoch timestamp
-   company: company that created the parking pass
-   previousHash: The previous hash in the chain
-   hash: hash of all above data

## Alphanumeric String

The random alphanumeric string can be created in one of two ways

-   There is an option to use the Math.random() method built into javascript
    -   This is not seedable so results are not reproduceable
-   The other option is to use a seeded random method created by davidbau

With either option, the randNumBetween and randString functions operate the same way.
For a random number, you pass the parameters of min and max, which are parameters for limiting the random number to fall between those numbers inclusive.
For a random string, you have the parameters len and chars. len is the length of the string you want to create. chars is a parameter that determins what types of characters you want to use.
chars param should be string made up of the following options

-   a - lowercase letters
-   A - uppercase letters
-   \# - numbers

With these you can limit the type of characters to use in the string.
Possible combinations

-   'aA' - only letters upper and lowercase
-   '#' - only numbers
-   '#A' - only numbers and uppercase letters
-   '#aA' - all three options available

The main issue I see with this implementation (other than some type checking) is that there is not an equal chance of each type of character. 26 upper, 26 lower, and 10 numbers. The numbers have about 1/3 the chance to be chosen as either of the letter types. One solution would be to make the masks for each character type be 130 characters long to match lengths for all types.

To then make the 12-16 character length string, the function alphaNumString12_16 is made so that a random string is created with a length given by random number between 12 and 16 inclusive.
