import AssignmentList from './AssignmentList.js';

export default {
    components: { AssignmentList },
    template: `
        <section class="space-y-4">
            <AssignmentList :assignments="filters.inProgress" sectionTitle="In progress"></AssignmentList>
            <AssignmentList :assignments="filters.completed" sectionTitle="Completed"></AssignmentList>
        </section>
    `,
    data() {
        return {
            assignements: [
                { name: 'Fishish-project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in Homework', complete: false, id: 3 }
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignements.filter( a => !a.complete),
                completed: this.assignements.filter( a => a.complete)
            }
        }
    }
}