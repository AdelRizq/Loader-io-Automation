setInterval(function () {
    let reRunBtn = document.querySelector("#re-run-test");
    let actionBlock = document.querySelector(".actions-block");

    let isActionHidden =
        actionBlock && actionBlock.classList.contains("hidden");

    // console.log("actionBlock: ", actionBlock);
    // console.log("reRunBtn: ", reRunBtn);

    if (!isActionHidden && reRunBtn) {
        reRunBtn.click();
    }
}, 3000);
