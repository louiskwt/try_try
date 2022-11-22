exports.handler = async (event) => {
  console.log(event);
  const customerId = event.pathParameters.customerId; // customers/id
  const customer = {
    customerId: customerId,
    customerName: "Customer" + customerId,
  };
  const response = {
    statusCode: 200,
    // Uncomment the following to enable CORS requests
    headers: {
      "Access-control-Allow-Origin": "*",
      "Access-control-Allow-Headers": "*",
    },
    body: JSON.stringify(customer),
  };
  return response;
};
