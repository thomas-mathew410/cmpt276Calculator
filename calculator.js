
var act1_weight_Val = 0.0;
var act1_numerator_Val = 0.0;
var act1_denominator_Val = 0.0;

var act2_weight_Val = 0.0;
var act2_numerator_Val = 0.0;
var act2_denominator_Val = 0.0;

var act3_weight_Val = 0.0;
var act3_numerator_Val = 0.0;
var act3_denominator_Val = 0.0;

var act4_weight_Val = 0.0;
var act4_numerator_Val = 0.0;
var act4_denominator_Val = 0.0;

var act1_Percent = 0.0;
var act2_Percent = 0.0;
var act3_Percent = 0.0;
var act4_Percent = 0.0;

var mean_Percent = 0.0;
var weighted_Percent = 0.0;

// var denominator_Array = [0, 0, 0, 0];

var percentage = 0.0;


document.querySelector("#act1_weight").addEventListener("keyup", function() {
    act1_weight_Val = parseFloat(document.querySelector("#act1_weight").value);
    if(!isFinite(act1_weight_Val)) {
        act1_weight_Val = 0.0;}
});

document.querySelector("#act1_numerator").addEventListener("keyup", function() {
    act1_numerator_Val = parseFloat(document.querySelector("#act1_numerator").value);
    act1_Percent = calculatePercent(act1_numerator_Val, act1_denominator_Val);
    document.querySelector("#act1_percent").innerHTML = act1_Percent.toFixed(2)+"%";
});

document.querySelector("#act1_denominator").addEventListener("keyup", function() {
    act1_denominator_Val = parseFloat(document.querySelector("#act1_denominator").value);
    act1_Percent = calculatePercent(act1_numerator_Val, act1_denominator_Val);
    // denominator_Array[0] = act1_denominator_Val;
    document.querySelector("#act1_percent").innerHTML = act1_Percent.toFixed(2)+"%";
});

document.querySelector("#act2_weight").addEventListener("keyup", function() {
    act2_weight_Val = parseFloat(document.querySelector("#act2_weight").value);
    if(!isFinite(act2_weight_Val)) { 
        act2_weight_Val = 0.0;}
});

document.querySelector("#act2_numerator").addEventListener("keyup", function() {
    act2_numerator_Val = parseFloat(document.querySelector("#act2_numerator").value);
    act2_Percent = calculatePercent(act2_numerator_Val, act2_denominator_Val);
    document.querySelector("#act2_percent").innerHTML = act2_Percent.toFixed(2)+"%";
});

document.querySelector("#act2_denominator").addEventListener("keyup", function() {
    act2_denominator_Val = parseFloat(document.querySelector("#act2_denominator").value);
    act2_Percent = calculatePercent(act2_numerator_Val, act2_denominator_Val);
    // denominator_Array[1] = act2_denominator_Val;
    document.querySelector("#act2_percent").innerHTML = act2_Percent.toFixed(2)+"%";
});

document.querySelector("#act3_weight").addEventListener("keyup", function() {
    act3_weight_Val = parseFloat(document.querySelector("#act3_weight").value);
    if(!isFinite(act3_weight_Val)) {
        act3_weight_Val = 0.0;}
});

document.querySelector("#act3_numerator").addEventListener("keyup", function() {
    act3_numerator_Val = parseFloat(document.querySelector("#act3_numerator").value);
    act3_Percent = calculatePercent(act3_numerator_Val, act3_denominator_Val);
    document.querySelector("#act3_percent").innerHTML = act3_Percent.toFixed(2)+"%";

});

document.querySelector("#act3_denominator").addEventListener("keyup", function() {
    act3_denominator_Val = parseFloat(document.querySelector("#act3_denominator").value);
    act3_Percent = calculatePercent(act3_numerator_Val, act3_denominator_Val);
    // denominator_Array[2] = act2_denominator_Val;
    document.querySelector("#act3_percent").innerHTML = act3_Percent.toFixed(2)+"%";
});

document.querySelector("#act4_weight").addEventListener("keyup", function() {
    act4_weight_Val = parseFloat(document.querySelector("#act4_weight").value);
    if(!isFinite(act4_weight_Val)){ 
        act4_weight_Val = 0.0;}
});

