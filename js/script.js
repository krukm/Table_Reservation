"use strict";

$(document).ready (() => {

    let currentTable = null;
    const reservationList = [];

    addTables();
    $(".modal_form").hide();
    $(".display_reserved").hide();

    $(document).on("click", ".availible", (e) => {
        currentTable = $(e.target);
        $("form p").html(`<span>Table Number: ${$(e.target).text()}</span>`);
        $(".modal_form").fadeIn(500);
    });

    $(document).on("click", "#save, #close", (e) => {
        $(".modal_form").fadeOut();
        if ($(e.target).attr("id") === "save") {
            reservationList.push(new Reservation($("#name").val(), $("#phone").val(), $("#no_guests").val(), currentTable.text()));
            currentTable.toggleClass("availible reserved");
        }
    });

    $(document).on("mouseenter", ".tables .reserved", (e) => {
        for(let i = 0; i < reservationList.length; i++) {
            if ($(e.target).attr("id") === reservationList[i].table) {
                $(".display_reserved")
                .find("p:first-child")
                .text(`Name: ${reservationList[i].name}`);
                $(".display_reserved")
                .find("p:nth-child(2)")
                .text(`Size of Party: ${reservationList[i].no_guests}`);
                $(".display_reserved").appendTo($(e.target));
                console.log();
                //$(e.target).append();
                $(".display_reserved").fadeIn();
            }
        }
    }).on("mouseleave", ".tables .reserved", (e)=> {
        $(".display_reserved").fadeOut();
    });



    function addTables () {
        for (let i = 1; i < 10; i++) {
            $(".tables").append(`<section class="availible" id="${i}" >${i}</section>`);
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