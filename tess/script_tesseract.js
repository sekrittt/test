// document.getElementById("ocr_url").value = ""; // Сбрасываем форму после перезагрузки
// var control = document.getElementById("ocr_url");
// control.addEventListener("change", function() {
//     var files = control.files;
//     document.getElementById("ocr_button").addEventListener("click", function() {
//         document.getElementById("ocr_result").innerHTML  = "Идет распознавание текста...";
//         Tesseract.recognize(files[0].name).then(function(result) {
//             console.log(document.getElementById("sel").value);
//             lang: document.getElementById("sel").value; // Язык текста
//         }).then(function(result) {
//             document.getElementById("ocr_result").innerHTML  = result.text;
//         });
//     });
// });
document.getElementById("ocr_url").value = ""; // Сбрасываем форму после перезагрузки
var control = document.getElementById("ocr_url");
control.addEventListener("change", function() {
	var files = control.files;
	document.getElementById("ocr_button").addEventListener("click", function() {
		document.getElementById("ocr_result").innerHTML  = "Идет распознавание текста...";
		Tesseract.recognize(files[0].name).then(function(result) {
		    document.getElementById("ocr_result").innerHTML  = result.text; 
	}   );
	});
});