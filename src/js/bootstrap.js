import("./index.js").then(() => {
    window.dispatchEvent(new CustomEvent("RegularTableReady"));
});
