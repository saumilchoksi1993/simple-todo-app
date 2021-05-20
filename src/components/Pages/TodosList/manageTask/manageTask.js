import { mapActions, mapState } from "vuex";

export default {
	props: {
        taskAction: String,
        taskId: Number
    },
	components: {},
    data() {
        return {
            taskName: '',
            taskDescription: ''
        };
    },
    created() {
        // In edit mode taskId available.
        if(this.taskId) {
            var result = this.taskList.filter(obj => {
              return obj.id == this.taskId
            })
            if(result) {
                this.taskName = result[0].name
                this.taskDescription = result[0].description
            }
        } else {
            // When user manual refresh on edit page that will be redirect on listing page.
            if(this.taskAction == 'edit') {
                this.$router.push({path: "todos_list"});
            }
        }
    },
    computed: {
        ...mapState("task", ["taskList"])
    },
    methods: {
        ...mapActions("task", ["setTaskListData"]),
        addTask() {
            // Validate form.
            if (this.$refs.addTaskForm.validate()) {
                if(this.taskId) {
                    //Find index of specific object using findIndex method.
                    let objIndex = this.taskList.findIndex((obj => obj.id == this.taskId));
                    this.taskList[objIndex].name = this.taskName
                    this.taskList[objIndex].description = this.taskDescription
                } else {
                    let lastTaskId = 1
                    if(this.taskList.length > 0) {
                        let lastElement = this.taskList[this.taskList.length - 1];
                        lastTaskId = lastElement.id + 1
                    }
                    // Prepare new task data
                    let taskData = {}
                    taskData.id = lastTaskId
                    taskData.name = this.taskName
                    taskData.description = this.taskDescription
                    // Get all tasks first.
                    this.taskList.push(taskData)
                }
                // Update item list in vuex store.
                this.setTaskListData(this.taskList);
                this.$router.push({path: "todos_list"});
            }    
        }
    }
}