 /*30 Quotes*/
let arr = [
    "“The only way to do great work is to love what you do.”—Steve Jobs",
    "“Be yourself; everyone else is already taken.”—Oscar Wilde",
    "“The best way to predict the future is to invent it.”—Alan Kay",
    "“In the end, we will remember not the words of our enemies, but the silence of our friends.”— Martin Luther King Jr",
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”—Ralph Waldo Emerson",
    "“You miss 100% of the shots you don’t take.”—Wayne Gretzky",
    "“Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.”—Buddha",
    "“The only limit to our realization of tomorrow is our doubts of today.”—Franklin D. Roosevelt",
    "“Success is not final, failure is not fatal: It is the courage to continue that counts.”—Winston Churchill",
    "“Life is what happens when you’re busy making other plans.”—John Lennon",
    "“Things are never quite as scary when you've got a best friend.”— Bill Watterson",
    "“Friendship is the hardest thing in the world to explain. It's not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything.”— Muhammad Ali",
    "“Never lose sight of the fact that the most important yard stick to your success is how you treat other people”— Barbara Bush",
    "“Success is falling nine times and getting up ten.”— Jon Bon Jovi",
    "“Success is only meaningful and enjoyable if it feels like your own”— Michelle Obama",
    "“My best friend is the one who brings out the best in me”— Henry Ford",
    "“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”― Mark Twain",
    "“When someone loves you, the way they talk about you is different. You feel safe and comfortable.”― Jess C. Scott",
    "“Knowing yourself is the beginning of all wisdom.”― Aristotle",
    "“Self-care is how you take your power back.”— Lalah Delia",
    "“No one can make you feel inferior without your consent.”— Eleanor Roosevelt",
    "“True abundance isn’t based on our net worth, it’s based on our self-worth”— Gabrielle Bernstein",
    "“I love you. I knew it the minute I met you.” - Pat, Silver Linings Playbook",
    "“I love you. You complete me.”  - Jerry Maguire",
    "“'I love you' begins by I, but ends up by you.”  - Charles de Leusse",
    "“So, I love you because the entire universe conspired to help me find you.” - Paulo Coehlo",
    "“Better three hours too soon than a minute too late” – William Shakespeare",
    "“Never leave till tomorrow that which you can do today” – Benjamin Franklin",
    "“The two most powerful warriors are patience and time” – Leo Tolstoy",
    
];

let fav = JSON.parse(localStorage.getItem('favQuotes')) || [];

document.getElementById("j").onclick = function() {
    let random = Math.floor(Math.random() * arr.length);
    document.querySelector(".quote").innerHTML = arr[random];
    document.getElementById("fav").checked = false; 
};

