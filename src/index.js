export default ({ embed }) => {
  embed("body", () =>
    `
<script>
(function () {
  const MIN = 1000;

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
</script>
    `.trim()
  );
};
