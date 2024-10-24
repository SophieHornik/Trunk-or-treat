$(document).ready(function() {
  $(".slide").hide();
    $(".MI").click(function() {
      $(".slide").toggle();
    });
    $(".three").hide();
    $(".s1").click(function() {
      $(".three").slideToggle();
    });
    $(".four").hide();
    $(".s2").click(function() {
      $(".four").slideToggle();
    });
    $(".six").hide();
    $(".s3").click(function() {
      $(".six").slideToggle();
    });
      $(".galpic1").hide();
    $(".TS").mouseenter(function() {
        $(".galpic1").fadeIn();
      }).mouseleave(function() {
        $(".galpic1").fadeOut();
      });
      $(".galpic2").hide();
      $(".CL").mouseenter(function() {
        $(".galpic2").fadeIn();
      }).mouseleave(function() {
        $(".galpic2").fadeOut();
      });
      $(".galpic3").hide();
      $(".JP").mouseenter(function() {
        $(".galpic3").fadeIn();
      }).mouseleave(function() {
        $(".galpic3").fadeOut();
      });
      $(".galpic4").hide();
      $(".Oz").mouseenter(function() {
        $(".galpic4").fadeIn();
      }).mouseleave(function() {
        $(".galpic4").fadeOut();
      });
      $(".galpic5").hide();
      $(".Santa").mouseenter(function() {
        $(".galpic5").fadeIn();
      }).mouseleave(function() {
        $(".galpic5").fadeOut();
      });
      $(".galpic6").hide();
      $(".Science").mouseenter(function() {
        $(".galpic6").fadeIn();
      }).mouseleave(function() {
        $(".galpic6").fadeOut();
      });
       $(".galpic6").hide();
      $(".Science").mouseenter(function() {
        $(".galpic6").fadeIn();
      }).mouseleave(function() {
        $(".galpic6").fadeOut();
      });
  });