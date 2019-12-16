//引入路由组件
import Topic from '../pages/Topic/Topic.vue'
import People from '../pages/People/People.vue'
import People2 from '../pages/People2/People.vue'
import People3 from '../pages/People3/People.vue'

//暴露
export default[
    {
        path:'/topic',
        component:Topic,
        children:[
            {
                path:'/topic/people',
                component: People
            },
            {
                path:'/topic/people2',
                component: People2
            },
            {
                path:'/topic/people3',
                component: People3
            },

            {
                path:'/topic',
                // component: Topic,
                redirect: '/topic/people'
            },
        ]
    },
    {
        //重定向到我想要打开浏览器跳转的界面
        path:'/',
        // component: Topic,
        redirect: '/topic'
    }
    
]
