import AssignmentList from './AssignmentList.js';

export default {
    components: { AssignmentList },
    template: `
        <section class="space-y-4">
            <AssignmentList :assignments="filters.inProgress" sectionTitle="In progress"></AssignmentList>
            <AssignmentList :assignments="filters.completed" sectionTitle="Completed"></AssignmentList>
            
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" placeholder="New assignmetn..." class="p-2">
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </section>
    `,
    data() {
        return {
            assignments: [
                { name: 'Fishish-project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in Homework', complete: false, id: 3 }
            ],
            newAssignment : ''
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
        add() {
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            })
            this.newAssignment = '';
        }
    }

}