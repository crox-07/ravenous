const APIkey = import.meta.env.VITE_YELP_API_KEY
const baseURL = 'https://api.yelp.com/v3';

const getBusiness = async (searchTerms, location, sort_by) => {
    const businessEndpoint = '/businesses/search';
    const queryStr = `?term=${searchTerms}&location=${location}&sort_by=${sort_by}`;
    const fetchURL = baseURL + businessEndpoint + queryStr;
    try {
        const response = await fetch(fetchURL, {
            headers: {
                Authorization: `Bearer ${APIkey}`,
                accept: "application/json"
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.businesses
        } else {
            console.log("Response error:", response.status, response.statusText);
        }
    } catch(error) {console.log(error)}
}

export default getBusiness