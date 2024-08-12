export default {
    template: `
        <form @submit.prevent="add" class="flex">
            <div class="border border-gray-600 text-black flex w-full">
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2 min-w-0"/>
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment : ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment)
            this.newAssignment = '';
        }
    }
}