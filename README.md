# TENSS Electronics Practical & Lectures

This repository contains the learning resources, practical guides, and lecture slide decks for the **TENSS 2026 Electronics Module (Day 1.0)**.

---

## Repository Structure

*   `docs/` - Contains the markdown documentation files for the student tutorials.
    *   `docs/media/` - Shared folder containing all illustrations and diagrams.
*   `mkdocs.yml` - Configuration file for generating the documentation website.
*   `requirements.txt` - Python dependencies for serving/building the website.

---

## How to Build the Beamer Presentation PDF

The Beamer slide deck is located in `lectures/slides.tex`. To compile it into a presentation PDF, run the following command from the root of the repository:

```bash
pdflatex -output-directory=lectures lectures/slides.tex
```

*Note: Running this command will read the illustrations from the `docs/media/` folder using relative paths, generating the final PDF at `lectures/slides.pdf`.*

---

## How to Run the Tutorial Website Locally

1.  **Activate the Virtual Environment:**
    ```bash
    source venv/bin/activate
    ```
2.  **Start the Local Development Server:**
    ```bash
    mkdocs serve
    ```
3.  **View in Browser:**
    Open `http://127.0.0.1:8000/` in your browser. The interactive HTML slides can be accessed directly from the link in the site header or at `http://127.0.0.1:8000/lectures/slides.html`.
