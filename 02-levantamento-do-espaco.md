# 02 - Levantamento do Espaco

## Objetivo

Mapear o restaurante para decidir onde ficam os pontos de rede e WiFi, garantindo cobertura e eficiencia operacional.

## Planta simplificada (estimativa)

Area total aproximada: 120 m2

## Planta simplificada (ASCII)

Legenda:
AP = Access Point | POS = Pagamentos | PC = Computador | PRN = Impressora | RACK = Bastidor
RJ = Ponto RJ45 | TS = Tablet Staff (WiFi)

+--------------------------------------------------+
|                      SALA                        |
|             (60 m2 / 50 lugares)                 |
|                                                  |
|   AP-SALA (RJ)                                   |
|                                                  |
|                         AP-ENTRADA (RJ)          |
+-----------------------+--------------------------+
|        BALCAO          |          COZINHA         |
|       (10 m2)          |          (25 m2)         |
| POS (RJ)               | PC-COZ (RJ)              |
|                        | TS (WiFi)                |
+-----------+------------+------------+-------------+
| ESCRITORIO | ARMAZEM    | AREA TECNICA/RACK        |
| (8 m2)     | (7 m2)     | (4 m2)                   |
| PC (RJ)    | RJ         | RACK (RJ)                |
| PRN-ADM(RJ)|            | UPS + PATCH PANEL        |
+-----------+------------+--------------------------+

| Zona | Dimensao aprox. | Observacoes |
|---|---|---|
| Sala de clientes | 60 m2 | Maior fluxo de clientes e WiFi Guest |
| Cozinha | 25 m2 | Equipamentos com potencial interferencia |
| Balcao/entrada | 10 m2 | POS e rececao de reservas |
| Escritorio | 8 m2 | PC admin e impressora |
| Armazem | 7 m2 | Inventario e ponto de rede simples |
| Area tecnica/rack | 4 m2 | Bastidor, UPS e patch panel |

## Materiais e interferencias

1. Paredes internas: gesso e vidro (interferencia baixa a media).
2. Cozinha: metal e equipamentos industriais (interferencia alta local).
3. Area tecnica: parede de alvenaria com boa isolacao.

## Densidade e dispositivos

1. Pico de clientes: 50 pessoas.
2. Dispositivos clientes: ate 50 simultaneos (WiFi Guest).
3. Dispositivos internos: 1 POS, 4 tablets, 1 PC admin, 1 PC cozinha, 1 impressora escritorio.

## Pontos RJ45 por zona

1. Balcao: 2 pontos (POS, rede reserva).
2. Cozinha: 2 pontos (PC cozinha para pedidos, reserva).
3. Sala de clientes: 4 pontos (AP-SALA, AP-ENTRADA, ponto extra, reserva).
4. Escritorio: 2 pontos (PC admin, impressora).
5. Armazem: 1 ponto (inventario).
6. Area tecnica/rack: 2 pontos (uplink ISP, gestao).

Total estimado: 13 pontos RJ45.

## Esquema de rede na planta (posicionamento)

1. RACK/Area tecnica: router, firewall, switch core PoE, patch panel e UPS.
2. AP-ENTRADA: no balcao, cobrindo entrada e metade da sala.
3. AP-SALA: no centro da sala para cobertura uniforme.
4. POS: balcao com 2 pontos RJ45 (principal e reserva).
5. Cozinha: 1 ponto RJ45 para PC de pedidos e 1 reserva.
6. Escritorio: 2 pontos RJ45 (PC admin e impressora administrativa).
7. Armazem: 1 ponto RJ45 para inventario.

## Proposta inicial de localizacao dos APs

1. AP-ENTRADA: proximo do balcao, cobre entrada e metade da sala.
2. AP-SALA: no centro da sala para cobertura uniforme.

## Estimativa de cabos e percurso

1. Cabos totais estimados: 280 m de Cat6.
2. Percurso principal no teto falso com descidas por calhas.
3. Patch cords curtos no rack para organizacao.

## Mapa de cobertura WiFi (meta)

1. Sala de clientes: sinal minimo -65 dBm.
2. Balcao/entrada: sinal minimo -60 dBm.
3. Cozinha: sinal minimo -65 dBm para tablets.
