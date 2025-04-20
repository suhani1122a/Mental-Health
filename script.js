// Function to scroll to a section
// function scrollToSection(sectionId) {
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//   }
  
  // Function to simulate AI response
  // function getAIResponse() {
  //   const userInput = document.getElementById('user-input').value;
  //   const aiResponse = document.getElementById('ai-response');
  
  //   if (userInput.trim() === '') {
  //     aiResponse.textContent = 'Please type something to get advice.';
  //     return;
  //   }
  
    // Simulate AI response (you can replace this with actual AI integration)
  //   const responses = [
  //     "It sounds like you're going through a tough time. Remember to take deep breaths and focus on one step at a time.",
  //     "You're not alone. Many people feel this way, and it's okay to seek help. Try talking to someone you trust.",
  //     "Stress is a natural response, but it's important to take care of yourself. Try practicing mindfulness or meditation.",
  //     "It's okay to feel overwhelmed. Take a break and do something you enjoy to recharge.",
  //   ];
  
  //   const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  //   aiResponse.textContent = randomResponse;
  // }
  async function getAIResponse() {
    const inputField = document.getElementById("user-input");
    const userMessage = inputField.value.trim();
    if (!userMessage) return;
  
    const aiResponseDiv = document.getElementById("ai-response");
  
    // Display user message
    aiResponseDiv.innerHTML += `<div class="user-msg">You: ${userMessage}</div>`;
    inputField.value = "";
  
    try {
      const res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
      });
  
      const data = await res.json();
      aiResponseDiv.innerHTML += `<div class="bot-msg">Bot (${data.sentiment}): ${data.response}</div>`;
    } catch (err) {
      aiResponseDiv.innerHTML += `<div class="bot-msg">Error connecting to server. Is it running?</div>`;
    }
  }
  