document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
      "You're the most important person in my life ❤️",
      "I can't imagine my life without you 💕",
      "I'm really sorry for my behavior 😔",
      "Can you please forgive me? 🙏"
    ];
    let quoteIndex = 0;
  
    const quoteBox = document.getElementById('quote-box');
    const quoteText = document.getElementById('quote');
    const showQuestionsBtn = document.getElementById('show-questions-btn');
    const questionBox = document.getElementById('question-box');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
  
    // Rotate quotes every 3 seconds
    setInterval(() => {
      quoteIndex = (quoteIndex + 1) % quotes.length;
      quoteText.textContent = quotes[quoteIndex];
    }, 3000);
  
    // Show questions when the button is clicked
    showQuestionsBtn.addEventListener('click', () => {
      questionBox.style.display = 'block';
      showQuestionsBtn.style.display = 'none';
    });
  
    // Handle Yes button click
    yesButton.addEventListener('click', () => {
      alert("Thank you for forgiving me! 💖");
    });
  
    // Handle No button hover (move it around)
    noButton.addEventListener('mouseenter', () => {
      const randomTop = Math.floor(Math.random() * 80) + '%';
      const randomLeft = Math.floor(Math.random() * 80) + '%';
      noButton.style.top = randomTop;
      noButton.style.left = randomLeft;
    });
  });
  