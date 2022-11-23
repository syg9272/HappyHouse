<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div class="star-list" v-for="index in 5" :key="index">
                <mark
                  class="star"
                  :class="index <= score ? 'active' : ''"
                  @click="getActiveStar(index)"
                ></mark>
              </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <textarea
                v-model="review"
                cols="30"
                rows="5"
                placeholder="내용을 입력하세요."
              ></textarea>
              <div>
                <button v-if="!isMyReview" class="modal-default-button" @click="insertReview()">
                  등록
                </button>
                <button v-if="!isMyReview" class="modal-default-button" @click="closeReview()">
                  닫기
                </button>

                <button v-if="isMyReview" class="modal-default-button" @click="updateReview()">
                  수정
                </button>
                <button v-if="isMyReview" class="modal-default-button" @click="deleteReview()">
                  삭제
                </button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import http from "@/api/http";
import { mapState } from "vuex";

const mapStore = "mapStore";
export default {
  data() {
    return {
      score: 0,
      review: null,
      isMyReview: false,
    };
  },
  computed: {
    ...mapState(mapStore, ["apt"]),
    ...mapState(mapStore, ["myReview"]),
    ...mapState(mapStore, ["reviewList"]),
    ...mapState(mapStore, ["starAvg"]),
  },
  methods: {
    getActiveStar(index) {
      this.score = index;
    },
    insertReview() {
      http
        .post("/apt/insertReview", {
          id: this.myReview.id,
          aptCode: this.myReview.aptCode,
          grade: this.score,
          content: this.review,
        })
        .then((data) => {
          console.log(data);
          this.$emit("close");
          this.$router.go(0);
        });
    },
    updateReview() {
      http
        .put("/apt/updateReview", {
          id: this.myReview.id,
          aptCode: this.myReview.aptCode,
          grade: this.score,
          content: this.review,
        })
        .then((data) => {
          console.log(data);
          this.$emit("close");
          this.$router.go(0);
        });
    },
    deleteReview() {
      http
        .delete("/apt/deleteReview", {
          params: {
            id: this.myReview.id,
            aptCode: this.myReview.aptCode,
          },
        })
        .then((data) => {
          console.log(data);
          this.$emit("close");
          this.$router.go(0);
        });
    },
    closeReview() {
      this.$router.go(0);
    },
  },
  created() {
    this.score = this.myReview.grade;
    this.review = this.myReview.content;
    if (this.myReview.grade != 0) {
      this.isMyReview = true;
    }
  },
};
</script>

<style lang="scss">
mark {
  background-color: transparent;
}
// button {
//   background: none;
//   border: solid 1px;
//   border-radius: 2em;
//   font: inherit;
//   padding: 0.75em 2em;
// }

.star {
  display: inline-block;
  position: relative;
  width: 0px;
  height: 0px;
  margin: 10px 1px;
  border-right: 17px solid transparent !important;
  border-bottom: 11px solid lightgray;
  border-left: 17px solid transparent !important;
  color: lightgray;
  transform: rotate(35deg);
  cursor: pointer;

  &.active {
    border-color: rgb(255, 217, 0);

    &:after,
    &:before {
      border-color: rgb(255, 217, 0);
    }
  }

  &:before {
    display: block;
    position: absolute;
    top: -7px;
    left: -11px;
    width: 0;
    height: 0;
    border-bottom: 13px solid lightgray;
    border-left: 5px solid transparent !important;
    border-right: 5px solid transparent !important;
    transform: rotate(-35deg);
    content: "";
  }

  &:after {
    display: block;
    position: absolute;
    top: 0.5px;
    left: -18px;
    width: 0px;
    height: 0px;
    border-right: 17px solid transparent !important;
    border-bottom: 11px solid lightgray;
    border-left: 17px solid transparent !important;
    color: lightgray;
    transform: rotate(-70deg);
    content: "";
  }
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  color: #555555;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 20px;
}

.modal-header h3 {
  width: 500px;
  margin: 0;
  padding: 15px 30px;
  color: rgba(10, 17, 81, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.modal-body {
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  padding: 5px 30px;
}

.modal-footer {
  display: flex;
  flex-direction: column;
  padding: 5px 30px 15px 30px;
}

.modal-footer textarea {
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.33);
  outline: none;
  border-radius: 10px;
  font-size: 14px;
}

.modal-footer > div {
  display: flex;
  flex-direction: row;
  margin-left: 60%;
}

.modal-default-button {
  width: 80px;
  margin-left: 10px;
  font-size: 14px;
  margin-top: 20px;
  background-color: rgba(10, 17, 81, 1);
  padding: 8px 2px;
  border-radius: 10px;
  color: white;
}

.modal-default-button:hover {
  background-color: white;
  color: rgba(10, 17, 81, 1);
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