document.querySelector("#act4_numerator").addEventListener("keyup", function() {
    act4_numerator_Val = parseFloat(document.querySelector("#act4_numerator").value);
    act4_Percent = calculatePercent(act4_numerator_Val, act4_denominator_Val);
    document.querySelector("#act4_percent").innerHTML = act4_Percent.toFixed(2)+"%";

});

document.querySelector("#act4_denominator").addEventListener("keyup", function() {
    act4_denominator_Val = parseFloat(document.querySelector("#act4_denominator").value);
    // denominator_Array[3] = act3_denominator_Val;
    act4_Percent = calculatePercent(act4_numerator_Val, act4_denominator_Val);
    document.querySelector("#act4_percent").innerHTML = act4_Percent.toFixed(2)+"%";
});

function calculatePercent(numerator, denominator) {
    if(denominator <= 0 || !isFinite(denominator)) {
        percentage = 0;
    }
    else {
        percentage = (numerator/denominator) * 100;
    }
    return percentage;
}

document.querySelector("#weighted_result").addEventListener("click", function () {
    var sum_Weight = act1_weight_Val+act2_weight_Val+act3_weight_Val+act4_weight_Val;    
    if(sum_Weight > 0) {
        weighted_Percent = ((act1_Percent*act1_weight_Val) + (act2_Percent*act2_weight_Val) + (act3_Percent*act3_weight_Val) + (act4_Percent*act4_weight_Val))/sum_Weight;
    }
    document.querySelector("#grade_Result").innerHTML = "The weighted mean in percentage is " + weighted_Percent.toFixed(2)+"%";
})

document.querySelector("#mean_result").addEventListener("click", function () {
    var counter = 0;
    mean_Percent = 0;
    if(act1_denominator_Val > 0) {
        counter = counter + 1;
    }
    if(act2_denominator_Val > 0) {
        counter = counter + 1;
    }
    if(act3_denominator_Val > 0) {
        counter = counter + 1;
    }
    if(act4_denominator_Val > 0) {
        counter = counter + 1;
    }
    mean_Percent = (act1_Percent + act2_Percent + act3_Percent + act4_Percent)/counter;
    if(!isFinite(mean_Percent)) {
        mean_Percent = 0;
    }
    document.querySelector("#grade_Result").innerHTML = "The mean in percentage is " + mean_Percent.toFixed(2)+"%";
})

document.querySelector("#reset_Fields").addEventListener("click", function () {
    act1_weight_Val = 0.0;
    act1_numerator_Val = 0.0;
    act1_denominator_Val = 0.0;

    act2_weight_Val = 0.0;
    act2_numerator_Val = 0.0;
    act2_denominator_Val = 0.0;

    act3_weight_Val = 0.0;
    act3_numerator_Val = 0.0;
    act3_denominator_Val = 0.0;

    act4_weight_Val = 0.0;
    act4_numerator_Val = 0.0;
    act4_denominator_Val = 0.0;

    act1_Percent = 0.0;
    act2_Percent = 0.0;
    act3_Percent = 0.0;
    act4_Percent = 0.0;

    mean_Percent = 0.0;
    weighted_Percent = 0.0;

    document.querySelector("#grade_Result").innerHTML = "";
    document.querySelector("#act1_weight").value = '';
    document.querySelector("#act2_weight").value = '';
    document.querySelector("#act3_weight").value = '';
    document.querySelector("#act4_weight").value = '';

    document.querySelector("#act1_numerator").value = '';
    document.querySelector("#act2_numerator").value = '';
    document.querySelector("#act3_numerator").value = '';
    document.querySelector("#act4_numerator").value = '';

    document.querySelector("#act1_denominator").value = '';
    document.querySelector("#act2_denominator").value = '';
    document.querySelector("#act3_denominator").value = '';
    document.querySelector("#act4_denominator").value = '';

    document.querySelector("#act1_percent").innerHTML = "";
    document.querySelector("#act2_percent").innerHTML = "";
    document.querySelector("#act3_percent").innerHTML = "";
    document.querySelector("#act4_percent").innerHTML = "";
})