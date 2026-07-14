# SX ImobiVision — site estático para GitHub + Netlify

Site pronto em HTML, CSS e JavaScript, sem dependências de build.

## Publicar no GitHub
1. Crie um repositório novo.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Confirme que `index.html` está na raiz.

## Publicar na Netlify
1. Na Netlify, escolha **Add new site > Import an existing project**.
2. Conecte o repositório do GitHub.
3. Build command: deixe vazio.
4. Publish directory: `.`
5. Publique.

O arquivo `netlify.toml` já define a pasta de publicação e cabeçalhos básicos.

## Formulários
Os formulários usam Netlify Forms (`data-netlify="true"`). Depois do primeiro deploy, envie um teste pelo formulário para confirmar o painel **Forms** da Netlify.

## Personalizações rápidas
- WhatsApp: procure por `5511971249331` nos arquivos HTML.
- E-mail: procure por `samuel.sxestg@gmail.com`.
- Logo: `assets/images/logo-sx-imobivision.png`.
- Portfólio: substitua as imagens em `assets/images/` e ajuste os títulos em `portfolio.html`.
- Depoimentos exibidos na página inicial são demonstrativos; troque por avaliações reais antes da divulgação pública.
- O texto da política de privacidade é um modelo inicial e deve ser revisado para a operação real.

## Estrutura
- `index.html`: página inicial completa.
- `servicos.html`: detalhamento dos serviços e limites da IA.
- `portfolio.html`: portfólio com filtros.
- `planos.html`: preços e calculadora visual.
- `parceiros.html`: proposta white label.
- `contato.html`: formulário Netlify e WhatsApp.
- `politica-de-privacidade.html`: modelo inicial.
- `assets/styles.css`: identidade visual responsiva.
- `assets/script.js`: menu, comparadores, animações, filtros e recomendação de pacote.

## Observação sobre imagens
As imagens desta primeira versão foram recortadas da referência visual fornecida para montar um protótipo coerente. Antes de divulgar, substitua por imagens de trabalhos reais ou imagens com licença adequada.
