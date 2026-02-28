// ==================== Movie Types ====================

export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  genreIds: number[];
}

export interface MovieDetails extends Movie {
  runtime: number;
  genres: Genre[];
  tagline: string;
  status: string;
  budget: number;
  revenue: number;
  imdbId?: string;
  originalLanguage: string;
  popularity: number;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  spokenLanguages: SpokenLanguage[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logoPath: string | null;
  originCountry: string;
}

export interface ProductionCountry {
  iso3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  englishName: string;
  iso639_1: string;
  name: string;
}

// ==================== API Response Types ====================

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  totalPages: number;
  totalResults: number;
}

export interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  timestamp: string;
}

// ==================== User Movie Tracking ====================

export type WatchlistStatus = 'watchlist' | 'watched' | 'favorite';

export interface UserMovie {
  movieId: number;
  userId: string;
  status: WatchlistStatus;
  rating?: number;
  review?: string;
  tags?: string[];
  watchedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserMovieDto {
  movieId: number;
  status: WatchlistStatus;
  rating?: number;
  review?: string;
  tags?: string[];
}

export interface UpdateUserMovieDto {
  status?: WatchlistStatus;
  rating?: number;
  review?: string;
  tags?: string[];
}

// ==================== Review Types ====================

export interface Review {
  id: string;
  movieId: number;
  userId: string;
  userName: string;
  rating: number;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateReviewDto {
  movieId: number;
  rating: number;
  content: string;
}

// ==================== List Types ====================

export interface MovieList {
  id: string;
  userId: string;
  name: string;
  description?: string;
  isPublic: boolean;
  movieIds: number[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateListDto {
  name: string;
  description?: string;
  isPublic?: boolean;
}

// ==================== Search Types ====================

export interface SearchFilters {
  year?: number;
  genre?: number[];
  rating?: number;
  language?: string;
  sortBy?: 'popularity' | 'rating' | 'releaseDate' | 'title';
  sortOrder?: 'asc' | 'desc';
}

export interface SearchParams {
  query?: string;
  page?: number;
  filters?: SearchFilters;
}

// ==================== User Types ====================

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  darkMode?: boolean;
  language?: string;
  notifications?: NotificationPreferences;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  weeklyDigest: boolean;
}

// ==================== Error Types ====================

export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
  timestamp: string;
  path?: string;
}

// ==================== Enums ====================

export enum MovieStatus {
  RUMORED = 'Rumored',
  PLANNED = 'Planned',
  IN_PRODUCTION = 'In Production',
  POST_PRODUCTION = 'Post Production',
  RELEASED = 'Released',
  CANCELLED = 'Cancelled',
}

export enum SortOption {
  POPULARITY_DESC = 'popularity.desc',
  POPULARITY_ASC = 'popularity.asc',
  RATING_DESC = 'vote_average.desc',
  RATING_ASC = 'vote_average.asc',
  RELEASE_DATE_DESC = 'release_date.desc',
  RELEASE_DATE_ASC = 'release_date.asc',
  TITLE_ASC = 'title.asc',
  TITLE_DESC = 'title.desc',
}

// ==================== Constants ====================

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;
export const MIN_SEARCH_LENGTH = 3;

// ==================== Type Guards ====================

export function isMovie(value: any): value is Movie {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.id === 'number' &&
    typeof value.title === 'string' &&
    typeof value.overview === 'string'
  );
}

export function isApiError(value: any): value is ApiError {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.statusCode === 'number' &&
    typeof value.message === 'string'
  );
}