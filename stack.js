
"use strict";

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }
}

const stack = new Stack();

$(document).ready(function () {

    function displayStack() {
        $("#stack").empty();

        for (let i = stack.items.length - 1; i >= 0; i--) {
            const block = $("<div>")
                .addClass("stack-block")
                .text(stack.items[i]);

            $("#stack").append(block);
        }
    }

    $("#pushBtn").click(function () {
        const value = $("#stackInput").val().trim();

        if (value === "") {
            $("#message").text("Please enter a value.");
            return;
        }

        stack.push(value);
        displayStack();

        $("#message").text("Pushed: " + value);
        $("#stackInput").val("");
    });

    $("#popBtn").click(function () {
        if (stack.isEmpty()) {
            $("#message").text("Stack is empty. Nothing to pop.");
            return;
        }

        const removed = stack.pop();

        const block = $("<div>")
            .addClass("deleted-block")
            .text(removed);

        $("#deleted").prepend(block);

        displayStack();
        $("#message").text("Popped: " + removed);
    });

    $("#peekBtn").click(function () {
        if (stack.isEmpty()) {
            $("#message").text("Stack is empty. Nothing to peek.");
            return;
        }

        displayStack();

        $("#stack .stack-block").first().addClass("peeked");

        $("#message").text("Top value: " + stack.peek());
    });

    $("#clearBtn").click(function () {
        stack.clear();

        $("#stack").empty();
        $("#deleted").empty();

        $("#message").text("Stack has been cleared.");
        $("#stackInput").val("");
    });

});
