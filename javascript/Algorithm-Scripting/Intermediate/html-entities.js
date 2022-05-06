// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.
function convertHTML(str) {
  const html = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str.replace(/[&<>\"']/g, match => html[match]);

  // str = str.split(/(&|<|>|"|')/);

  // for (let i in str) {
  //   if (str[i] in html)
  //     str[i] = html[str[i]];
  // }

  // return str.join("");
}

// should return the string Hamburgers &lt; Pizza &lt; Tacos
convertHTML("Hamburgers < Pizza < Tacos");

// should return the string Sixty &gt; twelve
convertHTML("Sixty > twelve");

// should return the string Stuff in &quot;quotation marks&quot;
convertHTML('Stuff in "quotation marks"');

// should return the string Schindler&apos;s List
convertHTML("Schindler's List");

// should return the string &lt;&gt;
convertHTML("<>");

// should return the string abc
convertHTML("abc");
