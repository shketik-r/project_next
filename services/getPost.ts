export const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Ошибка получение поста");
    return response.json();
}

export const getPostsBySearch = async (search: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`);
    if (!response.ok) throw new Error("Ошибка поиска");
    return response.json();
}