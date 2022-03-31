import { AxiosPromise } from "axios";
import { coreAPI } from "../api";
import { APIResponse } from "../types/apiResponse";
import { GetMediaResponse, Media, MediaParams } from "../types/entities/media";

export const getMediaList = (
  params?: string
): AxiosPromise<APIResponse<GetMediaResponse>> => {
  return coreAPI.get(`/media${params}`);
};

export const createMedia = (
  params: MediaParams
): AxiosPromise<APIResponse<null>> => {
  return coreAPI.post("/media", params);
};

export const getMediaById = (id: number): AxiosPromise<APIResponse<Media>> => {
  return coreAPI.get(`/media/${id}`);
};

export const deleteMedia = (id: number): AxiosPromise<APIResponse<null>> => {
  return coreAPI.delete(`/media/${id}`);
};
