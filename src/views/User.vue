<template>
  <div class="container py-5">
    <!-- UserProfileCard  :initial-is-followed="isFollowed"-->
    <Spinner v-if="isLoading" />
    <template v-else>
      <UserProfileCard
        :user="user"
        :is-current-user="currentUser.id === user.id"
        :initial-is-followed="isFollowed"
      />

      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingsCard :followings="followings" />
          <!-- UserFollowersCard -->
          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard :comments="comments" />
          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard
            :favorited-restaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import UserProfileCard from "../components/UserProfileCard.vue";
import UserFollowingsCard from "../components/UserFollowingsCard.vue";
import UserFollowersCard from "../components/UserFollowersCard.vue";
import UserCommentsCard from "../components/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../components/UserFavoritedRestaurantsCard.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";
import Spinner from "./../components/Spinner.vue";

export default {
  name: "UserInfo",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    Spinner,
  },
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
        email: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
      isLoading: true,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },

  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get({ userId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        const { profile, isFollowed } = data;
        const {
          id,
          image,
          name,
          email,
          Followers,
          Followings,
          Comments,
          FavoritedRestaurants,
        } = profile;
        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
        };
        this.isFollowed = isFollowed;
        this.followings = Followings;
        this.followers = Followers;
        this.favoritedRestaurants = FavoritedRestaurants;

        const commentSet = new Set(); //待研究
        this.comments = Comments.filter(
          (comment) =>
            comment.Restaurant &&
            !commentSet.has(comment.Restaurant.id) &&
            commentSet.add(comment.Restaurant.id)
        );
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得User資料，請稍後再試!",
        });
      }
    },
  },
};
</script>
