import { apiHelper } from "../utils/helpers";

export default {
  categories: {
    get() {
      return apiHelper.get("/admin/categories");
    },
    create(formData) {
      return apiHelper.post("/admin/categories", formData);
    },
    deleteCategory({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`);
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/restaurants/${categoryId}`, { name });
    },
  },
  restaurants: {
    create({ formData }) {
      return apiHelper.post("/admin/restaurants", formData);
    },
    getRestaurants() {
      return apiHelper.get("/admin/restaurants");
    },
    deleteRestaurants({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`);
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`);
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData);
    },
  },
  users: {
    get() {
      return apiHelper.get("/admin/users");
    },
    update({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin });
    },
  },
};
