# 🎓 Mon Site Académique — Guide de déploiement

## 📁 Structure des fichiers

```
ton-username.github.io/
├── index.html                  ← Page principale (tout le site)
├── assets/
│   ├── css/
│   │   └── style.css          ← Styles (couleurs, mise en page)
│   ├── js/
│   │   └── main.js            ← Comportement (menu, animations)
│   ├── img/
│   │   ├── profile.jpg        ← Ta photo de profil (⚠️ obligatoire)
│   │   └── favicon.png        ← Icône de l'onglet (optionnel)
│   └── files/
│       └── cv.pdf             ← Ton CV en PDF
└── README.md                  ← Ce fichier
```

---

## 🚀 Mise en ligne sur GitHub Pages

### Étape 1 — Créer le dépôt
1. Va sur [github.com/new](https://github.com/new)
2. Nomme le dépôt exactement : `ton-username.github.io`
   (remplace `ton-username` par ton vrai username GitHub)
3. Coche **Public**
4. Clique **Create repository**

### Étape 2 — Uploader les fichiers
1. Dans ton dépôt, clique **Add file → Upload files**
2. Glisse-dépose tous les fichiers en **respectant la structure** ci-dessus
3. Clique **Commit changes**

### Étape 3 — Activer GitHub Pages
1. Va dans **Settings → Pages**
2. Source : **Deploy from a branch**
3. Branch : **main** / **(root)**
4. Clique **Save**

### Étape 4 — Ton site est en ligne ! 🎉
➡️ `https://ton-username.github.io`
(attends 2-5 minutes la première fois)

---

## ✏️ Que faut-il personnaliser ?

Recherche et remplace tous les textes marqués en MAJUSCULES :

| Placeholder | Remplace par |
|---|---|
| `VOTRE_PRENOM` | Ton prénom |
| `VOTRE_NOM` | Ton nom de famille |
| `VOTRE_EMAIL@univ.fr` | Ton email professionnel |
| `VOTRE_UNIVERSITÉ` | Nom de ton université |
| `VOTRE_LABORATOIRE` | Nom de ton laboratoire |
| `VOTRE_SUJET_DE_THESE` | Titre ou sujet de ta thèse |
| `VOTRE_DIRECTEUR` | Nom de ton directeur de thèse |
| `VOTRE_USERNAME` | Ton username GitHub |
| `VOTRE_LINKEDIN` | Ton URL LinkedIn |
| `VOTRE_ID` | Ton ID Google Scholar |
| `VOTRE_ORCID` | Ton ORCID (ex: 0000-0001-2345-6789) |
| `TITRE_PROJET_1` | Titre de ton projet principal |
| `DESCRIPTION_PROJET_1` | Description du projet |
| `TITRE_COMPLET_DE_VOTRE_PUBLICATION_1` | Titre de ta publication |

---

## 🎨 Personnaliser les couleurs

Dans `assets/css/style.css`, modifie les variables au début :

```css
:root {
  --accent:  #4f9cf9;  /* Couleur principale (bleu par défaut) */
  --accent2: #a78bfa;  /* Couleur secondaire (violet) */
  --bg:      #0d0f14;  /* Fond principal (noir foncé) */
}
```

Exemples d'autres couleurs :
- Vert médical : `--accent: #10b981`
- Violet IA :    `--accent: #8b5cf6`
- Orange chaud : `--accent: #f97316`

---

## 📸 Ajouter ta photo

1. Prends une photo professionnelle (fond neutre de préférence)
2. Renomme-la `profile.jpg`
3. Mets-la dans `assets/img/profile.jpg`
4. Taille recommandée : 400×400 px minimum, format carré

---

## 📄 Ajouter ton CV PDF

1. Exporte ton CV en PDF
2. Renomme-le `cv.pdf`
3. Mets-le dans `assets/files/cv.pdf`

---

## ❓ FAQ

**Q : Comment modifier le site après publication ?**
→ Modifie les fichiers directement sur GitHub (clic sur le fichier → crayon ✏️), ou télécharge/réupload.

**Q : Comment ajouter une publication ?**
→ Dans `index.html`, copie un bloc `<div class="pub-item">` et modifie le contenu.

**Q : Comment changer la langue en anglais ?**
→ Modifie l'attribut `<html lang="fr">` en `<html lang="en">` et traduis les textes.

**Q : Mon site ne s'affiche pas ?**
→ Vérifie que le dépôt s'appelle exactement `ton-username.github.io` et que GitHub Pages est activé.