document.getElementById("fav").onchange = function() {
    if (this.checked) {
        let currentQuote = document.querySelector(".quote").innerHTML;
        if (currentQuote && !fav.includes(currentQuote)) {
            fav.push(currentQuote);
            localStorage.setItem('favQuotes', JSON.stringify(fav));
        }
    }
};
/*six keys with 10 quotes each*/ 
const allQuotes = {
    friend: [
      "“Things are never quite as scary when you've got a best friend.”— Bill Watterson",
      "“Friendship is the hardest thing in the world to explain. It's not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything.”— Muhammad Ali",
      "“My best friend is the one who brings out the best in me”— Henry Ford",
      "“Friendship is the only cement that will ever hold the world together.”— Woodrow Wilson",
      "“A day without a friend is like a pot without a single drop of honey left inside.”— Winnie the Pooh",
      "“They may forget what you said, but they will never forget how you made them feel.”-Carl W. Buechner",
      "“Friends are the siblings God never gave us” - Mencius",
      "“The best mirror is an old friend.”— George Herbert",
      "“There's not a word yet for old friends who've just met.” - Jim Henson",
      "“The most important discovery true friends make is that they can grow separately without growing apart.” - Elisabeth Foley"
    ],
    success:[
        "“To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.” — Reba McEntire",
        "“I never dreamed about success. I worked for it.”— Estée Lauder",
        "“All you need in this life is ignorance and confidence; then success is sure”— Mark Twain",
        "“Never lose sight of the fact that the most important yard stick to your success is how you treat other people”— Barbara Bush",
        "“Success is falling nine times and getting up ten.”— Jon Bon Jovi",
        "“Success is only meaningful and enjoyable if it feels like your own”— Michelle Obama",
        "“Do not judge me by my success, judge me by how many times I fell down and got back up again.” — Nelson Mandela",
        "“Failure is the condiment that gives success its flavor”— Truman Capote",
        "“The secret to getting ahead is getting started.”— Mark Twain",
        "“Many of life’s failures are people who did not realize how close they were to success when they gave up.”— Thomas A. Edison"
    ],
    wisdom:[
        "“The fool doth think he is wise, but the wise man knows himself to be a fool.”― William Shakespeare",
        "“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”― Maurice Switzer",
        "“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”― Mark Twain",
        "“When someone loves you, the way they talk about you is different. You feel safe and comfortable.”― Jess C. Scott",
        "“Knowing yourself is the beginning of all wisdom.”― Aristotle",
        "“The only true wisdom is in knowing you know nothing”― Socrates",
        "“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.”― Isaac Asimov",
        "“Count your age by friends, not years. Count your life by smiles, not tears.”― John Lennon",
        "“May you live every day of your life.”― Jonathan Swift",
        "“Any fool can know. The point is to understand.”― Albert Einstein"
    ],
    life:["“I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.”— Rosa Parks",
        "“To love oneself is the beginning of a lifelong romance.”— Oscar Wilde",
        "“Sometimes the most important thing in a whole day is the rest we take between two deep breaths.”— Etty Hillesum",
        "“Self-care is how you take your power back.”— Lalah Delia",
        "“No one can make you feel inferior without your consent.”— Eleanor Roosevelt",
        "“True abundance isn’t based on our net worth, it’s based on our self-worth”— Gabrielle Bernstein",
        "“Almost everything will work again if you unplug it for a few minutes, including you.” — Anne Lamott",
        "“You’re braver than you believe, and stronger than you seem, and smarter than you think.”— A.A. Mine",
        "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”— Ralph Waldo Emerson",
        "“When I’m not feeling my best I ask myself,“What are you gonna do about it?” I use the negativity to fuel the transformation into a better me.”"
    ],
    time:["“Time is money” – Benjamin Franklin",
        "“Time waits for no one” – Unknown author",
        "“Time is the wisest counselor of all” – Pericles",
        "“Punctuality is the thief of time” – Oscar Wilde, The Picture of Dorian Gray",
        "“The key is in not spending time, but in investing it” – Stephen R. Covey",
        "“Time is the most valuable thing a man can spend” – Theophrastus",
        "“Better three hours too soon than a minute too late” – William Shakespeare",
        "“Never leave till tomorrow that which you can do today” – Benjamin Franklin",
        "“The two most powerful warriors are patience and time” – Leo Tolstoy",
        "“Your time is limited, so don't waste it living someone else's life.” – Steve Jobs"
    ],
    love:["“I love you, not only for what you are, but for what I am when I am with you.” - Roy Croft",
        "“I do know some things. I know I love you. I know you love me.”  - Game of Thrones",
        "“You have bewitched me, body and soul, and I love... I love... I love you.”  - Mr Darcy, Pride and Prejudice",
        "“I love you, and I will love you until I die, and if there's life after that, I'll love you then.”  - Cassandra Clare",
        "“I've never had a moment's doubt. I love you. I believe in you completely. You are my dearest one. My reason for life.”  - Ian McEwan, Atonement",
        "“Do I love you? My god, if your love were a grain of sand, mine would be a universe of beaches.” - William Goldman, The Princess Bride",
        "“I love you. I knew it the minute I met you.” - Pat, Silver Linings Playbook",
        "“I love you. You complete me.”  - Jerry Maguire",
        "“'I love you' begins by I, but ends up by you.”  - Charles de Leusse",
        "“So, I love you because the entire universe conspired to help me find you.” - Paulo Coehlo"
    ]
  };
  
