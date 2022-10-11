import axios from "axios";
import { AxiosService } from "./AxiosService";

export class HttpRequestService extends AxiosService {
  constructor(baseUrl: string) {
    super(axios.create());
    // this.axios.defaults.headers = {
    //   'api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.d3d3LmNsb2Rlby5jb20.Srk7ApgaFCfZrv7VqdxPJcSFm_lpgIgFy3CHdML_88A',
    // };
    this.axios.defaults.params = {}
    this.axios.defaults.params['api_key'] = '9e8e28c04e24f098755d086298a68766'

    this.axios.defaults.baseURL = baseUrl;
  }
}