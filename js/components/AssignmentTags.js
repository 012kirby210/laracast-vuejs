export default {
    template: `
    <div class="flex gap-2">
            <button 
            v-for="tag in tags" 
            @click="$emit('selectTag', tag)"
            class="border rounded px-1 py-px text-xs"
            :class="{'border-blue-500 text-blue-500' : selectedTag === tag
            }"
            >{{ tag }}</button>
        </div>
    `,
    props:{
        initialTags: {
            type: Array,
            default: []
        },
        selectedTag: {
            type: String,
            default: 'all'
        }
    },
    computed: {
        tags(){
            return ['all', ...new Set(this.initialTags)];
        },
    }
}