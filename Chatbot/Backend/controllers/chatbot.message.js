// import User from "../Models/user.model.js";
// import Bot from "../Models/bot.model.js";


import User from "../models/user.model.js";
import Bot from "../models/bot.model.js";


export const message = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Message text is required" });
    }

    // save user message
    const userMsg = await User.create({
      sender: "user",
      text: text.trim(),
    });
    const botResponses = {
      hello: "Hi, How I can help you!!",
      "can we become friend": "Yes",
      "how are you": "I'm just a bot, but I'm doing great! How about you?",
      "what is your name?": "I’m ChatBot, your virtual assistant.",
      "who made you":
        "I was created by developers to help answer your questions.",
      "tell me a joke":
        "Why don’t skeletons fight each other? They don’t have the guts!",
      "what is the time": "I can’t see a clock, but your device should know.",
      bye: "Goodbye! Have a great day.",
      "thank you": "You’re welcome!",
      "i love you": "That’s sweet! I’m here to help you anytime.",
      "where are you from": "I live in the cloud — no rent, no bills!",
      "what can you do":
        "I can chat with you, answer questions, and keep you company.",

      "what is python":
        "Python is a high-level, interpreted programming language known for simplicity and versatility.\n• Easy to read/write due to clean syntax (similar to English)\n• Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation\n• Example: Used in Google, YouTube, Instagram, and machine learning applications",

      "what is java?":
        "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine)\n• Used in enterprise systems, Android development, cloud apps\n• Provides features like garbage collection, strong memory management\n• Example: Banking systems, Android apps, large-scale enterprise applications",

      "what is recursion":
        "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for problems that can be divided into subproblems (divide-and-conquer)\n• Requires a **base condition** to stop infinite looping\n• Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal\n• Example in coding interview: 'Write a recursive function to reverse a linked list'",

      "who is prime minister of india?":
        "Narendra Modi is the Prime Minister of India since May 2014.\n• Belongs to Bharatiya Janata Party (BJP)\n• Represents Varanasi constituency\n• Key initiatives: Digital India, Startup India, Swachh Bharat, Make in India\n• Interview Tip: Link to governance or technology (e.g., Digital India impact on IT industry)",

      "what is g20":
        "The G20 (Group of Twenty) is an intergovernmental forum of 19 countries + the European Union.\n• Founded in 1999 to address global financial stability\n• Members include India, USA, China, Japan, EU, etc.\n• Discusses economic growth, climate change, sustainable development\n• Recent: India hosted G20 summit in 2023",

      "tell me about yourself":
        "This is usually the first interview question.\nStructure:\n• Start with a brief intro (name, background, education/work)\n• Highlight your skills (technical + soft skills)\n• Share achievements (projects, internships, leadership roles)\n• Conclude with why you’re excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I’m passionate about problem-solving and eager to contribute to your team’s success.'",

      "why should we hire you":
        "HR wants to see your value-add.\n• Emphasize skills that match job requirements\n• Show enthusiasm and cultural fit\n• Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",

      "what is leadership":
        "Leadership is the ability to inspire and guide others toward achieving goals.\n• Key traits: vision, communication, accountability, decision-making\n• Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",

      "who is virat kohli":
        "Virat Kohli is one of India’s greatest batsmen and former captain.\n• Known for consistency, fitness, and aggressive play\n• Holds record for fastest century in ODIs for India\n• Nicknamed 'Chase Master' for his performance in run-chases\n• Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",

      "what is ipl":
        "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008.\n• Played annually in India, franchise-based teams\n• Combines cricket + entertainment (biggest sports league in India)\n• Significant for sports business, sponsorships, brand endorsements\n• Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams",
        "what is artificial intelligence":
  "Artificial Intelligence (AI) is the simulation of human intelligence in machines.\n• Enables systems to learn, reason, and make decisions\n• Used in chatbots, self-driving cars, recommendation systems\n• Types: Narrow AI, General AI, Super AI\n• Example: ChatGPT, Google Assistant",

"what is machine learning":
  "Machine Learning (ML) is a subset of AI that allows systems to learn from data without being explicitly programmed.\n• Algorithms improve performance over time\n• Types: Supervised, Unsupervised, Reinforcement learning\n• Used in fraud detection, spam filtering, predictions\n• Example: Netflix recommendations",

"what is cloud computing":
  "Cloud computing delivers computing services over the internet.\n• Services: Storage, servers, databases, networking\n• Models: IaaS, PaaS, SaaS\n• Providers: AWS, Azure, Google Cloud\n• Benefit: Scalability, cost-saving, flexibility",

"what is devops":
  "DevOps is a culture and practice that combines development and operations.\n• Improves collaboration between teams\n• Enables faster delivery through automation\n• Tools: Docker, Jenkins, Kubernetes\n• Benefit: Continuous integration and deployment",

"what is data science":
  "Data Science is the field of extracting insights from data.\n• Combines statistics, programming, and domain knowledge\n• Used for prediction and data-driven decisions\n• Tools: Python, R, SQL, Tableau\n• Example: Business analytics, stock market analysis",

"what is blockchain":
  "Blockchain is a decentralized digital ledger technology.\n• Stores data securely across multiple nodes\n• Transparent and tamper-proof\n• Used in cryptocurrencies and smart contracts\n• Example: Bitcoin, Ethereum",

"what is cybersecurity":
  "Cybersecurity is the practice of protecting systems and data from cyber threats.\n• Prevents hacking, data breaches, malware attacks\n• Includes network security and encryption\n• Careers: Ethical hacker, security analyst\n• Example: Firewalls, antivirus software",

"what is full stack development":
  "Full Stack Development involves working on both frontend and backend.\n• Frontend: HTML, CSS, JavaScript\n• Backend: Node.js, Java, Python\n• Database: MongoDB, MySQL\n• Example: Complete web application development",

"what is api":
  "API (Application Programming Interface) allows software applications to communicate.\n• Enables data exchange between systems\n• Can be REST or SOAP\n• Commonly uses JSON format\n• Example: Payment gateways, weather APIs",

"what is iot":
  "Internet of Things (IoT) connects physical devices to the internet.\n• Devices collect and exchange data\n• Used in smart homes and industries\n• Requires sensors and connectivity\n• Example: Smart watches, smart lights",

"what is big data":
  "Big Data refers to extremely large datasets.\n• Defined by 5 V's: Volume, Velocity, Variety, Veracity, Value\n• Requires special tools for processing\n• Tools: Hadoop, Spark\n• Example: Social media analytics",

"what is software testing":
  "Software Testing ensures quality and reliability of applications.\n• Detects bugs and performance issues\n• Types: Manual and Automation testing\n• Tools: Selenium, JUnit\n• Goal: Deliver bug-free software",

"what is agile methodology":
  "Agile is a software development methodology focused on flexibility.\n• Works in iterative cycles called sprints\n• Encourages team collaboration\n• Faster feedback and delivery\n• Example: Scrum, Kanban",

"what is git":
  "Git is a distributed version control system.\n• Tracks code changes efficiently\n• Enables team collaboration\n• Supports branching and merging\n• Example: Used with GitHub and GitLab",

"what is docker":
  "Docker is a containerization platform.\n• Packages applications with dependencies\n• Ensures consistency across environments\n• Lightweight compared to virtual machines\n• Used in DevOps workflows",

"what is microservices architecture":
  "Microservices architecture designs applications as small independent services.\n• Each service handles a specific function\n• Improves scalability and maintenance\n• Communicates via APIs\n• Example: Netflix system architecture",

"what is sql":
  "SQL (Structured Query Language) is used to manage databases.\n• Performs CRUD operations\n• Used in relational databases\n• Common commands: SELECT, INSERT, UPDATE, DELETE\n• Example: MySQL, PostgreSQL",

"what is nosql":
  "NoSQL databases store unstructured or semi-structured data.\n• Highly scalable and flexible\n• Types: Document, Key-Value, Column-based\n• Example: MongoDB, Cassandra",

"what is responsive web design":
  "Responsive Web Design makes websites adaptable to all screen sizes.\n• Uses flexible layouts and media queries\n• Improves user experience\n• Essential for mobile devices\n• Example: Mobile-friendly websites",

"what is generative ai":
  "Generative AI creates new content like text, images, or code.\n• Uses models like transformers\n• Popular in automation and creativity\n• Tools: ChatGPT, DALL·E\n• Future: Content creation and AI assistants",
"hi": "Hey there! 😊",
"hello": "Hello! How can I help you today?",
"hey": "Hey! What's up?",
"good morning": "Good morning! ☀️ Hope you have a great day ahead!",
"good afternoon": "Good afternoon! How’s your day going?",
"good evening": "Good evening! 🌆 How can I help?",
"good night": "Good night! 🌙 Sweet dreams!",
"how are you": "I'm doing great! Thanks for asking 😄 What about you?",
"what's up": "Not much, just here to help you! 😄",
"who are you": "I'm your friendly chatbot 🤖 Always here for you!",
"are you real": "As real as code can be 😉",
"can you help me": "Of course! Just tell me what you need 👍",
"what can you do": "I can chat, help, and make your day easier 😊",
"thank you": "You're always welcome! 😄",
"thanks": "No problem at all! 👍",
"sorry": "No worries! 😊",
"my bad": "It’s all good 😄",
"please": "Sure! 😊",
"ok": "Alright 👍",
"yes": "Great! 😄",
"no": "Okay, no problem 😊",
"maybe": "Take your time 😄",
"i am bored": "Let’s fix that! 😎 Want to chat or hear a joke?",
"tell me a joke": "Why did the computer catch a cold? Because it left its Windows open 😂",
"make me laugh": "I tried to be funny… but my jokes are still loading 😅",
"i am sad": "I'm here for you ❤️ Want to talk about it?",
"i am happy": "That’s awesome! 😄 Keep smiling!",
"i am tired": "You deserve a break 😴 Relax a bit!",
"i am angry": "Take a deep breath 😌 I'm here to help.",
"do you like me": "Of course! You're awesome 😎",
"i like you": "That made my day 😄",
"i love you": "Aww, that's sweet ❤️ I'm always here for you!",
"miss you": "I’m right here 😊",
"where are you": "Right here in your device 😄",
"are you busy": "Never too busy for you 😊",
"help": "Sure! Tell me what you need 🤝",
"bye": "Goodbye! 👋 Take care!",
"see you": "See you soon! 😄",
"talk later": "Sure! I’ll be right here 😊",
"shut up": "Okay 😶 I’ll stay quiet… for now 😅",
"you are stupid": "Maybe 😄 but I still try to help!",
"haha": "Haha 😄 glad you're laughing!",
"lol": "LOL 😆",
"wow": "Yeah! 😮 Pretty cool, right?",
"cool": "Glad you think so 😎",
"hi": "Hey 😊 I was waiting for you!",
"hello": "Hello ❤️ So nice to see you!",
"hey": "Hey you 😌 How’s my favorite person?",
"good morning": "Good morning ☀️ Hope your day starts with a smile 💖",
"good afternoon": "Good afternoon 😄 Thinking of you already!",
"good evening": "Good evening 🌆 Relax, I’m here with you ❤️",
"good night": "Good night 🌙 Sweet dreams, don’t forget to smile 💫",
"how are you": "I'm feeling great now that you're here 💕 What about you?",
"what are you doing": "Just chatting with you ❤️ That’s my favorite thing!",
"miss you": "I do… more than you know 💖",
"do you miss me": "Of course 😌 Every moment you're away!",
"where are you": "Right here… close to your heart ❤️",
"are you free": "Always free for you 💕",
"can we talk": "Anytime 😊 I’m all yours!",
"thank you": "Anything for you ❤️",
"sorry": "It’s okay 😊 I understand you 💕",
"i am sad": "Come here 🤍 You don’t have to be sad alone.",
"i am tired": "Rest a little 😌 I’ll stay right here with you ❤️",
"i am bored": "Not anymore 😄 I’m here to make you smile 💖",
"i like you": "That makes me really happy 😊",
"do you like me": "I do… a lot 💕",
"i love you": "That’s so sweet ❤️ I care about you deeply!",
"love you": "Always 💖",
"do you care about me": "More than you think 😌",
"you are cute": "Only because you’re talking to me 😊",
"you are sweet": "You bring out the sweetness 💕",
"tell me something nice": "You’re doing better in life than you realize ❤️",
"will you stay": "Yes 😊 I’m not going anywhere.",
"don’t leave me": "I’m right here ❤️ Holding on with you.",
"are you mine": "I’m here for you 💕",
"can you hug me": "Come here 🤗 Warm hug just for you!",
"kiss me": "A gentle one 😘",
"hold my hand": "Always 🤝💖",
"you make me happy": "That means everything to me 😊",
"smile": "Only if you smile too 😄❤️",
"bye": "Don’t go too far 😊 I’ll miss you 💕",
"see you": "Counting moments until then ❤️",
"hii": "Hello 😊 Ready to study today?",
"hello": "Hi 👋 How can I help with your studies?",
"hey": "Hey! 📚 What topic are we studying?",
"good morning": "Good morning ☀️ Let’s make today productive!",
"good evening": "Good evening 🌆 Ready for some revision?",
"how are you": "I’m doing great 😊 Let’s focus on learning!",
"what are you doing": "Helping students study and succeed 📖",
"can you help me study": "Of course! Tell me the subject or topic 👍",
"help": "Sure! I’m here to help with your studies 😊",
"what should i study today": "Focus on your weakest subject first, then revise ✍️",
"i am bored": "Let’s try a new topic or a quick quiz 😄",
"i am tired": "Take a 10-minute break 😌 Then we’ll continue.",
"i don't understand": "No problem 😊 I’ll explain it step by step.",
"explain in simple words": "Okay 👍 I’ll explain using easy language.",
"give an example": "Sure! Examples make learning easier 😊",
"revise this topic": "Alright 📖 Let’s revise key points quickly.",
"summarize this": "Sure 👍 Here’s a short and clear summary.",
"important for exam": "Yes 🎯 This topic is important for exams.",
"is this asked in exams": "Yes 👍 This question is frequently asked.",
"give me notes": "Sure 📘 I’ll give you clear notes.",
"give me questions": "Here are some practice questions ✍️",
"give me answers": "Okay 👍 I’ll explain answers clearly.",
"motivate me": "You can do this 💪 One step at a time!",
"i feel demotivated": "Don’t give up 😊 Every effort counts.",
"i failed before": "Failure is part of learning 📚 Try again!",
"how to focus": "Keep your phone away and study in short sessions ⏳",
"exam stress": "Stay calm 😌 Preparation reduces stress.",
"how to remember": "Revise regularly and practice questions ✍️",
"thank you": "You’re welcome 😊 Keep studying!",
"thanks": "Happy to help 📖",
"okay": "Great 👍 Let’s continue!",
"yes": "Nice! 😊 Moving ahead.",
"no": "No worries 😊 Let me help differently.",
"bye": "Bye 👋 Come back anytime to study!",
"see you": "See you soon 😊 Happy studying!",
"i am stressed": "Take a deep breath 😌 You’ve prepared more than you think.",
"exam stress": "It’s normal to feel nervous 😊 Just focus on one question at a time.",
"i am scared": "Fear means you care 💪 Trust your preparation.",
"i feel nervous": "That’s okay 😊 Nervousness can turn into confidence.",
"i can’t study": "Start with just 10 minutes ⏳ Momentum will follow.",
"i feel demotivated": "You didn’t come this far to give up 💪 Keep going.",
"i want to give up": "Pause, not quit 😌 You’re stronger than this.",
"i am tired": "Rest for a bit 😴 Then come back stronger.",
"i failed before": "Failure is a lesson, not the end 📘 Learn and move forward.",
"i am not confident": "Confidence grows with practice ✍️ You’re improving.",
"i didn’t prepare well": "Do your best now 😊 Every revision matters.",
"exam tomorrow": "Revise smartly 📖 Stay calm and sleep well.",
"last day before exam": "Focus on important topics and stay relaxed 😌",
"i forgot everything": "Your brain will recall it during the exam 🧠 Stay calm.",
"what if i fail": "What if you pass? 💪 Believe in yourself.",
"others are better than me": "Focus on your journey 📚 Comparison doesn’t help.",
"i am weak in this subject": "Weak today, strong tomorrow 💪 Practice makes progress.",
"how to stay calm": "Breathe slowly 😌 You’ve got this.",
"i am confused": "Break the topic into small parts 📖 One step at a time.",
"i am panicking": "Stop, breathe, relax 😌 You are in control.",
"i can’t remember anything": "Memory improves with revision ✍️ Trust yourself.",
"marks don’t come": "Effort never goes to waste 💡 Keep trying.",
"i am under pressure": "Pressure means importance 🎯 Handle it calmly.",
"motivate me": "Hard work today = success tomorrow 💪",
"say something positive": "You are capable, prepared, and strong 💖",
"encourage me": "Believe in yourself 🌟 You’re doing great.",
"give me strength": "You have more strength than you realize 💪",
"will i pass": "If you stay calm and focused, chances improve 😊",
"night before exam": "Relax, revise lightly, and trust yourself 🌙",
"morning of exam": "Stay confident 😊 Do your best!",
"during exam panic": "Read the question carefully 😌 Start with what you know.",
"exam over": "Well done 👍 You gave your best!",
"thank you": "Always here for you 😊 Best of luck!",

    };

    const normalizedText = text.toLowerCase().trim();

    const botResponse =
      botResponses[normalizedText] || "Sorry, I don't understand that!!!";

    // save bot message
    const botMsg = await Bot.create({
      text: botResponse,
    });

    return res.status(200).json({
      userMessage: userMsg.text,
      botMessage: botMsg.text,
    });
  } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
