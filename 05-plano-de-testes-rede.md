# 05 - Plano de Testes de Rede

## Objetivo

Validar que a rede cumpre conectividade, seguranca, desempenho basico e isolamento entre segmentos.

## Matriz de testes (SDD Sabor & Alma)

1. T01 - Conectividade interna por VLAN (gateway e servicos essenciais).
2. T02 - POS VLAN 20 para destino de pagamento permitido.
3. T03 - Guest VLAN 40 para POS VLAN 20 (resultado esperado: bloqueado).
4. T04 - Guest VLAN 40 para servidor de gestao VLAN 50 (resultado esperado: bloqueado).
5. T05 - Guest VLAN 40 para Internet (resultado esperado: permitido com politicas de banda).
6. T06 - Cobertura WiFi em area de clientes (resultado esperado: minimo -65 dBm).
7. T07 - Carga: 50 dispositivos simultaneos sem latencia critica no fluxo de pedidos.
8. T08 - Marca: paleta e logo avaliados como modernos e organizados.
9. T09 - Orcamento: custo final viavel para pequeno/medio negocio.

## Modelo de registo de teste (preenchimento)

| ID | Objetivo | Origem -> Destino | Passos executados | Resultado esperado | Resultado obtido | Evidencia | Estado |
|---|---|---|---|---|---|---|---|
| T01 | Conectividade por VLAN | PC Admin -> Gateway | Ping e DHCP | Sucesso | A recolher | Print ping | Pendente |
| T02 | POS para gateway pagamento | POS -> 198.51.100.10:443 | Acesso HTTPS | Sucesso | A recolher | Print ACL | Pendente |
| T03 | Isolamento POS | Guest -> POS | Ping/HTTP | Bloqueado | A recolher | Print bloqueio | Pendente |
| T04 | Isolamento servidor | Guest -> Servidor | Ping/HTTP | Bloqueado | A recolher | Print bloqueio | Pendente |
| T05 | Guest para Internet | Guest -> Web | Navegacao | Permitido | A recolher | Print navegador | Pendente |
| T06 | Cobertura WiFi | Sala clientes | Medicao sinal | >= -65 dBm | A recolher | Print medicao | Pendente |
| T07 | Carga 50 dispositivos | VLAN 40 | Simulacao | Sem falhas | A recolher | Print carga | Pendente |
| T08 | Marca aprovada | Grupo | Revisao visual | Aprovado | A recolher | Ata/print | Pendente |
| T09 | Orcamento viavel | Grupo | Revisao custos | Aprovado | A recolher | Tabela final | Pendente |

## Criterios de aprovacao

1. 100% dos testes de seguranca aprovados (T03 e T04 obrigatorios).
2. 100% dos testes de conectividade critica aprovados (T01 e T02).
3. Teste de cobertura (T06) em conformidade com minimo de -65 dBm.
4. Teste de carga (T07) sem impacto impeditivo na operacao.
5. Teste de marca (T08) e orcamento (T09) aprovados pelo grupo.

## Plano de correcao

1. Classificar falha por severidade (alta/media/baixa).
2. Corrigir em ambiente de simulacao.
3. Reexecutar teste afetado.
4. Atualizar relatorio de evidencias.
