$(document).ready(function() {
  //For Row Widget

  $("row").each(function() {
    var row_align = $(this).attr("mainAxisAlignment");
    let row_alignmentValue = "normal";
    var row_padding = $(this).attr("padding");
    let row_InsetPadding = "0px";
    var row_debug = $(this).attr("debug");
    let row_showBgColor = "transparent";
    let row_showBorder = "none";

    if (row_align != undefined || row_align != "")
      row_alignmentValue = row_align;

    if (row_padding != undefined || row_padding != "")
      row_InsetPadding = row_padding;

    if (row_debug != undefined || row_debug == "" || row_debug == "hidden") {
      row_showBgColor = "#fbfbfb";
      row_showBorder = "1px solid #dadce0";
      $(this).prepend("<div class='show_row'>row</div>");
    }

    $(this).css({
      "flex-flow": "row wrap",
      "justify-content": row_alignmentValue,
      padding: row_padding,
      border: row_showBorder,
      "background-color": row_showBgColor
    });
  });

  //For Column Widget

  $("column").each(function() {
    var column_align = $(this).attr("mainAxisAlignment");
    let column_alignmentValue = "normal";
    var column_padding = $(this).attr("padding");
    let column_InsetPadding = "0px";
    var column_debug = $(this).attr("debug");
    let column_showBgColor = "transparent";
    let column_showBorder = "none";

    if (column_align != undefined || column_align != "")
      column_alignmentValue = column_align;

    if (column_padding != undefined || column_padding != "")
      column_InsetPadding = column_padding;

    if (
      column_debug != undefined ||
      column_debug == "" ||
      column_debug == "hidden"
    ) {
      column_showBgColor = "#fbfbfb";
      column_showBorder = "1px solid #dadce0";
      $(this).prepend("<div class='show_row'>column</div>");
    }

    $(this).css({
      "align-items": column_align,
      padding: column_padding,
      border: column_showBorder,
      "background-color": column_showBgColor
    });
  });

  //For margin Widget

  $("margin").each(function() {
    var marginLeft = $(this).attr("left");
    let marginLeftValue = "0px";
    var marginRight = $(this).attr("right");
    let marginRightValue = "0px";
    var marginTop = $(this).attr("top");
    let marginTopValue = "0px";
    var marginBottom = $(this).attr("bottom");
    let marginBottomValue = "0px";

    if (marginLeft != undefined || marginLeft != "")
      marginLeftValue = marginLeft;
    if (marginRight != undefined || marginRight != "")
      marginRightValue = marginRight;
    if (marginTop != undefined || marginTop != "") marginTopValue = marginTop;
    if (marginBottom != undefined || marginBottom != "")
      marginBottomValue = marginBottom;

    $(this).css({
      "margin-left": marginLeftValue,
      "margin-right": marginRightValue,
      "margin-top": marginTopValue,
      "margin-bottom": marginBottomValue
    });
  });

  $("appBar").each(function() {
    var appBarElevation = $(this).attr("elevation");
    let appBarElevationValue = "2px";
    var appBarColor = $(this).attr("color");
    let appBarColorValue = "#fff";
    var appBarHeight = $(this).attr("height");
    let appBarHeightValue = "60px";

    if (appBarElevation != undefined || appBarElevation != "")
      appBarElevationValue = appBarElevation;
    if (appBarColor != undefined || appBarColor != "")
      appBarColorValue = appBarColor;
    if (appBarHeight != undefined || appBarHeight != "")
      appBarHeightValue = appBarHeight;

    $(this).css({
      "box-shadow": "0px " + appBarElevationValue + " 4px rgba(0,0,0,0.1)",
      "background-color": appBarColorValue,
      height: appBarHeightValue
    });
  });
});
