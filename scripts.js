document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop().replace(".html", ""); // 현재 파일 이름
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    // 클릭한 메뉴의 부모 li에 active 클래스 추가
    if (item.dataset.page === currentPage) {
      item.parentElement.classList.add("active");
    }
  });
});


const langBox = document.getElementById("lang-box");
  langBox.addEventListener("click", () => {
    if (langBox.textContent === "KOR") {
      langBox.textContent = "ENG";
      langBox.style.backgroundColor = "#d9534f";
    } else {
      langBox.textContent = "KOR";
      langBox.style.backgroundColor = "#444";
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const liveTime = document.getElementById("live-time");
  
    // 시간 업데이트 함수
    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear(); // 년도
      const month = String(now.getMonth() + 1).padStart(2, "0"); // 월
      const date = String(now.getDate()).padStart(2, "0"); // 일
      const hours = String(now.getHours()).padStart(2, "0"); // 시
      const minutes = String(now.getMinutes()).padStart(2, "0"); // 분
      const seconds = String(now.getSeconds()).padStart(2, "0"); // 초
  
      // "YYYY-MM-DD" 형식으로 상단 날짜 표시
      const dateLine = `${year}-${month}-${date}`;
  
      // "HH:MM:SS" 형식으로 하단 시간 표시
      const timeLine = `${hours}:${minutes}:${seconds}`;
  
      // HTML 업데이트
      liveTime.innerHTML = `<div>${dateLine}</div><div>${timeLine}</div>`;
    };
  
    // 1초마다 시간 갱신
    setInterval(updateTime, 1000);
  
    // 페이지 로드 시 즉시 시간 표시
    updateTime();
  });
  
