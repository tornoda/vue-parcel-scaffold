export const getOnlineTodo = (num) => {
    return fetch('https://jsonplaceholder.typicode.com/todos/' + num)
        .then(response => {
                return Promise.resolve(response.json())
            }
        )
};
