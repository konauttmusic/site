# KONAUTT — site oficial

Site estático do projeto musical KONAUTT. A implementação usa apenas HTML, CSS e JavaScript nativos, sem framework, pré-processador ou etapa de build.

## Estrutura

```text
site/
├── index.html               # Página inicial e apresentação
├── music.html               # Prods e releases
├── shows.html               # Sets e apresentações ao vivo
├── contact.html             # Contato, bookings e streamings
├── robots.txt               # Orientação para rastreadores
├── README.md                # Documentação do projeto
└── assets/
    ├── css/
    │   └── styles.css       # Layout, temas e responsividade
    └── js/
        └── app.js           # Menu, tema, idioma e preferências
```

## Executar localmente

Como não há build, basta servir a raiz do projeto com qualquer servidor HTTP estático. Exemplo:

```powershell
python -m http.server 8080
```

Ou, caso o VS Code esteja em uso, abrir `index.html` com a extensão Live Server.

## Convenções

- As quatro páginas usam a mesma navegação e os mesmos arquivos compartilhados.
- Os textos traduzíveis recebem uma chave `data-i18n` e vivem no objeto `translations` de `assets/js/app.js`.
- Tema e idioma são persistidos no `localStorage` do navegador.
- O tema inicial respeita a preferência do sistema; o idioma inicial respeita o navegador.
- Novos estilos devem reutilizar as variáveis CSS declaradas no início de `styles.css`.
- Links externos e placeholders ficam centralizados no objeto `EXTERNAL_LINKS`, no início de `assets/js/app.js`.

## Preencher links externos

Substitua no objeto `EXTERNAL_LINKS` os valores de `pressKit`, `photos`, `spotify`, `appleMusic`, `youtubeMusic`, `soundCloud`, `deezer` e `amazonMusic`. Os links de YouTube, Anghami e Spinn Radio já apontam para os destinos encontrados.

## Publicação

Publique a raiz deste projeto como raiz do site estático. Não é necessário executar `npm install` ou compilar arquivos.
