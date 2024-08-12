import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="gap-8 flex flex-row items-start">
            <AssignmentList :assignments="filters.inProgress" sectionTitle="In progress">
                <AssignmentCreate @add="add"></AssignmentCreate>
            </AssignmentList>
            <AssignmentList 
                v-show="showCompleted"
                :assignments="filters.completed" 
                sectionTitle="Completed"
                can-toggle
                @toggle="showCompleted = !showCompleted"   
            ></AssignmentList>
        </section>
    `,
    created() {
      fetch('http://localhost:3000/assignments')
          .then(response => response.json())
          .then(data => this.assignments = data);
    },
    data() {
        return {
            assignments: [],
            showCompleted: true,
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter( a => !a.complete),
                completed: this.assignments.filter( a => a.complete)
            }
        }
    },

    methods: {
        add(name){
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            })
        }
    }


}