function generateQuotes1() {
    const quoteNumber1 = parseInt(document.getElementById('quoteNumber1').value);
    const quoteDisplay1 = document.getElementById('quoteDisplay1');
    let quoteText = "";

    if (quoteNumber1 >= 1 && quoteNumber1 <= 10) {
        for (let i = 0; i < quoteNumber1; i++) {
        quoteText += i+1 + ".  " + allQuotes.friend[i] + "<br><br>";
        }
        quoteDisplay1.innerHTML = quoteText;
    } else {
        quoteDisplay1.textContent = "Please enter a number between 1 and 10.";
    }
}
function generateQuotes2() {
    const quoteNumber2 = parseInt(document.getElementById('quoteNumber2').value);
    const quoteDisplay2 = document.getElementById('quoteDisplay2');
    let quoteText = "";

    if (quoteNumber2 >= 1 && quoteNumber2 <= 10) {
        for (let i = 0; i < quoteNumber2; i++) {
            quoteText += i+1 + ".  " + allQuotes.wisdom[i] + "<br><br>";
        }
        quoteDisplay2.innerHTML = quoteText;
    } else {
        quoteDisplay2.textContent = "Please enter a number between 1 and 10.";
    }
}
function generateQuotes3() {
    const quoteNumber3 = parseInt(document.getElementById('quoteNumber3').value);
    const quoteDisplay3 = document.getElementById('quoteDisplay3');
    let quoteText = "";

    if (quoteNumber3 >= 1 && quoteNumber3 <= 10) {
        for (let i = 0; i < quoteNumber3; i++) {
            quoteText += i+1 + ".  " + allQuotes.life[i] + "<br><br>";
        }
        quoteDisplay3.innerHTML = quoteText;
    } else {
        quoteDisplay3.textContent = "Please enter a number between 1 and 10.";
    }
}
function generateQuotes4() {
    const quoteNumber4 = parseInt(document.getElementById('quoteNumber4').value);
    const quoteDisplay4 = document.getElementById('quoteDisplay4');
    let quoteText = "";
    
    if (quoteNumber4 >= 1 && quoteNumber4 <= 10) {
        for (let i = 0; i < quoteNumber4; i++) {
            quoteText += i+1 + ".  " + allQuotes.success[i] + "<br><br>";
        }
        quoteDisplay4.innerHTML = quoteText;
    } else {
        quoteDisplay4.textContent = "Please enter a number between 1 and 10.";
    }
}
function generateQuotes5() {
    const quoteNumber5 = parseInt(document.getElementById('quoteNumber5').value);
    const quoteDisplay5 = document.getElementById('quoteDisplay5');
    let quoteText = "";
    
    if (quoteNumber5 >= 1 && quoteNumber5 <= 10) {
        for (let i = 0; i < quoteNumber5; i++) {
            quoteText += i+1 + ".  " + allQuotes.time[i] + "<br><br>";
        }
        quoteDisplay5.innerHTML = quoteText;
    } else {
        quoteDisplay5.textContent = "Please enter a number between 1 and 10.";
    }
}
function generateQuotes6() {
    const quoteNumber6 = parseInt(document.getElementById('quoteNumber6').value);
    const quoteDisplay6 = document.getElementById('quoteDisplay6');
    let quoteText = "";
    
    if (quoteNumber6 >= 1 && quoteNumber6 <= 10) {
        for (let i = 0; i < quoteNumber6; i++) {
            quoteText += i+1 + ".  " + allQuotes.love[i] + "<br><br>";
        }
        quoteDisplay6.innerHTML = quoteText;
    } else {
        quoteDisplay6.textContent = "Please enter a number between 1 and 10.";
    }
}


function generateRandomQuotes() {
    const quotes = [
        "“I never dreamed about success. I worked for it.” —Estée Lauder",
        "“Either you run the day or the day runs you.” —Jim Rohn",
        "“Women must learn to play the game as men do.” —Eleanor Roosevelt",
        "“He who conquers himself is the mightiest warrior.” —Confucius",
        "“One man with courage makes a majority.” —Andrew Jackson",
        "“Alone we can do so little, together we can do so much.” —Helen Keller"
    ];

    // Select 3 random quotes
    let randomQuotes = [];
    while (randomQuotes.length < 3) {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        if (!randomQuotes.includes(quotes[randomIndex])) {
            randomQuotes.push(quotes[randomIndex]);
        }
    }

    let dropdown = document.getElementById('quoteDropdown');
    dropdown.innerHTML = '';
    randomQuotes.forEach(function(quote) {
        let listItem = document.createElement('a');
        listItem.classList.add('dropdown-item');
        listItem.href = '#';
        listItem.innerText = quote;
        dropdown.appendChild(listItem);
    });
}

window.onload = generateRandomQuotes;


document.getElementById('copyBtn').addEventListener('click', function() {
    var quoteText = document.getElementById('quoteText').innerText;
    var textArea = document.createElement('textarea');
    textArea.value = quoteText;
    document.body.appendChild(textArea);
    textArea.select();
  document.execCommand('copy');
    document.body.removeChild(textArea);
   
    alert('Quote copied to clipboard');
});
