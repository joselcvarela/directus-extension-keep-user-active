(function () {
  const MIN = 60 * 1000;

  document.addEventListener("pointermove", debounceActivity());

  function debounceActivity() {
    let timeout;

    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        await fetch("/auth/refresh", {
          method: "POST",
          body: JSON.stringify({ mode: "session" }),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }).catch((error) => {
          console.log(error);
        });
      }, 5 * MIN);
    };
  }
})();

export default {
  id: "userActivity",
  name: "User Activity",
  description: "Keeps user logged in",
  types: [""],
  icon: "",
  component: {},
  options: [],
};
