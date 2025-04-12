import '@/envConfig'
import { NewsResponse } from './constants';

async function fetchFromGNews(endpoint: string, params: Record<string, string>): Promise<NewsResponse>{

    const baseUrl = process.env.GNEWS_URL ?? '';
    const apiKey = process.env.API_KEY ?? '';

    const query = new URLSearchParams({...params, apikey: apiKey});
    const url = `${baseUrl}${endpoint}?${query.toString()}`;

    const response = await fetch(url);

    if(!response.ok) throw new Error(`Erro ao buscar dados da Gnews: ${response.statusText}`);

    return response.json();

}

export async function getNewsByTopic(topic: string) : Promise<NewsResponse> {
    return fetchFromGNews('search', {
        q: topic,
        lang:'pt',
        country: 'br',
        max: '10',
    })
}

export async function getHeadlineNews(): Promise <NewsResponse> {
    return fetchFromGNews('top-headlines', {
        q:'general',
        lang:'pt',
        country: 'br',
        max: '10'
    })
}