import instance from "./config";

export const getAllByID = (id) => {
    const url = `/categoryPosts/${id}?_embed=posts`;
    return instance.get(url);
}
export const getAllCatePost = () => {
    const url = `/categoryPosts`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/categoryPosts/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/categoryPosts`;
    return instance.post(url, post)
}
export const remove = (id) => {
    const url = `/categoryPosts/${id}`;
    return instance.delete(url)
}
export const update = (post) => {
    const url = `/categoryPosts/${post.id}`;
    return instance.put(url, post)
}