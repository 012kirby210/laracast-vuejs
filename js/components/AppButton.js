
export default {
    template: `
                <button
                 :class="{
                'rounded-xl border rounded px-5 py-2 disabled:cursor-not-allowed relative' : true,
                'bg-gray-200 hover:bg-gray-400' : type === 'muted',
                'bg-blue-200 hover:bg-blue-400 ' : type === 'primary',
                'bg-violet-200 hover:bg-violet-400 ' : type === 'secondary',
                'is-loading': processing
                }" 
                :disabled="processing"
                >
                <slot />
                </button>
                `,
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
    // data() {
    //     return {
    //         processing: true,
    //
    //     }
    // }
}