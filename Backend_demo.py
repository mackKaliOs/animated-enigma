# backend_demo.py - mock demonstration (not executable on GitHub Pages)

def handle_incoming_message(text):
    trigger_emojis = {"😘", "❤️", "🤗", "😊"}
    if any(e in text for e in trigger_emojis):
        simulate_donation()
        return "Simulated $10 donation"
    return "No trigger found"

def simulate_donation():
    print("Pretend $10 donation processed to Demo Charity")
