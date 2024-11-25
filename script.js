$(document).ready(function () {
  /* CLEAR BUTTON */
  $(".button__clear").click(function () {
    $(".card__input").val("");
    $(".row__result__result").html("");
  });
  /* CLEAR BUTTON */

  /* ALERT POPUP */
  function showAlert(message) {
    // Mesajı ayarla
    $("#alertMessage").text(message);
  
    // Modal'ı göster
    $("#customAlert").removeClass("hidden");
  }
  
  // Kapatma butonuna tıklandığında modal'ı gizle
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
});
