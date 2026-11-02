"use strict";

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    clear() {
        this.items = [];
    }
}

const queue = new Queue();

$(document).ready(function () {

    function displayQueue() {
        $("#queue").empty();

        queue.items.forEach(function (value, index) {
            const block = $("<div>")
                .addClass("queue-block")
                .text(value);

            if (index === 0) {
                block.addClass("front-item");
            }

            if (index === queue.items.length - 1) {
                block.addClass("rear-item");
            }

            $("#queue").append(block);
        });
    }

    $("#enqueueBtn").click(function () {
        const value = $("#queueInput").val().trim();

        if (value === "") {
            $("#message").text("Please enter a value.");
            return;
        }

        queue.enqueue(value);
        displayQueue();

        $("#message").text("Enqueued: " + value);
        $("#queueInput").val("");
    });

    $("#dequeueBtn").click(function () {
        if (queue.isEmpty()) {
            $("#message").text("Queue is empty. Nothing to dequeue.");
            return;
        }

        const removed = queue.dequeue();

        $("#deleted").prepend(
            $("<div>").addClass("deleted-block").text(removed)
        );

        displayQueue();
        $("#message").text("Dequeued: " + removed);
    });

    $("#peekBtn").click(function () {
        if (queue.isEmpty()) {
            $("#message").text("Queue is empty. Nothing to peek.");
            return;
        }

        displayQueue();
        $("#queue .queue-block").first().addClass("peeked");

        $("#message").text("Front value: " + queue.peek());
    });

    $("#clearBtn").click(function () {
        queue.clear();

        $("#queue").empty();
        $("#deleted").empty();
        $("#message").text("Queue has been cleared.");
        $("#queueInput").val("");
    });

});
