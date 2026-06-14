## Primitivas geométricas

Dentro de `geometry` estão armazenadas as primitivas geométricas que o projeto suporta.

`ImageObject` é responsável por carregar uma `Image` e alocar na cena.

## Renderer

Nesse projeto é utilizado uma implementação com `p5.js`.


3. Hybrid: Framebuffer + Pipeline explícita (recomendado para o seu caso)
Combina os dois. Você tem uma pipeline explícita de estágios, como uma GPU simplificada:
Vertex Stage → Clipping → Rasterization → Fragment Stage → Framebuffer → Display
Cada estágio é intercambiável. Shaders entram como funções nos estágios de vertex e fragment.

