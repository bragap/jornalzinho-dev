import '@/envConfig'
import { NewsResponse } from './constants';

export async function getNews(): Promise<NewsResponse>{
    const data = await fetch(process.env.GNEWS_URL + 'search?q=tecnologia&lang=pt&country=br&max=120&apikey=' + process.env.APIKEY);
    return data.json();
}

