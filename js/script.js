"use strict";

$(document).ready (() => {

    let currentTable = null;
    const reservationList = [];

    addTables();
    $(".modal_form").hide();

    $(document).on("click", ".availible", (e) => {
        currentTable = $(e.target);
        $("form p").html(`<span>Table Number: ${$(e.target).text()}</span>`);
        $(".modal_form").fadeIn(500);
    });

    $(document).on("click", "#save, #close", (e) => {
        $(".modal_form").fadeOut(500);
        if ($(e.target).attr("id") === "save") {
            reservationList.push(new Reservation($("#name").val(), $("#phone").val(), $("#no_guests").val(), currentTable.text()));
            currentTable.toggleClass("availible reserved");
        }
    });

    $(document).on("mouseenter mouseout", ".tables .reserved", (e) => {
        for(let i = 0; i < reservationList.length; i++) {
            if ($(e.target).text() === reservationList[i].table) {
                $(e.target).prepend(`<section class="display_reserved"></section>`);
                $(".display_reserved").text(`Name: ${reservationList[i].name} Size of Party: ${reservationList[i].no_guests}`);
            } else {
                $(".display_reserved").hide();
            }
        }
    });



    function addTables () {
        for (let i = 1; i < 10; i++) {
            $(".tables").append(`<section class="availible">${i}</section>`);
        }
    }

    class Reservation {
        constructor (name, phone, no_guests, table) {
            this.name = name;
            this.phone = phone;
            this.no_guests = no_guests;
            this.table = table;
        }
    }
});