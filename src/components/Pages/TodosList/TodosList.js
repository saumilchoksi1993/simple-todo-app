import { mapActions, mapState } from "vuex";

export default {
	props: {},
	components: {},
    data() {
        return {
            taskListItems: [],
            headers: [
              { text: "No", align: "left", sortable: true, value: "id", divider: true },
              { text: "Name", align: "left", sortable: true, value: "name", divider: true },
              { text: "Description", value: "description", divider: true },
              { text: 'Action', value: 'actions', width:100, sortable: false, divider: true }
            ],
            actionItem: ['Delete selected'],
            actionType: '',
            selectedTask: []
        };
    },
    created() {
        // Get the items from veuex store.
        this.taskListItems = this.taskList
    },
    computed: {
        ...mapState("task", ["taskList"])
    },
    methods: {
        ...mapActions("task", ["setTaskListData"]),
        addTodo() {
            // Redirect to add task page.
            this.$router.push({
                name: "Add Task",
                params: {
                    taskAction: "Add",
                }
            });
        },
        editTodo(task_id) {
            // Redirect to edit task page along with task ID.
            this.$router.push({
                name: "Edit Task",
                params: {
                    taskAction: "Edit",
                    taskId: task_id
                }
            });
        },
        deleteTodo(task_id) {
            var ok = confirm("Are you sure you want to delete item ?");
            if (ok == true) {
                let items = this.taskList.filter(function(item) { 
                    return item.id !== task_id; 
                });
                this.setTaskListData(items);
                this.taskListItems = items
            }
        },
        submitAction() {
            if(this.selectedTask.length > 0) {
                let ok = confirm("Are you sure you want to delete selected records ?")
                if(ok == true) {
                    let selectedIds = []
                    for (var i = 0; i < this.selectedTask.length; i++) {
                        selectedIds.push(this.selectedTask[i].id)
                    }
                    if(selectedIds.length > 0) {
                        // Remove selected item from list.
                        let afterRemovedata = this.taskList.filter(item => !selectedIds.includes(item.id));
                        this.setTaskListData(afterRemovedata);
                        this.taskListItems = afterRemovedata
                    }
                    this.selectedTask = []
                    this.actionType = ''
                }
            } else {
                alert("Please select any item for delete !")
            }
        }
    }
}