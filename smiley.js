function countSmileys(arr) {
    const smiley = arr.join("").match(/[:;][-~]?[D)]/g);
    console.log(smiley ? smiley.length : 0)
  return smiley ? smiley.length : 0;
}

countSmileys([]);
countSmileys([":D", ":~)", ";~D", ":)"]);
countSmileys([":)", ":(", ":D", ":O", ":;"]);
countSmileys([";]", ":[", ";*", ":$", ";-D"]);
