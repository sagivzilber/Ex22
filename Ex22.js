// Targil 1
alert("Sagiv");

// Targil 2
var x = 5;
var y = 6;
alert(x + y);

// Targil 3
var firstName = "Sagiv";
var lastName = "Zilber";
alert(firstName + " " + lastName);

// Targil 4
document.write("<a href='http://www.google.com'> GOOGLE </a>");

// Targil 5
document.write("<img src='images/1.jpg' />");

// Targil 6
document.write(`
<table>
  <tbody>
    <tr>
      <td>
        <a href='http://www.google.com'> GOOGLE </a>
      </td>
      <td>
        <img src="images/1.jpg" />
      </td>
    </tr>
    </tbody>
    </table>
`);

// Targil 7 + 8 + 9 + 10 + 11
const numberOfRows = parseInt(prompt("Please enter number of rows"));

document.write(`
<table>
  <tbody>
`);

for (let i = 1; i <= numberOfRows; i++) {
  document.write(`
  <tr>
    <td>
      <a href='${i}.html'> קישור לדף ${i} </a>
    </td>
    <td>
      <img style="height: ${100 + 10 * (i - 1)}; width: ${
    200 + 20 * (i - 1)
  }" src="images/${i}.jpg" />
    </td>
  </tr>
`);
}

document.write(`
  </tbody>
</table>
`);
