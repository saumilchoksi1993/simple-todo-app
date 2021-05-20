import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("@/components/Pages/Home/index.vue")
        },
        {
            path: "/todos_list",
            name: "Todos List",
            component: () => import("@/components/Pages/TodosList/index.vue")
        },
        {
            path: "/add_task",
            name: "Add Task",
            props: route => ({
                taskAction: (route.params.taskAction) ? route.params.taskAction : ''
            }),
            component: () => import("@/components/Pages/TodosList/manageTask/manageTask.vue")
        },
        {
            path: "/edit_task",
            name: "Edit Task",
            props: route => ({
                taskAction: (route.params.taskAction) ? route.params.taskAction : '',
                taskId: (route.params.taskId) ? route.params.taskId : ''
            }),
            component: () => import("@/components/Pages/TodosList/manageTask/manageTask.vue")
        }
    ]
});

export default router;
