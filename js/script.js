const STORE = {
 questions: {
  accessibility: [
   {
    question: "Lang xususiyati nima uchun ishlatiladi?",
    code: `&lt;html lang="en"&gt;`,
    answers: [
     "Sahifaning qaysi HTML versiyasidan foydalanishini belgilash uchun",
     "CSS xususiyatlari uchun chiziqli burchakni aniqlash",
     "Sahifani faqat ma'lum hududlarda ko'rishni cheklash",
     "Qidiruv tizimlari tomonidan tilga xos natijalarni qaytarish uchun ishlatiladi"
    ],
    correctAnswer: "Qidiruv tizimlari tomonidan tilga xos natijalarni qaytarish uchun ishlatiladi"
   },{
    question: "<ol></ol> va <ul></ul> taglari ichida qanday teglardan foydalanib bo'lmaydi?",
    code: `<ul></ul> `,
    answers: [
     "Barcha taglardan foydalansa bo'ladi.",
     "<div></div>,<h1></h1>,<i></i>,",
     "<section></section>,<nav></nav,<u></u>",
     "Bu taglar ichida faqat <li></li> taglaridan foydalansa bo'ladi boshqa taglardan foydlanib bo'lmaydi."
    ],
    correctAnswer: "Bu taglar ichida faqat <li></li> taglaridan foydalansa bo'ladi boshqa taglardan foydlanib bo'lmaydi."
   },{
    question: "Console ga nima chiqadi",
    code: `console.log('1'+'1')`,
    answers: [
     "1",
     "To'g'ri javob yo'q",
     "2",
     "11"
    ],
    correctAnswer: "11"
   },{
    question: "CSS da elementlarga necha xil usulda style bersa bo'ladi?",
    code: ``,
    answers: [
     "5 ta",
     "9 ta",
     "3 ta bular External CSS Internal CSS Inline CSS",
     "15 ta "
    ],
    correctAnswer: "3 ta bular External CSS Internal CSS Inline CSS"
   },{
    question: "Dastur qanday natija chiqaradi ",
    code: `function sum(num1,num2 = num1){
        console.log(num1 + num2);
    }
     sum(10)
    `,
    answers: [
     "20",
     "NaN",
     "Type Error",
     "undefined"
    ],
    correctAnswer: "20"
   }
  ],
  arrays: [
   {
    question: "Console ga nima chiqadi",
    code:
     `
     let a = 3;
     let b = new Number(3);
     let c = 3

     console.log(a == b)
     console.log(a === b)
     console.log(b === c)
    `,
    answers: [
     "true false true",
     "false false true",
     "true flase true",
     "False false false",
    ],
    correctAnswer: "true false true"
   },{
    question: "Massiv oxiriga qanday qiymat qo'shamiz?",
    code: `let arr = 
['a','b','c','d','e']`,
    answers: [
     "arr.pop('f')",
     "arr.append('f')",
     "arr.add('f')",
     "arr.push('f')"
    ],
    correctAnswer: "arr.push('f')"
   },{
    question: "Massivning oxirgi qiymatini olib tashlash va qaytarish uchun nimadan foydalanamiz?",
    code: `let arr = 
[3,1,4,1,5,9]`,
    answers: [
     "arr.remove(9)",
     "arr.grep('9')",
     "arr.shift()",
     "arr.pop()"
    ],
    correctAnswer: "arr.pop()"
   },{
    question: "Quyidagi massivning uzunligini qanday topamiz?",
    code: `let arr = 
[23,1,943,81,-52,3.14159]`,
    answers: [
     "arr.depth()",
     "arr.index",
     "arr.shift()",
     "arr.length"
    ],
    correctAnswer: "arr.length"
   },{
    question: "Quyidagi massivdagi 9 qiymati qaysi indeksda?",
    code: `let arr = 
[23,1,943,81,9,3.14159]`,
    answers: [
     "2",
     "3",
     "5",
     "4"
    ],
    correctAnswer: "4"
   }
  ],
  elements: [
   {
    question: "HTML sahifasi uchun zarur bo'lgan 3 ta asosiy element nima?",
    code: ``,
    answers: [
     "&lt;header&gt;, &lt;main&gt;, &lt;footer&gt;",
     "&lt;start&gt;, &lt;middle&gt;, &lt;end&gt;",
     "&lt;html&gt;, &lt;body&gt;, &lt;script&gt;",
     "&lt;html&gt;, &lt;head&gt;, &lt;body&gt;"
    ],
    correctAnswer: "&lt;html&gt;, &lt;head&gt;, &lt;body&gt;"
   },{
    question: "Qaysi HTML elementi eng katta sarlavha va odatda faqat bir marta ishlatilishi kerak?",
    code: ``,
    answers: [
     "&lt;heading&gt;",
     "&lt;title&gt;",
     "&lt;h6&gt;",
     "&lt;h1&gt;"
    ],
    correctAnswer: "&lt;h1&gt;"
   },{
    question: "Qaysi HTML elementi qator uzilishi hosil qiladi?",
    code: `
&lt;p&gt;The quick brown fox... 
&lt;tag&gt;jumped over the lazy dogs&lt;/p&gt;`,
    answers: [
     "&lt;break&gt;",
     "&lt;hr&gt;",
     "&lt;lb&gt;",
     "&lt;br&gt;"
    ],
    correctAnswer: "&lt;br&gt;"
   },{
    question: "HTML havolasini qanday yaratamiz?",
    code: ``,
    answers: [
     "&lt;link href='test.com'&gt;Test.com&lt;/link&gt;",
     "&lt;a src='test.com'&gt;Test.com&lt;/a&gt;",
     "&lt;href url='test.com'&gt;Test.com&lt;/href&gt;",
     "&lt;a href='test.com'&gt;Test.com&lt;/a&gt;"
    ],
    correctAnswer: "&lt;a href='test.com'&gt;Test.com&lt;/a&gt;"
   },{
    question: "Bu elementlarning qaysi biri &lt;jadval&gt; elementlar?",
    code: 
`&lt;table&gt;
 ... 
&lt;/table&gt;`,
    answers: [
     "&lt;thead&gt;, &lt;th&gt;, &lt;cell&gt;",
     "&lt;thead&gt;, &lt;tbody&gt;, &lt;row&gt;",
     "&lt;tbody&gt;, &lt;tr&gt;, &lt;cell&gt;",
     "&lt;thead&gt;, &lt;tr&gt;, &lt;td&gt;"
    ],
    correctAnswer: "&lt;thead&gt;, &lt;tr&gt;, &lt;td&gt;"
   }
  ],
  flexbox: [
   {
    question: "Flexbox nima?",
    code: ``,
    answers: [
     "Javob beruvchi dizayn uchun JavaScript kutubxonasi",
     "Moslashuvchan tarkibga ruxsat beruvchi HTML belgisi",
     "Semantik HTML yaratish uchun rivojlanish yondashuvi",
     "A collection of CSS properties for ease of page layouts"
    ],
    correctAnswer: "A collection of CSS properties for ease of page layouts"
   },{
    question: "Flexbox-dan foydalanish uchun biz konteynerni flexbox sifatida belgilaymiz. Buni amalga oshirish uchun CSS nima?",
    code: 
`.flex-container {
 ...
}`,
    answers: [
     "position: flex",
     "display: flexbox",
     "float: flexbox",
     "display: flex"
    ],
    correctAnswer: "display: flex"
   },{
    question: "flex-basis nimani belgilaydi ...?",
    code: 
`.flex-item {
 flex-basis: 20px;
}`,
    answers: [
     "Egiluvchan elementning asosi",
     "Egiluvchan elementning chegarasi",
     "Moslashuvchan elementning dadilligi",
     "Moslashuvchan elementning dastlabki o'lchami"
    ],
    correctAnswer: "Moslashuvchan elementning dastlabki o'lchami"
   },{
    question: "Moslashuvchan yo'nalish uchun qanday qiymatlardan foydalanishimiz mumkin?",
    code: 
`.flex-container {
 flex-direction: ...
}`,
    answers: [
     "flex-start, flex-end, space-between, space-around",
     "start, center, end, space-evenly",
     "horizontal, vertical, reverse-horizontal, reverse-vertical",
     "row, row-reverse, column, column-reverse"
    ],
    correctAnswer: "row, row-reverse, column, column-reverse"
   },{
    question: "Moslashuvchan elementlar uchun CSS xususiyati tartibi sizga nima qilish imkonini beradi?",
    code: 
`.flex-item {
 order: ...
}`,
    answers: [
     "Egiluvchan elementlar paydo bo'ladigan yo'nalishni belgilang",
     "Har bir moslashuvchan element qachon yuklanganligini aniqlang",
     "Moslashuvchan elementlarni turli qiymatlar bo'yicha tartiblang (alifbo tartibida, raqamli)",
     "Moslashuvchan elementlarning qaysi tartibda paydo bo'lishini belgilang"
    ],
    correctAnswer: "Moslashuvchan elementlarning qaysi tartibda paydo bo'lishini belgilang"
   }
  ],
  forms: [
   {
    question: "Shakl uchun qaysi ikkita eng muhim atribut deb hisoblanadi?",
    code: `
&lt;form ...&gt;
&lt;/form&gt;`,
    answers: [
     "lang, process",
     "before, after",
     "id, class",
     "method, action"
    ],
    correctAnswer: "method, action"
   },{
    question: "HTML da yozuvlarni formatlash kodlarni ko'rsating.",
    code: `&lt;input type='...'&gt;`,
    answers: [
     "&<i></i>",
     "&<ul></ul>",
     "&<nav></nav>",
     "&<main></main>",
    ],
    correctAnswer: "&<i></i>"
   },{
    question: "Atribut uchun yorliq kiritishning qaysi atributiga tegishli?",
    code: 
`&lt;label for=...&gt;&lt;/label&gt;
&lt;input ...&gt;`,
    answers: [
     "role",
     "value",
     "type",
     "id"
    ],
    correctAnswer: "id"
   },{
    question: "Ro'yxatlar nechiga bo'linadi HTML da",
    code: ``,
    answers: [
     "2 ga ",
     "3 ga ",
     "8 ga",
     "14 ga"
    ],
    correctAnswer: "2 ga"
   },{
    question: "GET va POST usullari o'rtasidagi farq nima?",
    code: `
&lt;form method='get'&gt;
&lt;form method='post'&gt;`,
    answers: [
     "GET usuli shunchaki ma'lumotlarni oladi, POST esa yuborishi va qabul qilishi mumkin",
     "POST usuli shunchaki ma'lumotlarni yuboradi, GET esa yuborishi va qabul qilishi mumkin",
     "POST usuli turli xil ma'lumotlar bazasi turlari uchun ishlatiladi",
     "GET usuli barcha ma'lumotlarni URL manziliga yuboradi"
    ],
    correctAnswer: "GET usuli barcha ma'lumotlarni URL manziliga yuboradi"
   }
  ],
  loops: [
   {
    question: "JavaScript sikllarining ikki turi qanday?",
    code: ``,
    answers: [
     "loop, cycle",
     "inclusive, exclusive",
     "anonymous, declared",
     "for, while"
    ],
    correctAnswer: "for, while"
   },{
    question: "For siklining 3 ta sharti qanday tartibdan iborat?",
    code: `for(...;...;...){`,
    answers: [
     "variables; start condition; final expression",
     "variables; counter; function",
     "iteration; initialization; condition",
     "initialization; condition; final expression"
    ],
    correctAnswer: "initialization; condition; final expression"
   },{
    question: "Ushbu tsiklni 5 marta bajarish uchun qanday shartdan foydalanamiz?",
    code: `for(let i=0;...; i++){`,
    answers: [
     "i===5",
     "5",
     "i&lt;=5",
     "i&lt;5"
    ],
    correctAnswer: "i&lt;5"
   },{
    question: "While tsiklining sharti har doim to'g'ri bo'lsa nima bo'ladi?",
    code: `while(5===5){ ... }`,
    answers: [
     "Ijro kodi hech qachon ishlamaydi",
     "Amalga oshirish kodi bir marta ishlaydi",
     "Sintaksis xatosi sahifani ishga tushirish vaqtida to'xtatib qo'yadi",
     "Bajarish kodi cheksiz ishlaydi"
    ],
    correctAnswer: "Bajarish kodi cheksiz ishlaydi"
   },{
    question: "Ushbu tsikl oxirida count o'zgaruvchisi nimaga teng bo'ladi?",
    code: `
let count = 0;
for(let i=0; i&lt;3; i++){
 count+=1;
}
return count;`,
    answers: [
     "1",
     "2",
     "0",
     "3"
    ],
    correctAnswer: "3"
   }
  ],
  methods: [
   {
    question: "Ushbu so'zlar qatorini qanday qilib butun so'zlar qatoriga aylantiramiz?",
    code: `let str = 
"The quick brown fox 
jumped over the lazy dogs"`,
    answers: [
     "str.split()",
     "str.words('')",
     "str.convert('')",
     "str.split(' ')"
    ],
    correctAnswer: "str.split(' ')"
   },{
    question: "Ushbu qatordagi ikkinchi so'zni qanday qilib 'will' so'zi bilan almashtiramiz?",
    code: `let str = "I cannot code well"`,
    answers: [
     "str.replace('will', 'cannot')",
     "str.convert('cannot', 'will')",
     "str.mask('will', 'cannot')",
     "str.replace('cannot', 'will')"
    ],
    correctAnswer: "str.replace('cannot', 'will')"
   },{
    question: "Ushbu ob'ektning usulini qanday chaqirasiz?",
    code: `
let obj = {
 car: 'Car',
 sayCar: function(){
  console.log(this.car);
 }
}`,
    answers: [
     "function sayCar(obj)",
     "obj.function(sayCar)",
     "sayCar()",
     "obj.sayCar()"
    ],
    correctAnswer: "obj.sayCar()"
   },{
    question: "JavaScript usuli nima?",
    code: ``,
    answers: [
     "Kodni o'qilishi mumkin bo'lgan tarzda yozish uslubi",
     "JavaScript-ni inline yozish imkonini beruvchi HTML tegi",
     "O'zgaruvchan bo'lishiga imkon beruvchi o'zgaruvchining turi",
     "Funktsiyani bajaradigan ob'ektning xossasi"
    ],
    correctAnswer: "Funktsiyani bajaradigan ob'ektning xossasi"
   },{
    question: "Nega biz ob'ekt usuli deklaratsiyasida ES6 funksiyalaridan foydalanmasligimiz kerak?",
    code: `
let obj = {
 car: "Audi",
 callCar: () =&gt; {
  return this.car 
 }
}`,
    answers: [
     "Arrow functions provide extra properties that are irrelevant to the object",
     "Arrow functions require parameters",
     "Arrow functions are always anonymous",
     "Arrow functions have a different scope of this than the object"
    ],
    correctAnswer: "Arrow functions have a different scope of this than the object"
   }
  ],
  CSS: [
   {
    question: "CSS nimani anglatadi?",
    code: ``,
    answers: [
     "Creative Standard Solution",
     "Color, Style, Scale",
     "Compressed Specific Structure",
     "Cascading Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
   },{
    question: "Fon rangini qizil rangga qanday o'rnatgan bo'lardingiz?",
    code: ``,
    answers: [
     "backgroundcolor: red",
     "color: red",
     "bg-color: red",
     "background-color: red"
    ],
    correctAnswer: "background-color: red"
   },{
    question: "Box-sizing: border box nima qiladi?",
    code: `box-sizing: border-box;`,
    answers: [
     "Elementga chegara qo'shadi",
     "Elementni to'rtburchaklar shaklini saqlab qolishga majbur qiladi",
     "Eliminates any properties of an existing border",
     "Forces the margin, padding, and border dimensions to be inclusive of its width"
    ],
    correctAnswer: "Kenglik, toʻldirish va chegara oʻlchamlarini uning kengligi bilan birlashtirishga majbur qiladi"
   },{
    question: "Lavozim o'rtasidagi farq nima: inline va pozitsiya: inline-block?",
    code: `
position: inline;
position: inline-block;`,
    answers: [
     "inline faqat eksklyuziv to'ldirish va chekka belgilash uchun ishlatiladi",
     "inline-block faqat qo'shimcha chekkalarni aniqlash uchun ishlatiladi",
     "inline katta ekranlarda elementlarni turli qatorlarga o'rashdan qochish uchun ishlatiladi",
     "inline-block foydalanuvchiga kenglik va balandlikni aniqlash imkonini beradi"
    ],
    correctAnswer: "inline-block foydalanuvchiga kenglik va balandlikni aniqlash imkonini beradi"
   },{
    question: "What color would the the &lt;p id='foo' class='para'&gt; paragraph be?",
    code: 
`* { color: cyan; }
#foo { color: yellow; }
.para { color: red; }
p.para { color: blue; }`,
    answers: [
     "cyan",
     "red",
     "blue",
     "yellow"
    ],
    correctAnswer: "yellow"
   }
  ],
  conditionals: [
   {
    question: "JavaScript-dagi shartli bayonotlarning ikki turi qanday?",
    code: ``,
    answers: [
     "if, when",
     "choice, determined",
     "switch, then",
     "if, switch"
    ],
    correctAnswer: "if, switch"
   },{
    question: "Ushbu shartli  nimaga baho beradi?",
    code: 
`if(5&lt;=2){ return true; } 
else { return false; }`,
    answers: [
     "5 &gt; 2",
     "true",
     "5 &lt;= 2",
     "false"
    ],
    correctAnswer: "false"
   },{
    question: "Switch iborasidan qachon foydalanasiz?",
    code: ``,
    answers: [
     "Tasodifiy natijaga erishmoqchi bo'lganingizda",
     "Agar biror o'zgaruvchi bo'lsa, u o'zgarishi mumkin",
     "Booleanni rost yoki yolg'onga o'tkazish kerak bo'lganda",
     "Ko'p aniq baholashlar uchun turli xil harakatlar kerak bo'lganda"
    ],
    correctAnswer: "Ko'p aniq baholashlar uchun turli xil harakatlar kerak bo'lganda"
   },{
    question: "Ushbu shart  nimaga baho beradi?",
    code: 
`let foo = 1;
if(foo){ return true; }
else { return false; }`,
    answers: [
     "1",
     "false",
     "foo",
     "true"
    ],
    correctAnswer: "true"
   },{
    question: "Ushbu shart nimaga baho beradi?",
    code:
`let foo = 0;
if(foo && foo &lt; 5){
 return 1; }
else if(foo &lt; 5){ 
 return 2; }
else { 
 return 3; }`,
    answers: [
     "1",
     "3",
     "false",
     "2"
    ],
    correctAnswer: "2"
   }
  ],
  objects: [
   {
    question: "Ushbu avtomobil markasining qiymatini qanday qilib console.log qilamiz?",
    code: 
`let car = {
 year: 2018,
 make: "Audi",
 model: "S4"
}`,
    answers: [
     "console.log(obj.car(make))",
     "console.log(car(make))",
     "console.log(make)",
     "console.log(car.make)"
    ],
    correctAnswer: "console.log(car.make)"
   },
  ]
 }
};


// Make the quiz. Create a model for our app's state
function makeQuiz(){
	// Creating an object to store the app's state when beginning the quiz
	return {
		// Gathering a random question out of the available questions for each category
		questions: helpers.getRandomQuestions(STORE),
		// Boolean for if the quiz is in progress or not
		midQuiz: false,
		// Array of correct/incorrect answers to use for our progress bar
		progress: {
			progressBar: [],
			incorrectCategories: []
		},
		// Boolean to determine if the end state should display
		completed: false,
		// Monitoring which question we are currently on
		currentQuestion: 0,
		// Keeps track of total correct answers
		correctAnswers: 0,
		// Keeps current selected answer
		currentAnswer: "",
		// Keeps track of % completed
		percCorrect: 0
	}
}

// Apply fadeOut animations and set the stage for DOM text/element changes
function $fade(appState){

	// This is the completed state of of a quiz
	if(appState.completed){
		
		// Fade out elements with a promise to avoid choppy behavior
		$.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
			.done(function(){

				// Display results of the quiz
				$showResults(appState);
				$('.results-wrapper').hide().removeClass('hide');
				$('.question-answer-wrapper, .results-wrapper').fadeIn(500);
	    });

	// This is if the app is just starting
	} else if(appState.midQuiz === false){

		// Set a flag that the app has begun
		appState.midQuiz = true;
		// Fade out elements with a promise to avoid choppy behavior
		$.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
			.done(function(){
				// Remove any progress from a previous quiz (if any);
				helpers.updateProgressBar(appState);
				$('.progress-count').html('1 / 10');
				$('.progress-perc').html('');
				// Kill previous results
				$('.failures').remove();
				// Lots to do... mostly just setting up a new environment for a new quiz
				$updateQuestion(appState);
				$('progress-bar').empty();
				$('progress-fill').html('Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>');
				$('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
				$('.submit-btn, .progress, .progress-bar').removeClass('hide');
				$('.progress, .progress-bar').hide();
				$('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
				if(!$('.code').hasClass('hide')){$('.code').fadeIn(500)};
	    });

	// This is if the app is in the middle of execution
	} else if(appState.midQuiz){
		$.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
			.done(function(){
				$updateQuestion(appState);
				$('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
	    });
	}
}

// Work in progress...
function $showResults(appState){
	if(appState.correctAnswers === 10){
		let endMsg = `You got ${appState.percCorrect}% correct!
I have nothing else to teach you. Move on and prosper!
`;
	} else {
		$('.answer-btn').remove();
		let endMsg = `You got ${appState.percCorrect}% correct!`
		let endFeedback = ``;
		if(appState.progress.incorrectCategories.length === 0){
			endFeedback = `You aced it! Good job!`;
		} else {
			endFeedback = `You may want to study up on the following categories:`;
		}
		
		$('.quiz-end-score').html(endMsg);
		let $failList = $('<ul class="failures"></ul>');
		appState.progress.incorrectCategories.map((cat => {
			$failList.append("<li class='category'>" + cat + "</li>");
		}));
		$('.quiz-end-feedback-p').html(endFeedback);
		$('.quiz-end-categories').append($failList);
		$('.results-wrapper').removeClass('hide').css('display', 'flex');
		$('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);		
	}

}

// Update the question, code, answers, buttons in the DOM while we're in a faded out state
function $updateQuestion(appState){
	$('.answer-btn').remove();

	// Update the question and code text with the current question
	$('.question').html(appState.questions[appState.currentQuestion].question);

	// This is a hack to hide/show the code portion
	// Only 1/3 of the questions contain code so we hide it if they aren't present
	if(appState.questions[appState.currentQuestion].code == ``){
		$('.code').addClass('hide');
	} else {
		$('.code').removeClass('hide');
		$('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
	}
	
	// Change continue back to submit
	$('.continue-btn')
		.val("Submit")
		.removeClass('continue-btn')
		.addClass('submit-btn')
		.prop('disabled', true);

	// Add in available answers for the question
	let $answers = [];

	// Adding the answers to a temporary array
	for(let i=0; i<appState.questions[appState.currentQuestion].answers.length; i++){

		// Add current question answers to an array
		let $answer = $('<button class="answer-btn" type="button"></button>');
		$answer.html(appState.questions[appState.currentQuestion].answers[i]);
		$answers.push($answer);
	}

	// Shuffle the answers
	helpers.shuffleAnswers($answers)

	// Push answers to the DOM
	$answers.forEach((answer) => {
		$('.answer-wrapper').prepend(answer);
	});
}

// Simple class and enable/disable DOM selection when answer is selected
function selectAnswer(answer){
	$('.answer-btn').removeClass('selected');
	answer.addClass('selected');
	$('.submit-btn').prop('disabled', false);
}

// Answer is selected and submitted
// Push a feedback state
function submitAnswer(appState){

	// This will be returned true or false based on their answer
	let correct;

	// Add styles to the answers to show if their answer was correct or not
	$('.answer-btn').each(function () {
		if($(this).html() === appState.questions[appState.currentQuestion].correctAnswer){
			$(this).addClass('pass');
			// If answer is correct and selected...
			if($(this).hasClass('selected')){
				correct = "pass";
				appState.correctAnswers++;
				appState.questions[appState.currentQuestion];
			}

		// Handle correct answer if selected answer is incorrect
		} else if ($(this).hasClass('selected')){
			$(this).addClass('fail dim-answer');
			correct = "fail";
			appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);

		// Dim the other answers to make the correct one more prevalent
		} else {
			$(this).addClass('dim-answer');
		}
	});

	// Add a progress bar indicator to our appState object
	appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);
	
	// Update our percent correct (parse a float and set it to a fixed percentage)
	appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();

	// Update our current question VS total quiz length
	$('.progress-count').html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`);

	// Update our current correct percentage
	$('.progress-perc').html(`
		 // ${(appState.percCorrect)}% Correct
	`)

	// Change submit back to continue
	$('.submit-btn')
		.val("Continue")
		.removeClass('submit-btn')
		.addClass('continue-btn')

	// Disable selecting answers
	$('.answer-btn').prop("disabled", true);

	// Update our progress-bar DOM
	helpers.updateProgressBar(appState);

	// Continue to next question
	appState.currentQuestion++;

	// Verify if we're done or not
	if(appState.currentQuestion === appState.questions.length){
		appState.completed = true;
	}
	
}

// Silly easter egg for saying you don't want to do the quiz
function killQuiz(){
	$('.start-quiz, .quit-quiz').hide();
	let failureMsg = "You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference..."
	let msgSplit = failureMsg.split(" ");
	let counter = 0;
	$('.question').empty();
	let startTroll = setInterval(function () {
		$('.question').append(msgSplit[counter] + " ");
		counter++;
		if(counter > msgSplit.length - 1){
  			clearInterval(startTroll);
  			$('.start-quiz').text('You can do it! Start Quiz').fadeIn(500);
		}
	}, 250);
}

// These are simple algorithms to modify data that don't need an individual function
let helpers = {
	// Pick a random question from the available ones
	pickRandomQ: function(obj,section){
		return Math.floor(Math.random() * obj.questions[section].length);		
	},
	// Gather a random question from every category
	getRandomQuestions: function(obj){
		let questions = [];
		let categories = Object.keys(obj.questions);
		categories.forEach((cat) => {
			let randomQ = this.pickRandomQ(obj,cat);
			let question = obj.questions[cat][randomQ];
			question.category = cat;
			questions.push(question);
		});
		return questions;
	},
	// Shuffle the answers so they don't appear in the same order
	shuffleAnswers: function(arr){
	    for (var i = arr.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = arr[i];
	        arr[i] = arr[j];
	        arr[j] = temp;
	    }
	},
	// Update progress bar DOM element
	updateProgressBar: function(appState){
		$('.progress-bar').empty();
		appState.progress.progressBar.forEach((progInd => {
			$('.progress-bar').append(progInd);
		}))
	}
}

// Lets start the show
$(function(){

	// Kill any form refresh
	$('.answer-wrapper').on('submit', function(e){
		e.preventDefault();
	});

	// Storage for quiz app state
	let quizData;

	// Start quiz
	$('.start-quiz, .retry-btn').on('click', function(){
		quizData = makeQuiz();
		$fade(quizData);
	});

	// Select an answer
	$('.question-answer-wrapper').on('click', '.answer-btn', function(){
		selectAnswer($(this));
	})

	// Submit your answer to display feedback and advance question counter
	$('.question-answer-wrapper').on('click', '.submit-btn', function(e){
		submitAnswer(quizData);
	});

	// Submit your answer to display feedback and advance question counter
	$('.question-answer-wrapper').on('click', '.continue-btn', function(){
		$fade(quizData);
	});

	// Easter egg to chastize the user
	$('.quit-quiz').on('click', function(){
		killQuiz();
	})
})
