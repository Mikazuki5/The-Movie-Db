import EnvironmentService from "../EnvironmentService";
import { HttpRequestService } from "../HttpService/HttpRequestService";

export class MovieRestApiServices {
  httpRequest = new HttpRequestService(
    String(EnvironmentService.API.API_MAIN + '3/')
  )

  now_playing(params:any){
    return this.httpRequest.get(`/movie/now_playing?${params}`)
  }

  topRatedMovie(queryParams: any){
    return this.httpRequest.get(`/movie/top_rated?${queryParams}`)
  }
  
  topRatedTv(queryParams: any){
    return this.httpRequest.get(`/tv/top_rated?${queryParams}`)
  }

  trending(queryParams:any){
    return this.httpRequest.get(`/trending/${queryParams.mediaType}/${queryParams.timeWindow}`)
  }

  nowPlaying(queryParams:any){
    return this.httpRequest.get(`/movie/now_playing?${queryParams}`)
  }

  upcomingMovie(queryParams:any){
    return this.httpRequest.get(`/movie/upcoming?${queryParams}`)
  }
}