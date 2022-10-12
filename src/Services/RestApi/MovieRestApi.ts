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
}