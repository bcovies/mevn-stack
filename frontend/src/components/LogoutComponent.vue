<script>
import axios from "axios";
export default {
  async mounted() {
    this.logout();
    this.$storage.clearStorageSync();
    this.$router.push("/");
  },
  methods: {
    logout() {
      return new Promise((returnPromise) => {
        const URL = `//${process.env.VUE_APP_API_ENDPOINT}/auth/logout`;
        const config = {
          headers: {
            authorization: this.$storage.getStorageSync("token"),
          },
        };
        axios
          .get(URL, config)
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
