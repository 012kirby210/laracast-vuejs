export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                {{assignment.name}}
                <input type="checkbox" v-model="assignment.complete" class="ml-3"/>
            </label>
        </li>
    
    `,
    props: {
        assignment: {
            type: Object,
            default: {
                name: 'nom assignment',
                complete: false,
            }
        }
    }
};