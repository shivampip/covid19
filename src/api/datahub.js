import axios from 'axios';

export default axios.create({
	baseURL: 'https://pkgstore.datahub.io/core/covid-19/'
});

// worldwide-aggregated
// https://pkgstore.datahub.io/core/covid-19/worldwide-aggregated_json/data/017c259c1d8ed879992e09f43faeefa5/worldwide-aggregated_json.json

// countrywise
// https://pkgstore.datahub.io/core/covid-19/countries-aggregated_json/data/14fece7bbf912fcd8e0fbe6ba2af9873/countries-aggregated_json.json
