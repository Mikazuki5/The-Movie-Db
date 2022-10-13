import EnvironmentService from "../EnvironmentService";
import { HttpRequestService } from "../HttpService/HttpRequestService";

export class MovieRestApiServices {
  httpRequest = new HttpRequestService(
    String(EnvironmentService.API.API_MAIN + '3/')
  )

  trending(queryParams:any){
    return this.httpRequest.get(`/trending/${queryParams.mediaType}/${queryParams.timeWindow}`)
  }

  topRatedTv(queryParams: any){
    return this.httpRequest.get(`/tv/top_rated?${queryParams}`)
  }
    
  topRatedMovie(queryParams: any){
    return this.httpRequest.get(`/movie/top_rated?${queryParams}`)
  }

  nowPlaying(queryParams:any){
    return this.httpRequest.get(`/movie/now_playing?${queryParams}`)
  }

  upcomingMovie(queryParams:any){
    return this.httpRequest.get(`/movie/upcoming?${queryParams}`)
  }

  popularMovie(queryParams:any){
    return this.httpRequest.get(`/movie/popular?${queryParams}`)
  }
}