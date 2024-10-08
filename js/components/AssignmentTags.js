export default {
    template: `
    <div class="flex gap-2">
            <button 
            v-for="tag in tags" 
            @click="$emit('update:currentTag', tag)"
            class="border rounded px-1 py-px text-xs"
            :class="{'border-blue-500 text-blue-500' : currentTag === tag
            }"
            >{{ tag }}</button>
        </div>
    `,
    props:{
        initialTags: {
            type: Array,
            default: []
        },
        currentTag: String
    },
    computed: {
        tags(){
            return ['all', ...new Set(this.initialTags)];
        },
    }
}