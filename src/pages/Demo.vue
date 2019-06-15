<template>
    <div>
        <hello-world></hello-world>
        <img src="http://www.baiu.com/img" alt="img" />
    </div>
</template>

<script>
import HelloWorld from '../components/Helloworld';

export default {
    name: 'demo',

    components: {
        HelloWorld
    },
    created() {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject({
                    path: __dirname
                });
            }, 1000);
        }).catch(err => {
            /**
             * 用于错误演示
             */
            return Promise.reject(err);
        });
    },
    mounted() {
        setTimeout(() => {
            console.log(e);
        }, 2000);
    }
};
</script>
