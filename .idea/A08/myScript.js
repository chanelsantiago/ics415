/**
 * Created by chanelsantiago on 9/26/15.
 */
console.log()
$(document).ready(function() {
  $(".ans").hide();

  $("button").mouseenter(function() {
    this.style.color = "royalblue";
  })

  $("button").mouseleave(function() {
    this.style.color = "black";
  })

  $("#faq1").click(function() {
    $("#ans1").toggle();
    if ($(this).text() === '1) What airlines do you have a reservation with? (+)') {
      $(this).text('1) What airlines do you have a reservation with? (-)');
    }
    else {
      $(this).text('1) What airlines do you have a reservation with? (+)');
    }
    this.style.fontSize = '16px';
    this.style.fontWeight = 'bold';
  })

  $("#faq2").click(function() {
    $("#ans2").toggle();
    if ($(this).text() === '2) Where will I be staying? (+)') {
      $(this).text('2) Where will I be staying? (-)');
    }
    else {
      $(this).text('2) Where will I be staying? (+)');
    }
    this.style.fontSize = '16px';
    this.style.fontWeight = 'bold';
  })

  $("#faq3").click(function() {
    $("#ans3").toggle();
    if ($(this).text() === '3) How many days will I be at Disneyland? (+)') {
      $(this).text('3) How many days will I be at Disneyland? (-)');
    }
    else {
      $(this).text('3) How many days will I be at Disneyland? (+)');
    }
    this.style.fontSize = '16px';
    this.style.fontWeight = 'bold';
  })

  $("#faq4").click(function() {
    $("#ans4").toggle();
    if ($(this).text() === '4) When do you leave? (+)') {
      $(this).text('4) When do you leave? (-)');
    }
    else {
      $(this).text('4) When do you leave? (+)');
    }
    this.style.fontSize = '16px';
    this.style.fontWeight = 'bold';
  })

  $("#faq5").click(function() {
    $("#ans5").toggle();
    if ($(this).text() === '5) When do you return? (+)') {
      $(this).text('5) When do you return? (-)');
    }
    else {
      $(this).text('5) When do you return? (+)');
    }
    this.style.fontSize = '16px';
    this.style.fontWeight = 'bold';
  })

  $("#submit").click(function(e) {
    var url = $("#url").val();
    $.ajax({
      url      : url,
      dataType : 'html',
      success  : function (data) {
        var links = $(data).find('a'),
            count = links.length;
        $("#results").text("Number of Links: " + count);
      },
      error    : function () {
        alert("Page Not Accessible.");
      }
    });
    e.preventDefault();
  })
})


