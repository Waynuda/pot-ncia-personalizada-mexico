

## Quiz Funnel — Viren (32 Etapas + Página de Vendas)

### Visão Geral
Um quiz interativo de funil de vendas com 32 etapas + página de checkout final, inspirado no design do quiz Viren (fundo branco, cards verdes, barra de progresso). O site será mobile-first, com animações fluidas de transição entre etapas e micro-interações nos cliques.

---

### Design & Estilo Visual
- **Paleta**: Fundo branco, cor primária verde (#16a34a), textos escuros
- **Layout**: Centralizado, max-width ~600px, estilo card-based como o modelo
- **Logo "VIREN"** no topo com o "V" estilizado em verde
- **Barra de progresso** animada no topo (verde, cresce suavemente a cada etapa)
- **Tipografia**: Clean, moderna, sans-serif

### Animações
- **Transição entre etapas**: Slide horizontal com fade (entrada da direita, saída pela esquerda)
- **Cards de opção**: Scale-up no hover, ripple effect no clique, borda verde ao selecionar
- **Barra de progresso**: Animação suave de preenchimento
- **Escalas (1-5)**: Botões com bounce ao selecionar
- **Etapas educativas**: Fade-in escalonado dos elementos (título → imagem → texto)
- **Contagem regressiva (checkout)**: Pulso sutil nos números
- **Gráficos comparativos**: Barras que crescem animadas ao entrar na tela

---

### Estrutura das 32 Etapas

**Bloco 1 — Segmentação (Etapas 1-4)**
- Etapa 1: Seleção de idade com cards de imagem (grid 2x2)
- Etapa 2: Tipo de corpo com cards ilustrativos (Magro, Médio, Acima do peso)
- Etapa 3: Tela de transição/prova social — "Mais de 1 milhão de homens" com imagem de progresso
- Etapa 4: Objetivos com múltipla escolha (checkboxes estilizados + botão continuar)

**Bloco 2 — Educação (Etapas 5-12)**
- Etapa 5: Tela educativa com infográfico sobre assoalho pélvico
- Etapas 6-7: Perguntas com opções em lista vertical
- Etapas 8-9: Escala de 1 a 5 com botões numéricos
- Etapa 10: Tempo desejado (opções em lista)
- Etapa 11: Experiência prévia (opções em lista)
- Etapa 12: Tela de promessa com gráfico comparativo animado

**Bloco 3 — Diagnóstico (Etapas 13-19)**
- Etapas 13-17: Perguntas com opções em lista/botões
- Etapa 18: Tela educativa anatômica
- Etapa 19: Prova social com card de depoimento (nome, texto, estrelas)

**Bloco 4 — Estilo de Vida (Etapas 20-25)**
- Etapa 20: Dia a dia (opções com ícones)
- Etapa 21: Escala de estresse (1-5)
- Etapas 22-24: Opções em lista vertical
- Etapa 25: Múltipla escolha de hábitos

**Bloco 5 — Contexto e Captura (Etapas 26-32)**
- Etapas 26-30: Perguntas com opções em lista
- Etapa 31: Campo de texto para nome com animação de foco
- Etapa 32: Tela de autoridade com logos de universidades

---

### Página de Vendas (Checkout Final)
- **Headline personalizada**: "Seu Treino Personalizado Está Pronto, [Nome]."
- **Timer regressivo** de 10 minutos com pulso visual
- **Gráfico de transformação**: Barras animadas (Desempenho, Confiança, Controle) — antes vs depois
- **Cards de preço**: Plano Básico (R$97) e Plano Premium (R$147) com ancoragem de preço riscado
- **Selos de segurança** e garantia de satisfação
- **FAQ** com accordion animado para quebra de objeções
- **Botão CTA** verde com pulse animation

---

### Componentes Técnicos
- Estado global do quiz via React state (respostas, etapa atual, nome)
- Componentes reutilizáveis: `QuizStep`, `OptionCard`, `ScaleSelector`, `MultiSelect`, `EducativeSlide`, `ProgressBar`
- Animações via CSS transitions + keyframes do Tailwind
- Timer do checkout com `setInterval`
- Layout responsivo mobile-first

