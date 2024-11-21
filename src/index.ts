async function start() {
  const MIN = 60 * 1000;

  let interval = setInterval(async () => {
    await fetch("/auth/refresh", {
      method: "POST",
      body: JSON.stringify({ mode: "session" }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).catch((error) => {
      console.log(error);
      clearInterval(interval);
      callLater();
    });
  }, 5 * MIN);

  function callLater() {
    setTimeout(start, 10 * MIN);
  }
}

start();

export default {};
