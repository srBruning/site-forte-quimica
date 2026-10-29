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

O build fica na pasta `dist/`. Para publicar, envie o conteúdo dessa pasta para uma hospedagem de sites estáticos.

## Configurar o domínio e o SEO

Copie o exemplo de ambiente e substitua pelo domínio público real:

```bash
cp .env.example .env
```

```dotenv
PUBLIC_SITE_URL=https://seu-dominio.com.br
```

Defina a mesma variável no ambiente de build da hospedagem. Ela é usada para gerar URLs absolutas nas tags `canonical`, Open Graph e X/Twitter, nos dados estruturados e no `sitemap.xml`. Sem o domínio configurado, essas URLs não são publicadas para evitar referências incorretas. Depois da publicação, confira `https://SEU-DOMINIO/robots.txt` e `https://SEU-DOMINIO/sitemap.xml`.

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
