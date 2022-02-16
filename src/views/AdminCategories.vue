// ./src/views/AdminCategories.vue
<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            :disabled="isProcessing"
            @click.stop.prevent="createCategory"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <Spinner v-if="isLoading" />
    <template v-else>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col" width="60">#</th>
            <th scope="col">Category Name</th>
            <th scope="col" width="210">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <th scope="row">
              {{ category.id }}
            </th>
            <!-- 編輯03 -->
            <td class="position-relative">
              <div v-show="!category.isEditing" class="category-name">
                {{ category.name }}
              </div>
              <input
                v-show="category.isEditing"
                v-model="category.name"
                type="text"
                class="form-control"
              />
              <span
                v-show="category.isEditing"
                class="cancel"
                @click.stop.prevent="handleCancel(category.id)"
              >
                ✕
              </span>
            </td>

            <td class="d-flex justify-content-between">
              <button
                v-show="!category.isEditing"
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="toggleIsEditing(category.id)"
              >
                Edit
              </button>
              <button
                v-show="category.isEditing"
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="
                  updateCategory({
                    categoryId: category.id,
                    name: category.name,
                  })
                "
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-link mr-2"
                @click.stop.prevent="deleteCategory(category.id)"
              >
                Delete
              </button>
              <!-- 編輯03 end -->
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
// import uuid from "uuid/v4";
import AdminNav from "@/components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";
import Spinner from "./../components/Spinner.vue";

export default {
  name: "AdminCategories",
  components: {
    AdminNav,
    Spinner,
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      categories: [],
      newCategoryName: "", //01
      isProcessing: false,
      isLoading: true,
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();

        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: "",
        }));
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別資料，請稍後再試!",
        });
      }
    },
    async createCategory() {
      // TODO: 透過 API 向後端伺服器新增餐廳類別
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.categories.create({
          name: this.newCategoryName,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
          isEditing: false,
        });

        this.isProcessing = false;
        this.newCategoryName = "";
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳類別，請稍後再試!",
        });
      }
    },
    async deleteCategory(categoryId) {
      //TODO: 透過API向後端伺服器刪除餐廳類別
      try {
        const { data } = await adminAPI.categories.deleteCategory({
          categoryId,
        });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法移除餐廳類別，請稍後再試!",
        });
      }
    },
    async updateCategory({ categoryId, name }) {
      // TODO: 透過 API 向伺服器更新資料名稱
      try {
        console.log(categoryId, name);
        const { data } = await adminAPI.categories.update({
          categoryId,
          name,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.toggleIsEditing(categoryId);
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法更新餐廳類別，請稍後再試",
        });
      }
    },
    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            // 把原本的餐廳類別名稱還回去
            name: category.nameCached,
          };
        }
        return category;
      });
      this.toggleIsEditing(categoryId);
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },
  },
};
</script>

// 編輯04 改變樣式
<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>
