# Paper Solve

**Spectrum 26**

> An answer-generation dashboard that creates board-style responses for AKU-EB / BISE-style marking schemes.

[Live Demo](https://paper-solve.vercel.app)

---

## About

Paper Solve is a lightweight web application designed to help students prepare exam answers in a structured, marking-scheme-friendly format. The dashboard lets users choose a subject, class level, marks, and question type, then generates a model answer aligned with board-style expectations.

This project currently focuses on:

* **Physics** and **Mathematics**
* **Class 9, 10, 11, and 12**
* **CRQ, ERQ, and MCQ** question types
* **Custom mark values**
* **Board-style model answers**

---

## Features

* Clean sign-in page before accessing the main dashboard
* Subject and class selection for fast answer generation
* Support for multiple question types
* Mark-based answer calibration
* Copy-ready answer output
* Designed around AKU-EB / BISE-style marking logic
* Deployed with Vercel for easy hosting

---

## Screens

* **Login page:** secure entry screen before dashboard access
* **Dashboard:** question setup panel and generated answer area

---

## Tech Stack

* **HTML5**
* **JavaScript**
* **CSS**
* **Vercel** for deployment

---

## Project Structure

```bash
Paper-solve/
├── index.html
├── dashboard.html
├── api/
└── vercel.json
```

---

## Getting Started

### Prerequisites

* A modern web browser
* Optional: Node.js if you plan to add a local dev server or extend the project

### Run Locally

1. Clone the repository

```bash
git clone https://github.com/SafanKaisani/Paper-solve.git
cd Paper-solve
```

2. Open `index.html` in your browser, or serve the project with a local web server.

For example, using a simple static server:

```bash
npx serve .
```

3. Open the dashboard and test answer generation.

---

## Usage

1. Sign in through the landing page.
2. Choose the subject.
3. Select the class or level.
4. Pick the marks and question type.
5. Enter the question.
6. Generate the board-style answer.
7. Copy the answer text for study or review.

---

## Deployment

The project includes a `vercel.json` rewrite configuration, so it is ready for static deployment on Vercel.

To deploy:

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Deploy as a static site.

---

## Roadmap

Possible future improvements:

* Add more subjects
* Expand support to more classes and paper patterns
* Improve answer quality and formatting
* Add topic-wise filtering
* Add saved history / favorites
* Add mobile-first refinements

---

## Contributing

Contributions are welcome. A good workflow is:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Open a pull request

---

## License

M.I.T License 

---

## Contact

**Safan Kaisani**

GitHub: [SafanKaisani](https://github.com/SafanKaisani)

