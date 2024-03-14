# 100 Days of Code: Day 1
## Trivia Quizler

Trivia Quizler is the first app build in this long, but fun 100 Days of Code journey I am embarking on!
![Screenshot 2024-03-14 at 10 09 46 AM](https://github.com/dustinusey/100days-trivia-quizler/assets/51311264/4a2b5a67-d934-4e46-8ed7-789379cfab48)

This app idea came from the <a href="https://github.com/dustinusey/random-project-generator-rtw">Random Project Generator</a> I built! I decided to build this using Reactjs and Tailwindcss.

### How It Works
- Choose a topic for your trivia questions.
- Select the number of questions you'd like to answer.
- Start the quiz. Questions are presented one at a time.
- After answering each question, you'll receive instant feedback ('correct' or 'incorrect') and have 3 seconds before the next question.
- Once the quiz is complete, you'll have the option to play again.

### Sourcing Questions
Trivia questions are sourced from the OpenAI API, powered by ChatGPT. The API returns JSON data consisting of questions, answer options, and correct answers. This data is stored in the app's state and used to build the quiz logic and UI.

### Getting Started
To contribute to this project or address issues:
1. Fork and clone this repository to your local machine.
2. Install dependencies by running `npm i` in your terminal.
3. Obtain your own OpenAI API key.
4. Create a `.env.local` file in the root directory and add your API key as `VITE_OPENAI_KEY`.
   ```
   VITE_OPENAI_KEY=`Bearer <your-api-key>`

   example:
   VITE_OPENAI_KEY=`Bearer 1234567890`
   ```
5. Check out the [issues](https://github.com/dustinusey/100days-trivia-quizler/issues) to find tasks for contributing to this project.
7. Submit a pull request for review. If you encounter any difficulties, don't hesitate to pop in our [Discord](https://trhouse.co/JoinDiscord) to ask for some help!

Also, if you have a cool idea for a feature or want to update the look and feel, take the same steps to fork the repository and get it running on your machine. Submit any cool features you'd like to implement!

If your changes don't break the codebase, I'll merge them in :) 
Happy Hacking!
