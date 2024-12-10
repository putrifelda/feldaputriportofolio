window.addEventListener("DOMContentLoaded", () => {
  /** @type {HTMLButtonElement} */
  const resumeDownloadBtn = document.querySelector(".resume-download-btn");

  resumeDownloadBtn.addEventListener("click", async () => {
    resumeDownloadBtn.disabled = true;
    resumeDownloadBtn.innerText = resumeDownloadBtn.getAttribute('data-disabled-text');

    await new Promise((resolve) => setTimeout(resolve, 1000)) // delayed for ux
   
    const res = await fetch(
      `https://drive.google.com/file/d/1jlCw1xaP0HVEIonQvM2VY0j2OR24C9zp/view?usp=sharing`  // Ubah link
    );
    if (!res.ok) return;
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "CV Felda Putri Widya Rachmawati"); // Ubah nama file
    link.click();

    resumeDownloadBtn.disabled = false;
    resumeDownloadBtn.innerText = resumeDownloadBtn.getAttribute('data-enabled-text');
  });
});
