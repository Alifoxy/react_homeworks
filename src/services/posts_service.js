import {UsersAPIService} from "./users_api_service";
import {urls} from "../constants/urls";

export const PostsService = {
    getAll: () => UsersAPIService.get(urls.posts)
}