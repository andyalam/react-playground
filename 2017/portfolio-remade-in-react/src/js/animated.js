'use strict';

var animated = {
    animationNames: [],
    timingFunctions: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "initial", "inherit", "infinite"],
    createAnimation: function (name, steps, stepProperties) {
        var keyframeProperties = [];
        if (steps instanceof Array) {
            if (stepProperties instanceof Array) {
                for (var i = 0; i < steps.length; i++) {
                    keyframeProperties.push(steps[i] + "{" + stepProperties[i] + "}");
                }
                var animation = '@keyframes ' + name + '{' + keyframeProperties.toString().replace(/,/g, ' ') + '}' + '-webkit-@keyframes ' + name + '{' + keyframeProperties.toString().replace(/,/g, ' ') + '}';
            } else {
                alert("The stepProperties must be in array format.");
            }
        } else {
            alert("The steps must be in array format.");
        }
        if ($("style").length == 0) {
            var style = "<style>" + animation + "</style>";
            $('head').append(style);
        } else {
            $("style").append(animation);
        }
    },
    createTransition: function (element, target, duration, timingFunction, delay) {
        var timingFunctions = this.timingFunctions,
            el = document.querySelectorAll(element);
        if (el.length > 0) {
            if (typeof duration == "number") {
                if ($.inArray(timingFunction, timingFunctions) != -1) {
                    if (typeof delay == "number") {
                        var transition = element + "{transition:" + target + " " + duration + "s " + timingFunction + " " + delay + "s; -webkit-transition:" + target + " " + duration + "s " + timingFunction + " " + delay + "s;}";
                    } else if (!delay) {
                        var transition = element + "{transition:" + target + " " + duration + "s " + timingFunction + "; -webkit-transition:" + target + " " + duration + "s " + timingFunction + ";}";
                    } else {
                        alert("The delay parameter must be a number.");
                    }
                } else if (timingFunction.substring(0, 13) == "cubic-bezier(") {
                    if (typeof delay == "number") {
                        var transition = element + "{transition:" + target + " " + duration + "s " + timingFunction + " " + delay + "s; -webkit-transition:" + target + " " + duration + "s " + timingFunction + " " + delay + "s;}";
                    } else if (!delay) {
                        var transition = element + "{transition:" + target + " " + duration + "s " + timingFunction + "; -webkit-transition:" + target + " " + duration + "s " + timingFunction + ";}";
                    }
                } else {
                    alert("Invalid timing function selected.");
                }
            } else {
                alert("The duration parameter must be a number.");
            }
        } else {
            alert("The selected element does not exist in the page.");
        }
        if ($("style").length == 0) {
            var style = "<style>" + transition + "</style>";
            $('head').append(style);
        } else {
            $("style").append(transition);
        }
    },
    animate: function (target, animationName, duration, timingFunction) {
        var selectedAnim = this.animationNames,
            timingFunctions = this.timingFunctions,
            el = document.querySelectorAll(target);
        if (el.length > 0) {
            if ($.inArray(animationName, selectedAnim) != -1) {
                if (typeof duration === "number") {
                    if ($.inArray(timingFunction, timingFunctions) != -1) {
                        $(el).each(function () {
                            this.setAttribute("style", "animation: " + animationName + " " + duration + "s " + timingFunction + "; -webkit-animation: " + animationName + " " + duration + "s " + timingFunction);
                        });
                    } else if (timingFunction.substring(0, 13) == "cubic-bezier(") {
                        $(target).attr("style", "animation: " + animationName + " " + duration + "s " + timingFunction + "; -webkit-animation: " + animationName + " " + duration + "s " + timingFunction);
                    } else {
                        alert("Invalid timing function selected.");
                    }
                } else {
                    alert("The selected duration is not a number, please specify the amount of seconds as a number.");
                }
            } else {
                alert("Invalid animation selected.");
            }
        } else {
            alert("The selected target element does not exist.");
        }
    }
};