<template>
  <div class="side-bar">
    <div>
      <img class="apt-img" src="@/assets/img/apt1.png" alt="apt-img" />
      <div class="close-side-bar">
        <img src="@/assets/img/close-side-bar.png" alt="close-side-bar" />
      </div>
    </div>
    <div class="detail-info">
      <div class="detail-title">
        <div>동아(92-0)</div>
        <img class="heart" src="@/assets/img/like-select.png" alt="like" />
      </div>
      <div class="apt-info">
        <table class="apt-info-table">
          <tr>
            <th>건물 명</th>
            <td>동아(92-0)</td>
          </tr>
          <tr>
            <th>법정동</th>
            <td>영주동</td>
          </tr>
          <tr>
            <th>지번 주소</th>
            <td>부산광역시 중구 영주동 92</td>
          </tr>
          <tr>
            <th>도로명 주소</th>
            <td>부산광역시 중구 영주로 73</td>
          </tr>
        </table>
      </div>
      <div class="deal-table">
        <table>
          <thead>
            <th>거래일자</th>
            <th>거래금액</th>
            <th>전용 면적</th>
            <th>층</th>
          </thead>
          <tbody>
            <tr>
              <td>2022-01-18</td>
              <td>18,300만원</td>
              <td>73.56㎡</td>
              <td>4층</td>
            </tr>
            <tr>
              <td>2022-01-18</td>
              <td>18,300만원</td>
              <td>73.56㎡</td>
              <td>4층</td>
            </tr>
            <tr>
              <td>2022-01-18</td>
              <td>18,300만원</td>
              <td>73.56㎡</td>
              <td>4층</td>
            </tr>
            <tr>
              <td>2022-01-18</td>
              <td>18,300만원</td>
              <td>73.56㎡</td>
              <td>4층</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="review-title">
        <div class="score">3.5</div>
        <div>
          <a href="">
            <img src="@/assets/img/fullStar.png" alt="star1" />
            <img src="@/assets/img/fullStar.png" alt="star2" />
            <img src="@/assets/img/fullStar.png" alt="star3" />
            <img src="@/assets/img/falfStar.png" alt="star4" />
            <img src="@/assets/img/star.png" alt="star5" />
          </a>
        </div>
        <div class="count">리뷰 2개</div>
      </div>
      <div class="review-content">
        <div class="review">
          대형마트, 백화점도 근교에 있고요. 용산 가족 공원도 도보로 갈 수 있어서 환경은 만족하고
          있습니다. 교통도 ...
        </div>
        <div class="review">
          대형마트, 백화점도 근교에 있고요. 용산 가족 공원도 도보로 갈 수 있어서 환경은 만족하고
          있습니다. 교통도 ...
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* main side bar css */
.side-bar {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  width: 550px;
  height: 86%;
  overflow-x: hidden;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
}

.side-bar .apt-img {
  position: absolute;
  width: 550px;
  height: 400px;
}

.close-side-bar img {
  position: relative;
  top: 30px;
  left: 30px;
  width: 15px;
  height: 24px;
}

/* 아파트 정보 */

.side-bar .detail-info {
  position: relative;
  top: 366px;
  display: flex;
  flex-direction: column;
}

.side-bar .detail-info .detail-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px 20px 40px;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
}

.side-bar .detail-info .detail-title div {
  font-weight: 500;
  font-size: 22px;
  margin-right: 50px;
}

.side-bar .detail-info .heart {
  width: 27px;
  height: 27px;
}

.side-bar .detail-info .apt-info {
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
}

.side-bar .detail-info .apt-info-table {
  padding: 10px 10px 10px 20px;
}

.side-bar .detail-info .apt-info-table th {
  font-weight: 900;
  font-size: 16px;
  text-align: left;
}

.side-bar .detail-info .apt-info-table td {
  font-size: 14px;
  color: #666666;
}

.side-bar .detail-info .apt-info-table th,
.side-bar .detail-info .apt-info-table td {
  padding: 13px 20px;
}

/* 아파트 실거래 정보 */

.side-bar .detail-info .deal-table {
  padding: 20px;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.274);
}

.side-bar .detail-info .deal-table table {
  margin: 10px auto 15px auto;
  border-collapse: collapse;
  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
}

.side-bar .detail-info .deal-table thead {
  background-color: rgba(217, 217, 217, 0.5);
}

.side-bar .detail-info .deal-table tbody {
  font-weight: 400;
  font-size: 14px;
}

.side-bar .detail-info .deal-table th,
.side-bar .detail-info .deal-table td {
  text-align: center;
  padding: 10px 25px;
}

/* 리뷰 */
.side-bar .review-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 20px 25px 50px;
  border-bottom: 0.3px dotted rgba(0, 0, 0, 0.274);
}

.side-bar .review-title > div {
  margin: 0 10px;
}

.side-bar .review-title .score {
  color: rgba(0, 0, 0, 0.5);
}

.side-bar .review-title .count {
  color: #1a73e8;
}

.side-bar .review {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  padding: 25px 20px 25px 50px;
  border-bottom: 0.3px dotted rgba(0, 0, 0, 0.274);
}
</style>
