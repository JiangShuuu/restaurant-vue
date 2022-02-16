<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <AdminRestaurantForm
        @after-submit="handleAfterSubmit"
        :initial-restaurant="restaurant"
        :is-processing="isProcessing"
      />
    </template>
  </div>
</template>
//props 方式入子元件 :initial-restaurant 預設

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner.vue";

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
    Spinner,
  }, //step 01
  data() {
    return {
      //step 02
      restaurant: {
        id: -1,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        CategoryId: "",
      },
      isProcessing: false,
      isLoading: true,
    };
  },
  created() {
    //step 02-2  不要放在methods裡，會抓不到ID  蠢
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeRouteUpdate(to, form, next) {
    // console.log("beforeRouteUpdata", {
    //   to,
    //   form,
    // });
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },
  methods: {
    //step 02-1
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId });

        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId,
        } = data.restaurant;

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          tel,
          address,
          openingHours,
          image,
          description,
          categoryId,
        };
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
    async handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新餐廳資料，請稍後再試",
        });
      }
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>
