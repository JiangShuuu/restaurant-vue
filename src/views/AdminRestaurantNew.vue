// ./src/views/AdminRestaurantNew.vue
<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminRestaurantNew", //命名是方便取名
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false,
    };
  },
  methods: {
    async handleAfterSubmit(formData) {
      // 透過API把 formData 資料往後端伺服器送
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.create({ formData });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳，請稍後再試",
        });
      }
      // for (let [name, value] of formData.entries()) {
      //   console.log(name + ": " + value);
      // }
    },
  },
};
</script>
