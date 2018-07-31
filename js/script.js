"use strict";

let currentTable;

$(document).ready (() => {

    $(".modal_form").hide();

    $(document).on("click", ".availible", (e) => {
        currentTable = $(e.target);
        $("form p").html(`<span>Table Number: ${$(e.target).text()}</span>`);
        $(".modal_form").show();
    });

    $(document).on("click", "#close", () => {
        $(".modal_form").hide();
    });

    $(document).on("click", "#save", () => {
        currentTable.toggleClass("availible reserved");
        $(".modal_form").hide();
    });

});