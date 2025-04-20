from flask import Flask, request, jsonify
from textblob import TextBlob
from datetime import datetime
import pandas as pd
import nltk
from flask_cors import CORS



nltk.download('punkt')

app = Flask(__name__)
CORS(app)
chat_log = pd.DataFrame(columns=["Timestamp", "User", "Sentiment", "Bot"])

def analyze_sentiment(text):
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    if polarity > 0.2:
        return "positive"
    elif polarity < -0.2:
        return "negative"
    else:
        return "neutral"

def get_bot_response(user_input):
    user_input = user_input.lower()
    if "sad" in user_input or "depressed" in user_input:
        return "I'm sorry you're feeling this way. Want to talk about what's making you feel sad?"
    elif "anxious" in user_input or "nervous" in user_input:
        return "It’s okay to feel anxious. Try some deep breathing, and know that I'm here for you."
    elif "happy" in user_input or "good" in user_input:
        return "That's wonderful! Hold onto that feeling and spread the joy!"
    elif "alone" in user_input or "lonely" in user_input:
        return "You’re not alone. I'm here with you, and so are others who care."
    elif "help" in user_input or "support" in user_input:
        return "I'm here for you. You could also consider reaching out to a therapist or mental health professional."
    elif "bye" in user_input or "exit" in user_input:
        return "Take care of yourself. I'll be here if you need to talk again."
    else:
        return "Tell me more about how you're feeling—I'm listening."

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "")
    sentiment = analyze_sentiment(user_message)
    bot_reply = get_bot_response(user_message)
    
    # Log it
    global chat_log
    chat_log.loc[len(chat_log)] = [datetime.now(), user_message, sentiment, bot_reply]
    
    return jsonify({
        "response": bot_reply,
        "sentiment": sentiment
    })

if __name__ == "__main__":
    app.run(debug=True)
