var word = new Array(3);
for (i = 0; i < word.length; i++) {
    word[i] = [];
}
var h = 0
var s = "012310122101";
for (i = 0; i < 3; i++) {
    for (j = 0; j < 4; j++) {

        word[i][j] = s[h++];
        document.write(word[i][j] + " ");
    }
    document.write("<br>");
}
