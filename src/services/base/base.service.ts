import Axios, { AxiosResponse } from 'axios';
import settings from '@/core/app-settings';
import Vue from 'vue';

export default class BaseService<T> extends Vue {
  public apiUrl: string;
  constructor(controller: string) {
    super();
     this.apiUrl = settings.API_URL + 'api/' + controller + '/';
  }

  public async getAll(): Promise<AxiosResponse<T>> {
    return Axios.get(`${this.apiUrl}`);
  }

  public async getById(id: string | number): Promise<AxiosResponse<T>> {
    return Axios.get(this.apiUrl + id);
  }

  public async delete(id: string | number): Promise<AxiosResponse<T>> {
    return Axios.delete(this.apiUrl + id);
  }

  public async post(data: T): Promise<AxiosResponse<T>> {
    return Axios.post(this.apiUrl, data);
  }

  public async put(id: string | number, data: T): Promise<AxiosResponse<T>> {
    return Axios.put(this.apiUrl + id, data);
  }
}