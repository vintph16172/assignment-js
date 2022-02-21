import instance from "./config";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
}
export const getAllbyPage = (page,limit) => {
    const url = `/products/?_page=${page}&_limit=${limit}`;
    return instance.get(url);
}
export const getAllWithCate = () => {
    const url = `/products/?_expand=categoryProduct`;
    return instance.get(url);
}
export const getAllByPrice = (min,max) => {
    const url = `/products/?price_gte=${min}&price_lte=${max}&_expand=categoryProduct`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/products/${id}?_expand=categoryProduct`;
    return instance.get(url);
}

export const add = (post) => {
    const url = `/products`;
    return instance.post(url, post)
}
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}
export const update = (post) => {
    const url = `/products/${post.id}`;
    return instance.put(url, post)
}