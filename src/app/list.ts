export interface UserLogin {
    email:string,
    password:string
  }
  export interface UserSignup {
    email:string,
    password:string,
    name:string
  }

  export interface AuthUser {
    id:number,
    email:string,
    name:string
  }

  export interface AuthResponse {
    accessToken:string,
    user: AuthUser
  }

  export interface Card {
      adult: boolean,
      backdrop_path: string,
      genre_ids: Array<number>,
      id: number,
      original_language: string,
      original_title: string,
      overview: string,
      popularity: number,
      poster_path: string,
      release_date: string,
      title: string,
      video: boolean,
      vote_average: number,
      vote_count: number
  }
