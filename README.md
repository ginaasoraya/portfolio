# Portfolio Website – Gina Soraya Ruffino

Willkommen im Repository meiner persönlichen Portfolio-Website. Dieses Projekt dient dazu, meine Arbeiten als Multimedia Producerin und Graphic Designerin visuell ansprechend zu präsentieren.

## Projekt-Hintergrund & Entstehung

### Die ursprüngliche Idee (Der Pivot)
Ehrlicherweise war dieses Portfolio nicht mein erster Plan für dieses Modul. Ursprünglich hatte ich vor, gemeinsam mit Lara eine begleitende Website für unser "Malle Song Projekt" zu entwickeln.

Leider ist dieses Musik-Projekt aufgrund externer Faktoren ins Stocken geraten. Da das Projekt stagnierte, fehlten uns schlichtweg die Inhalte (Content, Medien, Texte), um eine sinnvolle Website darum herumzubauen. Deshalb musste ich umdisponieren und habe mich entschieden, stattdessen eine Portfolio-Page für mich selbst zu erstellen. Das gab mir die Möglichkeit, bestehende Arbeiten aus meinem Studium und meiner Tätigkeit beim Tagblatt neu zu verpacken.

### Mein technischer Ansatz
Da ich mich technisch eher als Anfàngerin sehe und meine Stärken definitiv mehr im Visuellen und Konzeptionellen liegen, war dieses Projekt eine ziemliche Herausforderung für mich. Mein Ziel war es nicht, den komplexesten Code der Welt zu schreiben, sondern mit den mir bekannten Mitteln (und viel Recherche und viel Chat GPT Unterstützung) ein Design umzusetzen, das trotzdem professionell und "poliert" aussieht.

Ich habe bewusst auf Baukästen verzichtet und alles selber mit HTML, CSS und JavaScript gebaut, um die Grundlagen wirklich zu verstehen und zu üben. Und somit das Portfolio auch selbst als Arbeit präsentieren kann, beim bewerben.

---

## Features

* **One-Page Scroll Design:** Die Hauptseite ist in Sektionen unterteilt, die beim Scrollen "einrasten" (CSS Scroll Snap)
* **Responsive Design:** Die Seite funktioniert auf Desktop und Mobile. Das Layout passt sich an (z.B. wird das 2-Spalten-Grid auf dem Handy aufgelöst und die Navigation der Titel ändert sich).
* **Subpages:** Für detaillierte Projekteinblicke (z.B. "OLMA", "Tagblatt") gibt es Unterseiten, die im gleichen Designstil gehalten sind.
* **Video-Integration:** HTML5-Videoplayer für Reels und Social Media Content.
* **Interaktive Elemente:**
    * Hover-Effekte auf Bildern.
    * **Fly-In Animation:** Texte fliegen beim Scrollen seitlich oder von unten ins Bild (gesteuert über JavaScript).
* **Visuelle Details:** Dekorative Elemente (Sterne, Blumen) sind teilweise absolut positioniert und rotieren leicht, um den "Collage-Look" zu unterstützen. Die Gifs sollen ein wenig Bewegung ins Bild bekommen.

---

## Tech Stack

* **HTML5:** Semantische Struktur der Inhalte.
* **CSS3:** Nutzung von Flexbox, CSS Grid, CSS Variables (für konsistente Farben/Fonts) und Media Queries für Mobile-Optimierung.
* **JavaScript (Vanilla):** Ein `IntersectionObserver` Skript für die wiederkehrenden Scroll-Animationen.

---

## Schwierigkeiten & Learnings

Während der Entwicklung bin ich auf einige Hürden gestoßen, die ich lösen musste:

### 1. Mobile Responsiveness (Der Header)
Eine der größten Schwierigkeiten war der Titel "GINA SORAYA RUFFINO" auf dem Handy.
* **Problem:** Die Schrift sollte groß bleiben, aber die Wörter überlappten sich ständig oder brachen falsch um.
* **Lösung:** Ich musste tief in die CSS-Trickkiste greifen (`line-height`, negative `margin-top` und `word-wrap: break-word`), um die Wörter "gestapelt" darzustellen, ohne dass sie sich berühren.

### 2. Das JavaScript für die Animation
Ich wollte, dass die Titel beim Scrollen "einfliegen".
* **Problem:** Anfangs passierte die Animation nur einmal beim Laden der Seite.
* **Lösung:** Ich habe ein externes JS-Script (`script.js`) eingebunden. Die Herausforderung war, die Logik so zu schreiben, dass die Klasse `.visible` wieder entfernt wird, wenn man wegscrollt – damit die Animation jedes Mal neu abspielt, wenn man zur Sektion zurückkehrt.

### 3. Layout & Positionierung (Z-Index)
Da ich viele dekorative Elemente (Sterne, Blumen) benutze, war der Umgang mit `position: absolute` und `z-index` oft verwirrend.
* **Problem:** Manchmal verdeckten Sterne den Text oder Links waren nicht klickbar, weil ein unsichtbares Bild darüber lag.
* **Lösung:** Sorgfältiges Management der `z-index` Ebenen und Nutzung von `pointer-events: none` für Deko-Elemente.

### 4. Bildgrößen in der Galerie
In der Projekt-Übersicht hatten unterschiedliche Bilder das Layout zerschossen, da sie verschiedene Auflösungen hatten. Ich musste lernen, Bilder mit CSS auf feste Breiten zu zwingen (z.B. `width: 300px`), aber trotzdem responsive zu halten (`max-width: 100%`), damit sie auf dem Handy nicht überlaufen.

---

## 📂 Ordnerstruktur

```text
/ (Root)
├── index.html          # Startseite (One-Pager)
├── style.css           # Das gesamte Design
├── script.js           # Animationen (IntersectionObserver)
├── tagblatt.html       # Unterseite Tagblatt
├── mmp.html            # Unterseite MMP
├── assistant.html      # Unterseite Assistant
├── olma.html           # Unterseite OLMA & OAF
├── pending.html        # Platzhalter Seite
├── bilder/             # Ordner für Fotos & Hintergründe
├── grafik/             # Ordner für Sterne & Deko
└── video/              # Ordner für Projektvideos (werden von Git ignoriert weil die Dateien zu gross waren)
