<template>
  <main>
    <div class="view">
      <div class="title">공지사항</div>
      <div class="view-header">
        <div class="view-type">업데이트</div>
        <div class="view-title">[공지] 10월 21일 1.6 버전 업데이트</div>
      </div>
      <div class="view-content">
        <div class="content">
          국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다. 일반사면을 명하려면
          국회의 동의를 얻어야 한다. 누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가
          있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는 구속을 당한 자의
          가족등 법률이 정하는 자에게는 그 이유와 일시·장소가 지체없이 통지되어야 한다. 명령·규칙
          또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를
          최종적으로 심사할 권한을 가진다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기
          위하여 노력하여야 한다.
        </div>
        <div class="view-file">
          <div>첨부파일 (1)</div>
          <div class="file-list">
            <a href="#"><img src="@/assets/img/file.png" alt="file" /></a>
            <a href="#">10월 21일 1.6 버전 업데이트 별첨.pdf</a>
          </div>
        </div>
        <button @click="moveService()" class="move-list">목록으로</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ServiceView",
  methods: {
    moveService() {
      this.$router.push({ name: "service" });
    },
  },
};
</script>

<style>
.view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.view .view-header {
  margin-top: 20px;
  padding: 15px 300px;
  background-color: rgba(10, 17, 81, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.view .view-header .view-type {
  margin-right: 100px;
  font-weight: bold;
  color: #0a1151;
  font-size: 16px;
}

.view .view-header .view-title {
  color: black;
  font-size: 16px;
}

.view .view-content {
  padding: 50px 300px;
  display: flex;
  flex-direction: column;
}

.view .view-content .content {
  line-height: 40px;
  font-size: 16px;
  min-height: 330px;
}

.view .view-content .view-file {
  display: flex;
  flex-direction: column;
  border-top: 0.5px solid rgba(0, 0, 0, 0.25);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.25);
  margin: 50px 0;
  color: rgba(0, 0, 0, 0.5);
}

.view .view-content .view-file > div {
  padding: 20px;
}

.view .view-content .view-file .file-list {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.view .view-content .view-file .file-list a {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
}

.view .view-content .view-file .file-list a:hover {
  text-decoration: underline;
}

.view .view-content .view-file .file-list img {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  opacity: 50%;
}

.view .view-content .move-list {
  width: 122px;
  height: 50px;
  border: 0px;
  border-radius: 5px;
  background-color: #0a1151;
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin: auto;
}
</style>
