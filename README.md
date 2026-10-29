# Forte Química Polibom

Site institucional estático da Forte Química Polibom, criado com **Astro**, **Tailwind CSS** e **React**. Reúne informações da loja, horários, mapa, redes sociais e um blog de artigos sobre limpeza.

## Requisitos

- Node.js e npm instalados

## Rodar em desenvolvimento

Na raiz do projeto:

```bash
npm ci
npm run dev
```

Abra o endereço mostrado pelo Astro no terminal, normalmente `http://localhost:4321`.

## Gerar e visualizar a versão estática

```bash
npm run build
npm run preview
```

O build fica na pasta `dist/`.

### Publicar na Vercel

Importe o repositório na Vercel e use o preset **Astro**. Mantenha o diretório raiz do projeto como `.`. A Vercel detecta o comando `npm run build` e o diretório de saída `dist` automaticamente; não é necessário configurar `base` ou instalar um adapter para este site estático. Se houver overrides antigos, use **Build Command:** `npm run build` e **Output Directory:** `dist`.

A configuração usa a URL de produção fornecida pela Vercel para os metadados de SEO. Se você tiver um domínio próprio, defina `PUBLIC_SITE_URL` com a URL completa desse domínio nas variáveis de ambiente de produção da Vercel e faça um novo deploy. Não use a URL do GitHub Pages nessa variável ao publicar na Vercel.

### Publicar no GitHub Pages

O repositório inclui um workflow de publicação no GitHub Pages a cada push na branch `main`. Ative **Settings → Pages → Build and deployment → Source: GitHub Actions** no repositório para permitir o deploy. Nesse workflow, o prefixo `/site-forte-quimica/` é aplicado somente ao build do GitHub Pages.

## Configurar o domínio e o SEO

Copie o exemplo de ambiente e substitua pelo domínio público real:

```bash
cp .env.example .env
```

```dotenv
PUBLIC_SITE_URL=https://seu-dominio.com.br
```

Na Vercel, essa variável é opcional quando você usa o domínio de produção fornecido pela plataforma. Defina-a para um domínio próprio. Ela é usada para gerar URLs absolutas nas tags `canonical`, Open Graph e X/Twitter, nos dados estruturados e no `sitemap.xml`. Sem o domínio configurado, essas URLs não são publicadas para evitar referências incorretas. Depois da publicação, confira `https://SEU-DOMINIO/robots.txt` e `https://SEU-DOMINIO/sitemap.xml`.

O SEO da página inclui título, descrição, idioma `pt-BR`, metadados sociais, imagem de compartilhamento, dados estruturados da loja e dos artigos, além de `robots.txt` e sitemap. A configuração fica em `src/layouts/BaseLayout.astro`, `src/pages/robots.txt.ts` e `src/pages/sitemap.xml.ts`.

## Conteúdo e arquivos principais

| Arquivo | Finalidade |
| --- | --- |
| `src/pages/index.astro` | Página inicial, horários, contato e mapa |
| `src/pages/blog/index.astro` | Listagem dos artigos |
| `src/pages/blog/[slug].astro` | Modelo de cada artigo |
| `src/data/posts.ts` | Textos, descrições, fontes e tabelas dos artigos |
| `src/layouts/BaseLayout.astro` | Layout, metadados e dados estruturados |
| `src/components/ContactCard.jsx` | Links de WhatsApp, Instagram e Facebook com ícones |
| `src/styles.css` | Estilos globais e Tailwind CSS |
| `public/images/` | Logotipo e imagem de compartilhamento |

Para adicionar um artigo, inclua um novo objeto no array `posts` em `src/data/posts.ts`, com um `slug` único, título, descrição, categoria, tempo de leitura e seções. A página do artigo e sua entrada no sitemap são geradas a partir desse array. O campo opcional `sources` exibe as referências consultadas. O campo opcional `mixtures` alimenta a tabela do artigo sobre misturas perigosas.

## Atualizar informações da empresa

Confira os dados em `info.txt` e nas imagens de referência antes de alterar telefone, endereço ou horário. Os links de contato estão em `src/components/ContactCard.jsx`; endereço e horário aparecem em `src/pages/index.astro` e nos dados estruturados de `src/layouts/BaseLayout.astro`. A localização usa as coordenadas fornecidas no mapa da página inicial.

## Comandos disponíveis

| Comando | Resultado |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Mostra localmente o build gerado |
