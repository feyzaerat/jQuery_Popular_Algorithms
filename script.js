$(document).ready(function () {
  /* CLEAR BUTTON */
  $(".button__clear").click(function () {
    $(".card__input").val("");
    $(".row__result__result").html("");
    $("#evenNumbersResult").addClass("d-none");
    $("#sortingNumbersResult").addClass("d-none");
  });
  /* CLEAR BUTTON */

  /* ALERT POPUP */
  function showAlert(message) {
    $("#alertMessage").text(message);
    $("#customAlert").removeClass("hidden");
  }

  $("#alertClose").click(function () {
    $("#customAlert").addClass("hidden");
  });
  /* ALERT POPUP */

  /*FIND EVEN NUMBERS */
  $("#evenNumbersSubmit").click(function () {
    const evenNumbersInputVal = $("#evenNumbersInput").val();
    if (!evenNumbersInputVal) {
      showAlert("Please enter any numbers !");
      return;
    }

    const numbers = evenNumbersInputVal
      .split(",")
      .map((num) => parseInt(num.trim(), 10));

    const evenNumbers = numbers.filter((num) => !isNaN(num) && num % 2 === 0);
    $("#evenNumbersResult").removeClass("d-none");
    if (evenNumbers.length > 0) {
      $("#evenNumbersResult").html(
        `<span>Even Numbers : </span> ${evenNumbers.join(", ")}`
      );
    } else if (numbers.some((num) => isNaN(num))) {
      showAlert("Please enter only numbers ...");
    } else {
      $("#evenNumbersResult").html(`<span>No even numbers found... </span>`);
    }
  });
  /*FIND EVEN NUMBERS */

  /*SORTING NUMBERS */
  $("#sortingNumbersSubmit").click(function () {
    const sortingNumbersInputVal = $("#sortingNumbersInput").val();
    if (!sortingNumbersInputVal) {
      showAlert("Please enter any numbers !");
      return;
    }
    const numbers = sortingNumbersInputVal
      .split(",")
      .map((num) => parseInt(num.trim(), 10));

    const ascendingNumbers = [...numbers].sort((a, b) => a - b);
    $("#sortingNumbersResult").removeClass("d-none");

    if (ascendingNumbers.length > 0) {
      $("#sortingNumbersResult").html(
        `<span>Numbers sorted : </span> ${ascendingNumbers.join(" < ")}`
      );
    }
    if (numbers.some((num) => isNaN(num))) {
      showAlert("Please enter only numbers ...");
    }
  });
  /*SORTING NUMBERS */
});
