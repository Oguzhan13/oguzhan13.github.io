export function preventEmptyMessageSubmission(errorMessage) {
    var form = document.querySelector(".mail-form");    

    form.addEventListener("submit", function(event) {
        var messageTextarea = form.querySelector("#message");

        if (messageTextarea.value.trim() === "") {
            alert(errorMessage);
            event.preventDefault();
        }
    });
}

