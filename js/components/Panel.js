export default {
    template: `
        <div :class="{
        'p-4 border rounded-lg' : true,
        'bg-gray-700 border-gray-600 text-whtie' : theme === 'dark',
        'bg-white border-gray-300 text-black' : theme === 'light'
        }">
            <h2 v-if="$slots.title" class="font-bold mb-2">
                <slot name="title"/>
            </h2>
            <slot />
            <footer v-if="$slots.footer" class="text-xs text-gray-400 border-t border-gray-600 mt-4 pt-4">
                <slot name="footer" />            
            </footer>
        </div>
    `,
    props: {
        theme: { type: String, default: 'dark'}
    }
}

