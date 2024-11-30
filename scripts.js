document.addEventListener("DOMContentLoaded", () => {
  // 실시간 시간 업데이트
  const liveTime = document.getElementById("live-time");
  const updateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const date = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    liveTime.innerHTML = `${year}-${month}-${date}<br>${hours}:${minutes}:${seconds}`;
  };
  setInterval(updateTime, 1000);
  updateTime();

  // 메뉴 활성화
  const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    if (item.dataset.page === currentPage) {
      item.parentElement.classList.add("active");
    }
  });

  // KOR/ENG 전환
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
});
