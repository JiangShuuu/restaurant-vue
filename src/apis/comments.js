import { apiHelper } from "./../utils/helpers";

export default {
  createComments({ restaurantId, text }) {
    return apiHelper.post("/comments", {
      restaurantId,
      text,
    });
  },
  deleteComments({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`);
  },
};
