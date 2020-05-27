function encodeAndDecodeMessages() {
    function encodeAndSend() {
        let message = senderTextarea.value;
        let encodeMessage = "";

        for (let i = 0; i < message.length; i++) {
            let newCharCode = message.charCodeAt(i) + 1;
            encodeMessage += String.fromCharCode(newCharCode);
        }

        senderTextarea.value = "";
        receiverTextarea.value = encodeMessage;
    }

    function decodeAndRead() {
        let message = receiverTextarea.value;
        let decodeMessage = "";

        for (let i = 0; i < message.length; i++) {
            let newCharCode = message.charCodeAt(i) - 1;
            decodeMessage += String.fromCharCode(newCharCode);
        }

        receiverTextarea.value = decodeMessage;
    }

    let senderTextarea = document.getElementsByTagName("textarea")[0];
    let receiverTextarea = document.getElementsByTagName("textarea")[1];

    let encodeAndSendButton = document.getElementsByTagName("button")[0];
    encodeAndSendButton.addEventListener("click", encodeAndSend);

    let decodeAndReadButton = document.getElementsByTagName("button")[1];
    decodeAndReadButton.addEventListener("click", decodeAndRead);
}