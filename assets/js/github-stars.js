document.addEventListener("DOMContentLoaded", () => {
  const starElement = document.getElementById("github-stars");

  fetch("https://api.github.com/repos/iamalshahed/responsive-headphone-website-01-shahed")
    .then((res) => res.json())
    .then((data) => {
      let stars = data.stargazers_count;

      // যদি একক সংখ্যার হয়, তাহলে আগেই 0 বসাও
      if (stars < 10) {
        stars = `0${stars}`;
      }

      starElement.textContent = stars;
    })
    .catch((error) => {
      console.error("Error fetching GitHub stars:", error);
      starElement.textContent = "N/A";
    });
});