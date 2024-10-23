window.addEventListener("DOMContentLoaded", () => {
  /** @type {HTMLButtonElement} */
  const resumeDownloadBtn = document.querySelector(".resume-download-btn");

  resumeDownloadBtn.addEventListener("click", async () => {
    resumeDownloadBtn.disabled = true;
    resumeDownloadBtn.innerText = resumeDownloadBtn.getAttribute('data-disabled-text');

    await new Promise((resolve) => setTimeout(resolve, 1000)) // delayed for ux
   
    const res = await fetch(
      `https://vnevpeyewqsbbniekaxp.supabase.co/storage/v1/object/public/common/resume.pdf`  // Ubah link
    );
    if (!res.ok) return;
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Resume.pdf"); // Ubah nama file
    link.click();

    resumeDownloadBtn.disabled = false;
    resumeDownloadBtn.innerText = resumeDownloadBtn.getAttribute('data-enabled-text');
  });
});
