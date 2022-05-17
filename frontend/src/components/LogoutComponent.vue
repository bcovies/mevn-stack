<script>
import axios from "axios";
export default {
  async mounted() {
    this.logout();
  },
  methods: {
    logout() {
      return new Promise((returnPromise) => {
        axios
          .get(`//${process.env.VUE_APP_API_ENDPOINT}/auth/logout`)
          .then(function (response) {
            returnPromise(response);
            console.log(response);
          })
          .catch(function (error) {
            returnPromise(error);
            console.log(error);
          });
      });
    },
  },
};
</script>
