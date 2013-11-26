var cheat = function (raw_pattern, tiles)
{

    // cheat("b...y", "arm")
    // ["barmy"]

    var pattern = "^" + raw_pattern.toUpperCase() + "$";
    // var pattern = ".*" + raw_pattern.toUpperCase() + ".*";


    /* Now automatically replace all the dots with our tiles, as long as we got tiles. */
    if (tiles) {
        pattern = pattern.replace(/\./g, "[" + tiles.toUpperCase() + "]");
    }

    var searcher = new RegExp(pattern);

    matching_words = [];

    for (var i=0; i<really_long_wordlist.length; i++) {

        if (searcher.test(really_long_wordlist[i])) {
            matching_words.push(really_long_wordlist[i]);
        }

        if (matching_words.length >= 50) {
            return matching_words;
        }

    }

    return matching_words;
}

var doublecheck = function (pattern, tiles, word) {

    // doublecheck("b...y", "URR", "BURRY")
    // true

    // doublecheck("b...y", "AAA", "BURRY")
    // false

    /*
*
*   Go letter-by-letter in word.  If the pattern for that letter is a dot, then
*   make sure we have a tile with the same letter.  Then delete that tile from the tiles
*   list.
*
*   If the pattern for that letter is a letter, then move on to the next.
*
*   */

    var remaining_tiles = tiles.toUpperCase();

    for (var i=0; i<word.length; i++) {
        var p_letter = pattern.substr(i, 1);
        var w_letter = word.substr(i, 1).toUpperCase();

        if (p_letter == ".") {

            // This letter is not in our tiles, so we can't play this
            // word!
            if (remaining_tiles.indexOf(w_letter) == -1) {
                return false;
            }

            else {
                remaining_tiles = remaining_tiles.replace(w_letter, "-");
            }

        }
    }

    return true;

}
