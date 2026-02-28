import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TmdbService {
    constructor(
        private http: HttpService,
        private config: ConfigService,
    ) 
    {}

    private get apiKey() {
        return this.config.get<string>('TMDB_API_KEY');
    }

    private get baseUrl() {
        return this.config.get<string>('TMDB_BASE_URL');
    }

    async getPopularMovies() {
        const response = await fetch(
            `${this.baseUrl}/movie/popular`,
            {
            headers: {
                Authorization: `Bearer ${this.apiKey}`,
            },
            },
        );

        if (!response.ok) {
            throw new Error(`TMDB error: ${response.status}`);
        }

        return response.json();
    }
}
