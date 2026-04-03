# 🔗 Linktree — Renan Tiberto

Página pessoal de links construída com **Next.js 15**, **Tailwind CSS v4** e **Phosphor Icons**, com suporte a tema claro/escuro.

> Projeto originalmente desenvolvido em HTML/CSS puro e migrado para Next.js como exercício de aprendizado.

---

## ✨ Funcionalidades

- 🌙 Tema claro/escuro com persistência via `localStorage`
- ⚡ Dados de perfil e links centralizados em um único arquivo TypeScript
- 🎨 Ícones via Phosphor Icons
- 📱 Layout responsivo
- 🔤 Tipografia customizada com `next/font` (Ubuntu + Ubuntu Mono)

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15 | Framework React com App Router |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utilitária |
| [Phosphor Icons](https://phosphoricons.com/) | latest | Ícones dos links |
| [next-themes](https://github.com/pacocoursey/next-themes) | latest | Gerenciamento de tema claro/escuro |
| TypeScript | 5 | Tipagem estática |

---

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── globals.css       # Configuração base do Tailwind + dark mode
│   ├── layout.tsx        # Layout raiz com fontes e ThemeProvider
│   └── page.tsx          # Página principal
├── components/
│   ├── LinkButton.tsx    # Botão de link com ícone Phosphor
│   └── ThemeToggle.tsx   # Botão de alternância de tema
├── data/
│   └── profile.ts        # ⚙️ Dados dinâmicos (nome, links, avatar)
└── types/
    └── index.ts          # Tipagem TypeScript
```

---

## 📜 Histórico de migração

| Antes | Depois |
|---|---|
| HTML estático | Next.js 15 App Router |
| CSS puro com variáveis | Tailwind CSS v4 |
| `data-theme` + JS vanilla | `next-themes` + classe `.dark` |
| Imagens PNG como ícones | Phosphor Icons |
| Links hardcoded no HTML | `src/data/profile.ts` tipado |
| `document.getElementById` para o ano | `new Date()` em Server Component |

---

## 📄 Licença

MIT © [Renan Tiberto](https://github.com/renantiberto)