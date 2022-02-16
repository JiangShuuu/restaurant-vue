// ./src/views/Restaurant.vue
<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1>餐廳描述頁</h1>
      <!-- 餐廳資訊頁 RestaurantDetail -->
      <RestaurantDetail :initial-restaurant="restaurant" />
      <hr />
      <!-- 餐廳評論 RestaurantComments -->
      <RestaurantComments
        :restaurantComments="restaurantComments"
        @after-delete-comment="afterdeletecomment"
      />
      <!-- 新增評論 CreateComment -->
      <CreateComment
        :restaurant-id="restaurant.id"
        @after-create-comment="afterCreatComment"
      />
    </template>
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments.vue";
import CreateComment from "../components/CreateComment.vue";
import restaurantAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
import Spinner from "./../components/Spinner.vue";

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      isLoading: true,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },
  created() {
    // console.log(this.$route.params);
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantAPI.getRestaurant({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openingHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };

        this.restaurantComments = Comments;
        this.isLoading = false;
      } catch (error) {
        console.error(error.message);
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
    afterdeletecomment(commentId) {
      // console.log("afterDeleteComment", commentId);
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreatComment(payload) {
      // console.log("payload", payload);
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        // 似乎不會照順序顯示在VueTool上，但數量是對的
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
};
</script>
