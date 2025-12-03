// app.js - 完整版
async function sendMood() {
    const mood = document.getElementById("moodInput").value;
    const resultBox = document.getElementById("result");

    // 檢查是否輸入
    if (!mood) {
        resultBox.innerHTML = "請先輸入心情！";
        return;
    }

    try {
        // 這裡用 localhost 測試，部署到 Zeabur 後改成你的 Zeabur URL
        const apiUrl = "https://mood-diary.zeabur.app/";
        // 部署到 Zeabur 例如：
        // const apiUrl = "https://你的專案名稱.zeabur.app/mood";

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mood })
        });

        // 如果 HTTP 狀態不是 200，直接拋出錯誤
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }

        const data = await response.json();
        // 顯示 API 回應
        resultBox.innerHTML = "回應：" + data.message;
    } catch (error) {
        console.error(error);
        resultBox.innerHTML = "無法連接到 API，請確認 FastAPI 是否啟動或 URL 正確。";
    }
}
