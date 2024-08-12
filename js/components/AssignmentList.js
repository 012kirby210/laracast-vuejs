import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
    components: { Assignment, AssignmentTags },
    template: `
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
        {{ sectionTitle }}
        <span>({{assignments.length}})</span>
        </h2>
        <AssignmentTags 
        :initial-tags="this.assignments.map( a => a.tag )"
        :selected-tag="selectedTag"
        @select-tag="selectedTag = $event"
        ></AssignmentTags>
        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
            <Assignment 
                v-for="assignment in filteredAssignements"
                :key="assignment.id"
                :assignment="assignment" 
            ></Assignment>
        </ul>
    </section>
    `,
    props: {
        sectionTitle: String,
        assignments: Array,
    },
    data() {
      return {
          selectedTag: 'all'
      }
    },
    computed: {
        filteredAssignements(){
            if ('all' === this.selectedTag){
                return this.assignments;
            }
            return this.assignments.filter( a => a.tag === this.selectedTag);
        }
    }
}