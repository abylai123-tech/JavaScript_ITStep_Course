let correctAnswers = {
    q1: 'A',
    q2: 'B',
    q3: 'C',
    q4: 'C',
    q5: 'D',
    q6: 'B',
    q7: 'A',
    q8: 'B',
    q9: 'A',
    q10: 'C',
    q11: 'A',
    q12: 'B',
    q13: 'C',
    q14: 'D',
    q15: 'D',
  };
  
  function calculateScore() {
    let correctCount = 0;
    let totalQuestions = 15;
  
    for (let i = 1; i <= totalQuestions; i++) {
      let questionName = 'q' + i;
      let selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
  
      if (selectedOption) {
        let userAnswer = selectedOption.value;
  
        if (userAnswer == correctAnswers[questionName]) {
          correctCount++;
        }
      }
    }   
  
    let percentage = (correctCount / totalQuestions) * 100;
    let grade = calculateGrade(percentage);
  
    document.getElementById('results').style.display = 'block';
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('percentage').textContent = percentage.toFixed(2);
    document.getElementById('grade').textContent = grade;
  }
  
  function calculateGrade(percentage) {
    if (percentage >= 90) {
      return 'Отлично';
    } else if (percentage >= 80) {
      return 'Очень хорошо';
    } else if (percentage >= 70) {
      return 'Хорошо';
    } else if (percentage >= 60) {
      return 'Удовлетворительно';
    } else {
      return 'Плохо';
    }
  }
  