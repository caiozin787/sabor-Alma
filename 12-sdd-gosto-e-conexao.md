# 12 - SDD: Restaurante Sabor & Alma (Rede e Gastronomia)

## Overview

O objetivo e projetar a infraestrutura tecnologica e a identidade de marca de um restaurante portugues.
O sistema deve sustentar operacao de alta performance (pedidos via tablet e POS) enquanto oferece
experiencia digital fluida para o cliente (WiFi seguro e site informativo).

Foco principal:

1. Seguranca da informacao.
2. Convergencia entre o fisico e o digital.

## Development Process

## 1. Specify (O que)

User Journey:

1. Cliente entra no espaco.
2. Cliente conecta no WiFi por portal cativo.
3. Cliente acede ao menu digital.
4. Colaborador usa rede interna para enviar pedidos em tempo real a cozinha.

Elementos essenciais:

1. Infraestrutura: rede estruturada com VLAN para separar pagamentos e acesso publico.
2. Marketing: identidade visual coerente em menus, cartoes e redes sociais.
3. Seguranca: firewall ativa para filtragem de conteudos e uso produtivo da rede institucional.

Sucesso:

Um ambiente em que a tecnologia e invisivel, mas essencial, garantindo rapidez no servico
e protecao de dados de clientes e colaboradores.

## 2. Plan (Como)

1. Arquitetura de rede: topologia em estrela centralizada em bastidor.
2. Norma fisica: cablagem CAT6 para melhor robustez a ruido de ambiente de cozinha.
3. Arquitetura visual: design moderno e clean.
4. Tipografia: sem serifa para transmitir modernidade e eficiencia.
5. Tom de voz: profissional, caloroso e confiavel.
6. Paleta:
   - Terracota
   - Cinza Ardosia
   - Branco creme

## 3. Tasks (Trabalho)

1. Engenharia de Rede: planta no SketchUp e simulacao no Cisco Packet Tracer.
2. Identidade de Marca: logotipo, cartao de visita, flyer e capas de redes sociais.
3. Presenca Web: layout responsivo com Menu, Reservas e Intranet restrita para funcionarios.
4. Seguranca e Orcamento: regras de firewall e levantamento de custos de hardware.
5. Producao Audiovisual: spot publicitario de 30 segundos.

## 4. Implement (Execucao)

1. Rede: bloquear sites de alto consumo na rede Guest.
2. Rede: bloquear conteudos improprios na rede Staff.
3. Design: garantir QR Code funcional em cartao e flyer para menu digital.

## Requisites

- [ ] Conetividade: cobertura WiFi total com minimo de -65 dBm em todas as areas de clientes.
- [ ] Segregacao: rede POS isolada da rede de clientes (fisica ou logica).
- [ ] Consistencia: logotipo legivel em icone pequeno e flyer impresso.
- [ ] Acessibilidade: reserva de mesa em menos de 3 cliques no site.

## Tests

1. Teste de carga: suportar 50 dispositivos simultaneos sem latencia no sistema de pedidos.
2. Teste de seguranca: acesso da rede publica ao servidor de gestao deve falhar.
3. Teste de marca: identidade visual deve transmitir restaurante moderno e organizado.
4. Teste de orcamento: custo total deve ser viavel para pequeno/medio negocio.

## Contexto do negocio

1. Nome: Restaurante Sabor & Alma.
2. Localizacao: Fatima, Portugal.
3. Publico-alvo: turistas e familias.
4. Capacidade: 50 lugares.
5. Preco medio por pessoa: EUR 20.
