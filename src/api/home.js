import network from "../service/network";

export const getOnlineTodo = num => {
    return network.get("todos/" + num, {
        test: "test",
        id: {
            name: "loo",
            sexy: "male"
        }
    }).catch(err => {
        console.log('局部单独处理错误', err)
    });
};
