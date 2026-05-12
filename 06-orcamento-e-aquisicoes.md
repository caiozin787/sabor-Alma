# 06 - Orcamento e Aquisicoes

## Objetivo

Construir um orcamento realista, justificando custo, desempenho e manutencao da solucao.

## Processo de orcamento

1. Extrair lista tecnica do projeto de rede.
2. Definir quantidade por item.
3. Pesquisar no minimo 2 fornecedores por item.
4. Registar preco unitario, prazo, garantia e marca.
5. Calcular subtotal por categoria e total geral.
6. Adicionar margem de contingencia (ex: 8% a 12%).

## Categorias de custo

1. Ativos de rede: router, firewall, switch, AP.
2. Passivos: cabos, tomadas, patch panel, rack.
3. Energia e protecao: UPS, filtros de linha.
4. Equipamentos finais: POS, tablets, PC admin.
5. Servicos: instalacao, configuracao, suporte inicial.

## Tabela base (estimativa em EUR)

| Item | Qtde | Preco Unitario | Subtotal | Fornecedor | Garantia | Observacoes |
|---|---:|---:|---:|---|---|---|
| Router empresarial | 1 | 600 | 600 | A definir | 2 anos | Dual WAN |
| Firewall/UTM | 1 | 800 | 800 | A definir | 2 anos | Filtro web |
| Switch PoE 24 portas | 1 | 700 | 700 | A definir | 2 anos | PoE+ |
| AP WiFi 6 | 2 | 250 | 500 | A definir | 2 anos | Cobertura sala |
| Patch panel | 1 | 120 | 120 | A definir | 1 ano | 24 portas |
| Rack 19 pol | 1 | 400 | 400 | A definir | 2 anos | 12U |
| Cabo Cat6 (m) | 300 | 1 | 300 | A definir | - | Bobina |
| Tomada/Keystone RJ45 | 20 | 4 | 80 | A definir | - | 13 pontos + reserva |
| UPS | 1 | 350 | 350 | A definir | 2 anos | 1000 VA |
| POS | 1 | 1200 | 1200 | A definir | 2 anos | Terminal pagamento |
| Tablet | 4 | 300 | 1200 | A definir | 1 ano | Pedidos sala |
| PC admin | 1 | 900 | 900 | A definir | 2 anos | Backoffice |
| Impressora cozinha | 1 | 300 | 300 | A definir | 1 ano | Tickets |
| Servidor/NAS | 1 | 900 | 900 | A definir | 2 anos | Intranet |
| Licenca UTM (1 ano) | 1 | 400 | 400 | A definir | - | Filtro web |
| Instalacao e configuracao | 1 | 900 | 900 | A definir | - | Cablagem e setup |

**Total sem contingencia:** EUR 9650

**Contingencia (10%):** EUR 965

**Total com contingencia:** EUR 10615

## Criterios de selecao

1. Compatibilidade tecnica com desenho de rede.
2. Relacao custo-beneficio.
3. Garantia e suporte local.
4. Prazo de entrega.
5. Escalabilidade para crescimento.
6. Viabilidade para pequeno/medio negocio local.

## Validacao final do orcamento (obrigatoria)

1. Comparar total com capacidade real de investimento do negocio ficticio (alvo EUR 10000).
2. Confirmar que nao ha item subdimensionado para 50 dispositivos.
3. Confirmar que o custo de seguranca (firewall/UTM) esta contemplado.
4. Registrar pelo menos 1 alternativa por item critico.

## Entregaveis

1. Tabela final com total sem e com contingencia.
2. Notas de justificacao por item critico.
3. Lista de alternativas de backup.
