const hubspot = require('@hubspot/api-client');

exports.main = async (event) => {
  
  const token = process.env.OPS_TOKEN

  const hubspotClient = new hubspot.Client({"accessToken":token});

  const companyId = event.inputFields['hs_object_id'];

  try {
    const apiResponse = await hubspotClient.crm.companies.basicApi.archive(companyId);
    console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e) {
    e.message === 'HTTP request failed'
      ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e)
  }
}
