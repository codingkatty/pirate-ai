# Pirate AI 🏴‍☠️

<img src="https://i.imgur.com/ZOldbpH.png">

Gemini clone for pirates. Arr! ⛵<br>
The idea for this is by the 'dino', to suggest things for pirates, like a pirate assistant!

---

This is a website for the High Seas Hackathon. Here are some important links:
  - [Github Repo](https://github.com/codingkatty/pirate-ai)
  - [Website](https://codingkatty.github.io/pirate-ai/)
  - [Video Demo](https://www.youtube.com/watch?v=A6A9IJY-aGU)

---

## How to Use 💖

1. Select the textarea (input) and type your message.
<img src="https://i.imgur.com/XT1rxVo.png">

2. After typing, click the 'Send' button. The AI shall then reply to you.
<img src="https://i.imgur.com/MSqVb03.png">

### Long wait after clicking 'Send' 🤔

I've used Render to host the webservice (python) to communicate with the API. If it hasn't been used for some time, the server will shut down, and it will take around 50 seconds to load. After that, it will load fast for future messages.

Now, this error should not occur. It should be not have any delay because I have made sure the server is active 24/7 by setting up a cron job.

---

## Updates 🌊

Here, find all the stuff I've done for updates.

### Update 1 (2/12/2024)

Not a reaalllly big update, but used UptimeRobot to keep Render onilne, so the 'wait' is removed and the AI will reply fast and almost instantly. Also, I changed the README images to host on Imgur, so it is readable in the High Seas README page.

Small edit: Used cron-job instead. Its more flexible and it works, too! <br>
Small edit x2: Added 'enter' key for easy send. It now works more smoothly.
 - Update shipped at 5/12/2024

---

## Things I learned 📚

For this project, I've used a couple of languages and services. I also explored how to implement AI in code. Despite knowing HTML/CSS/JS, I also learned and refreshed my knowledge during the making of this. It took me around 2 hours, with the help of Github Copilot for this project. I look to make more complex projects to improve me coding skills in the future!

### Tech Stack ⚙️

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![Gemini API](https://img.shields.io/badge/Gemini%20API-00A3E0?style=for-the-badge&logo=api&logoColor=white)

### Future Developments 🤖

Some ideas for the future:

- Accounts 🦜
- Save chat history ⚓
- Settings ⚙️
