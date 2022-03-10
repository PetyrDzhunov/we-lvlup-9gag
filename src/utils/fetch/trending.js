import request from './fetch.js';
import { giphyAPIkey } from '../../constants.js';


export default async function getFiftyGiphies() {
	try {
		let fiftyGiphies = await request(`https://api.giphy.com/v1/gifs/trending?api_key=${giphyAPIkey}`);
		return fiftyGiphies.data;
	} catch (err) {
		return err;
	}
};

