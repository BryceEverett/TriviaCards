$(document).ready(() => {
  $(".hint-box").on("click", () => {
    $(".hint").slideToggle(300);
  });

  $(".wrong-answer-one").on("click", () => {
    $(".wrong-text-one").fadeOut("slow");
    $(".frown").fadeIn(2000);
  });

  $(".wrong-answer-two").on("click", () => {
    $(".wrong-text-two").fadeOut("slow");
    $(".frown").fadeIn(2000);
  });

  $(".wrong-answer-three").on("click", () => {
    $(".wrong-text-three").fadeOut("slow");
    $(".frown").fadeIn(2000);
  });

  $(".correct-answer").on("click", () => {
    $(".frown").fadeOut("fast");
    $(".smiley").fadeIn(2000);
    $(".wrong-text-three").fadeOut("slow");
    $(".wrong-text-two").fadeOut("slow");
    $(".wrong-text-one").fadeOut("slow");
  });
});
