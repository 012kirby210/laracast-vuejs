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
    data() {
        return {
            assignments: [
                { name: 'Fishish-project', complete: false, id: 1, tag: 'math' },
                { name: 'Read chapter 4', complete: false, id: 2, tag: 'science' },
                { name: 'Turn in Homework', complete: false, id: 3, tag: 'math' }
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