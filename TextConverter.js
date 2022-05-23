(function() {
    let startingTime = new Date().getTime();
    // Load the script
    let script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existance
    let checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
        $(function() {
            let fixation = 1
            let saccade = 10
            function convertWord(text) {
                let length = Math.ceil(text.length / 2 * fixation / 3);
                let [highlightedPart, normalPart] = split(text, length)
                highlightedPart = '<b>' + highlightedPart + '</b>'
                return highlightedPart + normalPart;
            }

            function convertText(text) {
                let words = text.split(" ");
                let returnText = "";
                words.forEach(word => {
                    returnText += convertWord(word)
                })
                return returnText;
            }

            function split(str, index) {
                return [str.slice(0, index), str.slice(index)];
            }
        });
    });
})();