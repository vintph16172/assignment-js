import instance from "./config";

export const getAll2 = () => {
    const url = `/categoryProducts`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/categoryProducts/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/categoryProducts`;
    return instance.post(url, post)
}
export const remove = (id) => {
    const url = `/categoryProducts/${id}`;
    return instance.delete(url)
}
export const update = (post) => {
    const url = `/categoryProducts/${post.id}`;
    return instance.put(url, post)
}