const firstNames = [
  "John",
  "Jane",
  "Alex",
  "Emily",
  "Chris",
  "Katie",
  "Michael",
  "Sarah",
  "David",
  "Laura",
  "James",
  "Emma",
];

export function getRandomFirstName() {
  const randomIndex = Math.floor(Math.random() * firstNames.length);
  return firstNames[randomIndex];
}

const messages = [
  "Hello, how are you?",
  "Good morning!",
  "Have a great day!",
  "What's up?",
  "Nice to meet you!",
  "How's it going?",
  "Long time no see!",
  "Good evening!",
  "Take care!",
  "See you soon!",
];

export function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
