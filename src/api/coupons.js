import instance from "./config";

export const getAll = () => {
    const url = `/coupons`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/coupons/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/coupons`;
    return instance.post(url, post)
}
export const remove = (id) => {
    const url = `/coupons/${id}`;
    return instance.delete(url)
}
export const update = (post) => {
    const url = `/coupons/${post.id}`;
    return instance.put(url, post)
}