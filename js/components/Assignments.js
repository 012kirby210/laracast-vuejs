import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="space-y-4">
            <AssignmentList :assignments="filters.inProgress" sectionTitle="In progress"></AssignmentList>
            <AssignmentList :assignments="filters.completed" sectionTitle="Completed"></AssignmentList>
            <AssignmentCreate @add="add"></AssignmentCreate>
            
        </section>
    `,
    created() {
      fetch('http://localhost:3000/assignments')
          .then(response => response.json())
          .then(data => this.assignments = data);
    },
    data() {
        return {
            assignments: [

            ],
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