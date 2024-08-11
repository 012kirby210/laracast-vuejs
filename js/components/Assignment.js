export default {
    template: `
        <li>
            <label>
                {{assignment.name}}
                <input type="checkbox" v-model="assignment.complete"/>
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