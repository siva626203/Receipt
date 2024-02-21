const config = {
  CONTRACT_ABI: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "storeId",
          type: "string",
        },
        {
          internalType: "string",
          name: "date",
          type: "string",
        },
      ],
      name: "createReceipt",
      outputs: [],
      stateMutability: "pure",
      type: "function",
    },
    {
      inputs: [],
      name: "minter",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  CONTRACT_ADDRESS: "0xC1d207300749e3907Aa33CE1E36bd0E0BAdd05Df",
};

export default config;
