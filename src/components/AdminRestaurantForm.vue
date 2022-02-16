// ./src/components/AdminRestaurantForm.vue
<template>
  <form @submit.stop.prevent="handleSubmit" v-show="!isLoading">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        class="form-control"
        name="categoryId"
        v-model="restaurant.categoryId"
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        v-model="restaurant.tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
        v-model="restaurant.address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
        v-model="restaurant.openingHours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        class="form-control"
        rows="3"
        name="description"
        v-model="restaurant.description"
      />
    </div>

    <div class="form-group">
      <!-- type 是檔案種類 accept 是指定接收檔案類型 -->
      <!-- input 裡加上 multiple 就可以上傳多個檔案 -->
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      />
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button type="submit" class="btn btn-primary" :disabled="isProcessing">
      {{ isProcessing ? "處理中" : "送出" }}
    </button>
  </form>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminRestaurantForm",
  props: {
    // 這邊取出edit修改後傳入的資料  Edit/step04
    initialRestaurant: {
      type: Object,
      default: () => {
        return {
          name: "",
          tel: "",
          address: "",
          openingHours: "",
          description: "",
          image: "",
          categoryId: "",
        };
      },
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      categories: [],
      restaurant: {
        ...this.initialRestaurant,
      },
      isLoading: true,
    };
  },
  created() {
    this.fetchCategories();
    // this.restaurant = {
    //   ...this.restaurant,
    //   ...this.initialRestaurant,
    // };
  },
  watch: {
    initialRestaurant(newValue, oldValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
      console.log("watch", {
        newValue,
        oldValue,
      });
    },
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();
        this.categories = data.categories;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別，請稍後再試!",
        });
      }
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        this.restaurant.image = ""; // 清空欄位
        return; //使用者沒有上傳任何檔案
      }
      const imageURL = window.URL.createObjectURL(files[0]); //這個可以接收檔案的物件，並產生一個存在記憶體中的短暫URL
      console.log("files", imageURL);
      this.restaurant.image = imageURL; //放進餐廳的image
    },
    handleSubmit(e) {
      if (!this.restaurant.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫餐廳名稱",
        });
        return;
      }

      if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: "warning",
          title: "請選擇餐廳類別",
        });
      }

      const form = e.target; //form資料是當中的target
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
  },
};
</script>
