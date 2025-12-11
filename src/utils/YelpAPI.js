const APIkey = 'nHgsjV_O_RpN5s1zh7Ll47WLOxaCyLNtg0jyht9_IE27X5NGdfQPRoBRnUmL5kX8HrwTrpOH0psVX53qwRmIqiS2-kqsJOfHbursKGT_lrKVY42O8rMETCqg0bI6aXYx';
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