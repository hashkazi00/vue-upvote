const cardComponent = {
  template: `
  <div style="display:flex; width:100%;">
    <div class="card">
                <header class="card-header">
                  <p class="card-header-title">{{submission.title}}</p>
                </header>
                <div class="card-content">
                  <div class="content">{{submission.description}}</div>
                  <hr />
                  {{submission.votes}}
                </div>
                <footer class="card-footer">
                  <a
                    href="#"
                    class="card-footer-item"
                    @click="upvote(submission.id)"
                    >Upvote</a
                  >
                  <a
                    href="#"
                    class="card-footer-item"

                    

                    @click="$emit('delete-entry', submission.id)"
                    >Delete</a
                  >
                </footer>
              </div>
  </div>
  `,
  props: ['submission', 'submissions'],
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      //an exemplar of reactivity
      submission.votes++;
    },
  },
};

new Vue({
  el: '#app',
  data: {
    submissions: Seed.submissions,
  },

  computed: {
    sortedSubmissions() {
      return this.submissions.sort((a, b) => b.votes - a.votes);
    },
  },

  methods: {
    deleteEntry(id) {
      this.submissions = this.submissions.filter((sub) => {
        return sub.id !== id;
      });
    },
  },
  components: {
    'card-component': cardComponent,
  },
});
