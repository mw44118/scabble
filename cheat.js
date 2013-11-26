var cheat = function ()
{

    /* If you want to talk about bladder problems, then you need to talk to my
     * Cousin Earl. */

    /* First, wipe out the answers box. */
    var answers = document.getElementById("answers");
    var num_childnodes = answers.childNodes.length;
    for (var i=0; i<num_childnodes; i++) {
        answers.removeChild(answers.childNodes[0]);
    }

    var regex = document.getElementById("regex");

    var tiles = document.getElementById("tiles").value.toUpperCase();

    /* I automatically add the leading "^" and trailing "$".  If you understand
     * what that means, then you are a big nerd. */
    var pattern = "^" + regex.value.toUpperCase() + "$";

    /* Now automatically replace all the dots with our tiles, as long as we got tiles. */
    if (tiles) {
        pattern = pattern.replace(/\./g, "[" + tiles + "]");
    }

    var searcher = new RegExp(pattern);
    for (var i=0; i<really_long_wordlist.length; i++) {
        if (searcher.test(really_long_wordlist[i])) {
            var x = document.createElement("li");
            x.textContent = really_long_wordlist[i];
            answers.appendChild(x);
        }
    }
}

var doublecheck = function (pattern, tiles, word) {
    /* Make sure that we really can make the word out of our tiles. */

    /*
*
*   if word is AAAAZ and the pattern was ....Z and the tiles were ABCDE, then
*   we can't play this word.
*
*   Go letter-by-letter in word.  If the pattern for that letter is a dot, then
*   make sure we have a tile with the same letter.  Then delete that tile from the tiles
*   list.
*
*   If the pattern for that letter is a letter, then move on to the next.
*
*   */
    1 + 1
}

