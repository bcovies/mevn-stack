<script>
import axios from "axios";
export default {
  async mounted() {
    const data = await this.checkSession();
    if (data.status != 200) {
      // this.$router.push("/error");
      console.log("User not authorized!");
    } else {
      this.userName = data.body.user.email;
    }
  },
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    checkSession() {
      return new Promise((returnPromise) => {
        axios
          .get(`//${process.env.VUE_APP_API_ENDPOINT}/auth/token`)
          .then(function (response) {
            // console.log("Dashboard response: ");
            console.log(response);
            returnPromise({
              status: response.status,
            });
          })
          .catch(function (error) {
            // console.log(error);
            returnPromise({
              status: error.response.status,
            });
          });
      });
    },
  },
};
</script>
