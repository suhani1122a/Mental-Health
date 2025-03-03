// Function to scroll to a section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Function to simulate AI response
  function getAIResponse() {
    const userInput = document.getElementById('user-input').value;
    const aiResponse = document.getElementById('ai-response');
  
    if (userInput.trim() === '') {
      aiResponse.textContent = 'Please type something to get advice.';
      return;
    }
  
    // Simulate AI response (you can replace this with actual AI integration)
    const responses = [
      "It sounds like you're going through a tough time. Remember to take deep breaths and focus on one step at a time.",
      "You're not alone. Many people feel this way, and it's okay to seek help. Try talking to someone you trust.",
      "Stress is a natural response, but it's important to take care of yourself. Try practicing mindfulness or meditation.",
      "It's okay to feel overwhelmed. Take a break and do something you enjoy to recharge.",
    ];
  
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    aiResponse.textContent = randomResponse;
  }